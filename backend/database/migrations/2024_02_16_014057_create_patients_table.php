<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('registration_year');
            $table->dateTime('dob');
            $table->string('age');
            $table->integer('drtb_code')->unique();
            $table->string('password');
            $table->string('township');
            $table->foreignId('volunteer_id')->constrained('volunteers');
            $table->string('patient_code');
            $table->string('address');
            $table->dateTime('treatment_start_date');
            $table->string('treatment_regimen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
