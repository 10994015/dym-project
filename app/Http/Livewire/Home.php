<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Log;
use App\Models\Answer as ModelsAnswer;
class Home extends Component
{
    public $date; 
    public $year; 
    public $month; 
    public $hour; 
    public $nowTime; 
    public $twoHour; 
    public function store(){
        $this->date = date('d');
        $this->year = date('Y');
        $this->month = date('m');
        $this->nowTime = date("H");
        $this->twoHour = date("H", strtotime("+2 hour"));

        $date_number = $this->year."-".$this->month."-".$this->date."-".$this->nowTime."-".$this->twoHour;
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
            
            $number = "SR9359".$this->year.$this->month.$this->date.$hourStr.$minuteStr;
            // Log::info($number);
            $bet_time = $this->year."-".$this->month."-".$this->date." ".$hourStr.":".$minuteStr;
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
        $nowDate = date('Y-m-d H:i');
        Log::info(date('Y-m-d H:i'));
        $answer = ModelsAnswer::where('bet_time', $nowDate)->count();
        if($answer < 1){
            $this->store();
        }

        return view('livewire.home')->layout('livewire/layouts/base');
    }
}
