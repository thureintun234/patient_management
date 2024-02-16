<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
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
