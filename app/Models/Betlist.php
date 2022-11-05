<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Betlist extends Model
{
    use HasFactory;
    protected $table = 'betlist';
    public function user()
    {
        return $this->belongsTo('App\Models\User'::class);
    }
}
