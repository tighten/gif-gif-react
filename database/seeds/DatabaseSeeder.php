<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Vote::create([
            'picked' => 'jif',
            'reason' => 'Peanut butter is amazing, haters',
            'name' => 'Samantha Geitz'
        ]);
    }
}
