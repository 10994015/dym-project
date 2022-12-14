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
            $table->double('bs_odds')->nullable()->after('single_bet_limit');
            $table->double('bs_single_term')->nullable()->after('bs_odds');
            $table->double('bs_single_bet_limit')->nullable()->after('bs_single_term');
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
            $table->dropColumn('bs_odds');
            $table->dropColumn('bs_single_term');
            $table->dropColumn('bs_single_bet_limit');
        });
    }
}
