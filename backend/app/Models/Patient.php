<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'registration_year',
        'dob',
        'age',
        'drtb_code',
        'password',
        'township',
        'volunteer_id',
        'patient_code',
        'address',
        'treatment_start_date',
        'treatment_regimen',
    ];

    public function volunteer()
    {
        return $this->belongsTo(Volunteer::class);
    }
}
