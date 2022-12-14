<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOperatesBsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('operates', function (Blueprint $table) {
            $table->double('game1_single_term')->nullable()->after('updated_at');
            $table->double('game1_single_bet_limit')->nullable()->after('game1_single_term');
            $table->double('game1_odds')->nullable()->after('game1_single_bet_limit');
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
            $table->dropColumn('game1_single_term');
            $table->dropColumn('game1_single_bet_limit');
            $table->dropColumn('game1_odds');
        });
    }
}
