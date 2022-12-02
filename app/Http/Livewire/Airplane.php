<?php

namespace App\Http\Livewire;

use App\Models\Answer;
use App\Models\Betlist;
use App\Models\GameInfos;
use App\Models\GameStatu;
use App\Models\RiskBet;
use App\Models\Answer as ModelsAnswer;
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
    public $odds;
    public $statu;
    protected $listeners  = ['sendTime'=>'sendTime', 'noneLoad'=>'noneLoad', 'chkBet'=>'chkBet', 'calcMoney'=>'calcMoney', 'updateMyMoney'=>'updateMyMoney', 'riskCalcMoney'=>'riskCalcMoney', 'isRiskFn'=>'isRiskFn', 'updateTrend'=>'updateTrend', 'watchStatu'=>'watchStatu'];
    public function mount(){
        $nowDate = date('Y-m-d H:i');
        Log::info(date('Y-m-d H:i'));
        $answer = ModelsAnswer::where('bet_time', $nowDate)->count();
        if($answer < 1){
            $this->store();
        }
    }

    public function sendTime(){
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $riskTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $riskAnswer = Answer::where('bet_time',$riskTime)->get();
        $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer, 'riskAnswer'=>$riskAnswer]);
    }
    public function isRiskFn(){
        $gameinfo = GameInfos::where('gamenumber', '23')->first();
        if($gameinfo->mode="1"){
            $nowTime = date('Y-m-d H:i', strtotime("+1 minute"));
            $answer = Answer::where('bet_time', $nowTime)->first();
            // Log::info($riks);
            $this->riskControl($answer->number);
        }
    }
    public function chkBet($t){
        $this->betMoney = $t;
        $this->myDoller = intval($this->myDoller) - intval($t);
        $userMoney = Auth::user(); 
        $userMoney->money = $this->myDoller;
        $userMoney->save();
    }
    public function calcMoney($win){
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::where('bet_time', $nowTime)->first();
        
        $this->winMoney = $win;
        $userMoney = Auth::user(); 
        $userMoney->money = intval($userMoney->money) + intval($win);
        // Log::info( $userMoney->money);
        $userMoney->save();
        
        $betlist = new Betlist();
        $betlist->bet_number = $answer->number;
        $betlist->money = $this->betMoney;
        $betlist->result = $this->winMoney;
        $betlist->user_id = Auth::id();
        $betlist->save();

    }
    public function riskCalcMoney($riskWinMoney, $totalBet, $guessAirArray, $max_bet, $max_rank, $max_airplane){
        // Log::info(json_encode($guessAirArray));
        $gameinfo = GameInfos::where('gamenumber', '23')->first();

        $nowTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::where('bet_time', $nowTime)->first();
        $riskbet = new RiskBet();
        $riskbet->bet_number = $answer->number;
        $riskbet->guess = json_encode($guessAirArray);
        $riskbet->money = $totalBet;
        $riskbet->result = $riskWinMoney;
        $riskbet->max_bet = $max_bet;
        $riskbet->max_rank = $max_rank;
        $riskbet->max_airplane = $max_airplane;
        $riskbet->user_id = Auth::id();
        $riskbet->save();
        // if($gameinfo->mode == '1'){
        //     $this->riskControl($answer->number);
        // }
    }
    public function riskControl($bet_number){
        $risk_max = RiskBet::where('bet_number', $bet_number)->orderBy('max_bet', 'DESC')->first();
        Log::info("金額:".$risk_max->max_bet);
        Log::info("名次:".$risk_max->max_rank);
        Log::info("飛機:".$risk_max->max_airplane);
        while(true){
            $newRank = [1,2,3,4,5,6,7,8,9,10];
            shuffle($newRank);
            if($newRank[$risk_max->max_rank-1] != $risk_max->max_airplane){
                break;
            }
        }
        $newranking = implode(",",$newRank);
        Log::info($newranking);
        $answer = Answer::where('number', $bet_number)->first();
        $answer->ranking = $newranking;
        $answer->save();
    }

    public function updateMyMoney(){
       
        $this->myDoller = Auth::user()->money;
        // $this->myDoller->save();
        $m = $this->myDoller;
        $this->dispatchBrowserEvent('updateMyMoneyHtml', ['money'=>$m, 'win'=>$this->winMoney]);
        $this->winMoney = 0;
        $this->betMoney = 0;
    }
    public function updateTrend(){
        $beforeTime = date('Y-m-d H:i', strtotime("-50 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->orderBy('id', 'DESC')->take(50)->get();
        $this->dispatchBrowserEvent('updateTrendFn', ['answer'=>$answer]);
    }
    public function watchStatu(){
        $this->statu = GameStatu::where('gamenumber', 23)->first()->statu;
        $this->dispatchBrowserEvent('watchStatu', ['statu' => $this->statu]);
    }
    public function store(){
        $date = date('d');
        $year = date('Y');
        $month = date('m');
        $nowTime = date("H");
        $twoHour = date("H", strtotime("+2 hour"));

        $date_number = $year."-".$month."-".$date."-".$nowTime."-".$twoHour;
        // Log::info($date_number);
        $minute = 0;
        $hour = intval(date('H'));
        for($i=1;$i<=120;$i++){
            $rankingArr = [1,2,3,4,5,6,7,8,9,10];
            shuffle($rankingArr);
            $ranking = implode(",",$rankingArr);
            $minute ++;
            if($minute >= 60){
                $hour++;
                $minute = 0;
            }
            if($hour >= 24){
                $hour = 0;
            }
            if($minute < 10){
                $minuteStr = "0".$minute;
            }else{
                $minuteStr = $minute;
            }
            if($hour < 10){
                $hourStr = "0".$hour;
            }else{
                $hourStr = $hour;
            }
            
            $number = "SR9359".$year.$month.$date.$hourStr.$minuteStr;
            // Log::info($number);
            $bet_time = $year."-".$month."-".$date." ".$hourStr.":".$minuteStr;
            // Log::info($bet_time);
            $answer = new ModelsAnswer();
            $answer->number = $number;
            $answer->ranking = $ranking;
            $answer->date_number = $date_number;
            $answer->bet_time = $bet_time;
            $answer->save();
        }
    }
    public function render()
    {
        $this->watchStatu();
        $this->myDoller = Auth::user()->money;
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $riskTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $riskAnswer = Answer::where('bet_time',$riskTime)->get();
        $this->dispatchBrowserEvent('startRun', ['answer'=>$answer, 'riskAnswer'=>$riskAnswer]);

        $game_info = GameInfos::where('gamenumber', 23)->first();
        $this->odds = $game_info->odds;
        $this->dispatchBrowserEvent('setOdds', ['odds'=>$this->odds]);

        $betlist = Betlist::where('user_id', Auth::id())->orderBy('id', 'DESC')->get();
        $bet_count = Betlist::where('user_id', Auth::id())->count();
        $bet_sum = Betlist::where('user_id', Auth::id())->sum('money');

        $this->statu = GameStatu::where('gamenumber', 23)->first()->statu;

        return view('livewire.airplane', ['myDoller'=>$this->myDoller, 'answer'=>$answer, 'isLoad'=>$this->isLoad, 'betlist'=>$betlist, 'bet_count'=>$bet_count, 'bet_sum'=>$bet_sum])->layout('livewire/layouts/game');
        
    }
}
