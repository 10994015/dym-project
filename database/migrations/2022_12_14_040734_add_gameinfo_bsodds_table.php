<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGameinfoBsoddsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('game_infos', function (Blueprint $table) {
            $table->double('bsodds')->nullable()->after('odds');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('game_infos', function (Blueprint $table) {
            $table->dropColumn('bsodds');
        });
    }
}
