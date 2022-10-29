<?php

namespace App\Http\Livewire;

use App\Models\Answer;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
class Airplane extends Component
{
    protected $listeners  = ['sendTime'=>'sendTime'];
    public function sendTime(){
        $beforeTime = date('Y-m-d H:i', strtotime("-5 minute"));
        $afterTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $afterTime])->get();
        $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer]);
    }
    public function render()
    {
        $beforeTime = date('Y-m-d H:i', strtotime("-5 minute"));
        $afterTime = date('Y-m-d H:i', strtotime("+1 minute"));
        $answer = Answer::whereBetween('bet_time', [$beforeTime, $afterTime])->get();
        // $this->dispatchBrowserEvent('sendAnswer', ['answer'=>$answer]);
        // Log::info($answer);
        return view('livewire.airplane', ['answer'=>$answer])->layout('livewire/layouts/game');
    }
}
