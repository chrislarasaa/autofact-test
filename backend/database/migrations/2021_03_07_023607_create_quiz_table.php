<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz_input', function (Blueprint $table) {
            $table->id();
            $table->integer('quiz_id');
            $table->string("input_type");
            $table->string("label");
            $table->string("name");
            $table->string("value");
            $table->timestamps();
        });

        Schema::create('quiz', function (Blueprint $table) {
            $table->id();
            $table->string("question");
            $table->boolean("is_active");
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
        Schema::dropIfExists('quiz');
    }
}
