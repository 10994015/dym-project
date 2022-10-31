<?php

namespace App\Http\Livewire;

use App\Models\Answer;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
class Airplane extends Component
{
    public $isLoad;
    public $betMoney = 0;
    public $rank = 1;
    public $air;
    public $myDoller;
    public $isGuess = true;
    public $accMoney;
    public $guessAirArray = [
        'no1'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no2'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no3'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no4'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no5'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no6'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no7'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no8'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no9'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
        'no10'=>['air1'=>['money'=>0], 'air2'=>['money'=>0], 'air3'=>['money'=>0], 'air4'=>['money'=>0], 'air5'=>['money'=>0], 'air6'=>['money'=>0], 'air7'=>['money'=>0], 'air8'=>['money'=>0], 'air9'=>['money'=>0], 'air10'=>['money'=>0],],
    ];
    protected $listeners  = ['sendTime'=>'sendTime', 'noneLoad'=>'noneLoad', 'setBetMoney'=>'setBetMoney', 'okGuess'=>'okGuess'];
    public function okGuess(){
        $this->accMoney += $this->betMoney;
        $this->guessAirArray["no$this->rank"]["air$this->air"]['money'] += intval($this->betMoney);
        // Log::info($this->accMoney);
        // Log::info($this->guessAirArray);
    }
    public function guessFn($air){
        if($this->betMoney <= 0){
            $this->dispatchBrowserEvent('chooseBetMoneyFn');
            return;
        }
        $this->air =$air;
        $this->dispatchBrowserEvent('dollerDebit', ['betMoney'=>$this->betMoney, 'air'=>$air]);
       
    }
    
    public function setRank($rank){
        $this->rank = $rank;
    }
    public function sendTime(){
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer]);
    }
    public function setBetMoney($m){
        $this->betMoney = $m;
        // Log::info($this->betMoney);
    }
    public function render()
    {
        $this->myDoller = Auth::user()->money;
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $this->dispatchBrowserEvent('startRun', ['answer'=>$answer]);
        return view('livewire.airplane', ['myDoller'=>$this->myDoller, 'answer'=>$answer, 'isLoad'=>$this->isLoad])->layout('livewire/layouts/game');
        
    }
}
