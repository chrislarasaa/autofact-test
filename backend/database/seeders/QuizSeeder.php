<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quiz')->insert([
            'id' => 1,
            'question' => "¿Que te gustaria que agregaramos al informe?",
            'is_active' => true
        ]);

        DB::table('quiz')->insert([
            'id' => 2,
            'question' => "¿La informacion es correcta?",
            'is_active' => true
        ]);

        DB::table('quiz')->insert([
            'id' => 3,
            'question' => "¿Del 1 al 5, es rapido el sitio?",
            'is_active' => true
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 1,
            'input_type' => "text",
            'label' => "",
            'name' => "quiz1",
            "value" => ''

        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 2,
            'input_type' => "radio",
            'label' => "Si",
            'name' => "quiz2_1",
            "value" => 'Si'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 2,
            'input_type' => "radio",
            'label' => "No",
            'name' => "quiz2_3",
            "value" => 'No'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 2,
            'input_type' => "radio",
            'label' => "Mas o Menos",
            'name' => "quiz2_3",
            "value" => 'Mas o Menos'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 3,
            'input_type' => "radio",
            'label' => "1",
            'name' => "quiz3_1",
            "value" => '1'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 3,
            'input_type' => "radio",
            'label' => "2",
            'name' => "quiz3_2",
            "value" => '2'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 3,
            'input_type' => "radio",
            'label' => "3",
            'name' => "quiz3_3",
            "value" => '3'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 3,
            'input_type' => "radio",
            'label' => "4",
            'name' => "quiz3_4",
            "value" => '4'
        ]);

        DB::table('quiz_input')->insert([
            'quiz_id' => 3,
            'input_type' => "radio",
            'label' => "5",
            'name' => "quiz3_5",
            "value" => '5'
        ]);
    }

}
