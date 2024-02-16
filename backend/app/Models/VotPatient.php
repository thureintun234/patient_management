<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VotPatient extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'category',
        'volunteer_id',
        'vot_start_date',
    ];
}
