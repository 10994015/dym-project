<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBetlistMaxbet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('risk_bets', function (Blueprint $table) {
            $table->integer('max_bet')->default(0);
            $table->integer('max_airplane')->default(0);
            $table->integer('max_rank')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('risk_bets', function(Blueprint $table){
            $table->dropColumn('max_bet');
            $table->dropColumn('max_airplane');
            $table->dropColumn('max_rank');
        });
    }
}
