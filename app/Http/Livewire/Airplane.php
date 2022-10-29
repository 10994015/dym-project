<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Airplane extends Component
{
    public function render()
    {
        return view('livewire.airplane')->layout('livewire/layouts/game');
    }
}
