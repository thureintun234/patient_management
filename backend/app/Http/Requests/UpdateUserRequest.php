<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();

        return $user != null && $user->tokenCan('update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();

        if ($method == 'PUT') {
            return [
                'name' => ['required'],
                'email' => ['required'],
                'role' => ['required', Rule::in(['Admin', 'M&E Manager', 'Project Manager'])],
                'password' => ['required'],
            ];
        } else {
            return [
                'name' => ['sometimes', 'required'],
                'email' => ['sometimes', 'required'],
                'role' => ['sometimes', 'required', Rule::in(['Admin', 'M&E Manager', 'Project Manager'])],
                'password' => ['sometimes', 'required'],
            ];
        }
    }
}
