<?php

namespace App\Http\Livewire;

use App\Models\Answer;
use App\Models\Betlist;
use App\Models\RiskBet;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
class Airplane extends Component
{
    public $isLoad;
    public $betMoney = 0;
    public $air;
    public $myDoller;
    public $accMoney;
    public $winMoney = 0;
    protected $listeners  = ['sendTime'=>'sendTime', 'noneLoad'=>'noneLoad', 'chkBet'=>'chkBet', 'calcMoney'=>'calcMoney', 'updateMyMoney'=>'updateMyMoney', 'riskCalcMoney'=>'riskCalcMoney'];

  
   
    public function sendTime(){
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $riskTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $riskAnswer = Answer::where('bet_time',$riskTime)->get();
        $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer, 'riskAnswer'=>$riskAnswer]);
    }
    public function chkBet($t){
        $this->betMoney = $t;
        $this->myDoller = intval($this->myDoller) - intval($t);
        $userMoney = Auth::user(); 
        $userMoney->money = $this->myDoller;
        $userMoney->save();
    }
    public function calcMoney($win){
        $this->winMoney = $win;
        $userMoney = Auth::user(); 
        $userMoney->money = intval($userMoney->money) + intval($win);
        // Log::info( $userMoney->money);
        $userMoney->save();
        
        
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::where('bet_time', $nowTime)->first();
        $betlist = new Betlist();
        $betlist->bet_number = $answer->number;
        $betlist->money = $this->betMoney;
        $betlist->result = $this->winMoney;
        $betlist->user_id = Auth::id();
        $betlist->save();

    }
    public function riskCalcMoney($riskWinMoney, $totalBet, $guessAirArray){
        Log::info(json_encode($guessAirArray));
        $nowTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::where('bet_time', $nowTime)->first();
        $riskbet = new RiskBet();
        $riskbet->bet_number = $answer->number;
        $riskbet->guess = json_encode($guessAirArray);
        $riskbet->money = $totalBet;
        $riskbet->result = $riskWinMoney;
        $riskbet->user_id = Auth::id();
        $riskbet->save();

    }
    public function updateMyMoney(){
        $this->myDoller = Auth::user()->money;
        // $this->myDoller->save();
        $m = $this->myDoller;
        $this->dispatchBrowserEvent('updateMyMoneyHtml', ['money'=>$m, 'win'=>$this->winMoney]);
        $this->winMoney = 0;
        $this->betMoney = 0;
    }
    public function render()
    {
        $this->myDoller = Auth::user()->money;
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $riskTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $riskAnswer = Answer::where('bet_time',$riskTime)->get();
        $this->dispatchBrowserEvent('startRun', ['answer'=>$answer, 'riskAnswer'=>$riskAnswer]);

        $betlist = Betlist::where('user_id', Auth::id())->orderBy('id', 'DESC')->get();
        $bet_count = Betlist::where('user_id', Auth::id())->count();
        $bet_sum = Betlist::where('user_id', Auth::id())->sum('money');
        return view('livewire.airplane', ['myDoller'=>$this->myDoller, 'answer'=>$answer, 'isLoad'=>$this->isLoad, 'betlist'=>$betlist, 'bet_count'=>$bet_count, 'bet_sum'=>$bet_sum])->layout('livewire/layouts/game');
        
    }
}
