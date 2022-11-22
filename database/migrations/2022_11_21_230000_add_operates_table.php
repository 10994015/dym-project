<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOperatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('operates', function (Blueprint $table) {
            $table->integer('game3_single_term');
            $table->integer('game3_single_bet_limit');
            $table->double('game3_odds');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('operates', function (Blueprint $table) {
            $table->dropColumn('game3_single_term');
            $table->dropColumn('game3_single_bet_limit');
            $table->dropColumn('game3_odds');
        });
    }
}
