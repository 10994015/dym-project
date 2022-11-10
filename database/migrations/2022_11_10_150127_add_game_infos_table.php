<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGameInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('game_infos' , function(Blueprint $table){
            $table->integer('brfore');
            $table->integer('after');
            $table->unsignedBigInteger('user_id')->nullable();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('game_infos', function(Blueprint $table){
            $table->dropForeign(['user_id']);

            $table->dropColumn('brfore');
            $table->dropColumn('after');
            $table->dropColumn('user_id');
        });
    }
}
