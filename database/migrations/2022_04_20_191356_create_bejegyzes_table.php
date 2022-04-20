<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBejegyzesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bejegyzes', function (Blueprint $table) {
            $table->id();
            $table->integer("tevekenyseg_id");
            $table->integer("osztalyok_id");
            $table->integer("allapot");

            $table->foreign('tevekenyseg_id')->references('tevekenyseg_id')->on('Tevekenysegs');
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
        Schema::dropIfExists('bejegyzes');
    }
}
