<?php

namespace App\Http\Livewire;

use App\Models\Answer;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
class Airplane extends Component
{
    public $isLoad;
    protected $listeners  = ['sendTime'=>'sendTime', 'noneLoad'=>'noneLoad'];
    public function mount(){
        if(date('s')<11){
            $this->isLoad = true;
        }else{
            $this->isLoad = false;
        }
    }
    public function noneLoad(){
        $this->isLoad = false;
    }
    public function sendTime(){
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer]);
    }
    public function render()
    {
        $beforeTime = date('Y-m-d H:i', strtotime("-4 minute"));
        $nowTime = date('Y-m-d H:i');
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $nowTime])->get();
        return view('livewire.airplane', ['answer'=>$answer, 'isLoad'=>$this->isLoad])->layout('livewire/layouts/game');
    }
}
