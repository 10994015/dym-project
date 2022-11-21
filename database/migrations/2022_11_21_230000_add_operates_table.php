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
            $table->integer('single_term');
            $table->integer('single_bet_limit');
            $table->integer('odds');
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
            $table->dropColumn('single_term');
            $table->dropColumn('single_bet_limit');
            $table->dropColumn('odds');
        });
    }
}
