<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'registrationYear' => $this->registration_year,
            'dob' => $this->dob,
            'age' => $this->age,
            'drtbCode' => $this->drtb_code,
            'password' => $this->password,
            'township' => $this->township,
            'volunteerId' => $this->volunteer_id,
            'patientCode' => $this->patient_code,
            'address' => $this->address,
            'treatmentStartDate' => $this->treatment_start_date,
            'treatmentRegimen' => $this->treatment_regimen,
        ];
    }
}
