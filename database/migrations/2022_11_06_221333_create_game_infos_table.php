<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_infos', function (Blueprint $table) {
            $table->id();
            $table->integer('gamenumber');
            $table->string('answer_datebase');
            $table->string('game_name');
            $table->float('odds');
            $table->float('single_term')->default(100000);
            $table->float('single_bet_limit')->default(100000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_infos');
    }
}
