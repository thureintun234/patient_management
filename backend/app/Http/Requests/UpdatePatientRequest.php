<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    protected function prepareForValidation()
    {
        if ($this->registrationYear && $this->drtbCode && $this->volunteerId && $this->patientCode && $this->treatmentStartDate && $this->treatmentRegimen) {
            $this->merge([
                'registration_year' => $this->registrationYear,
                'drtb_code' => $this->drtbCode,
                'volunteer_id' => $this->volunteerId,
                'patient_code' => $this->patientCode,
                'treatment_start_date' => $this->treatmentStartDate,
                'treatment_regimen' => $this->treatmentRegimen,
            ]);
        }
    }
}
