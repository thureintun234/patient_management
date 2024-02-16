<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\PatientFilter;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Models\Patient;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PatientCollection;
use App\Http\Resources\V1\PatientResource;
use App\Models\VotPatient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new PatientFilter();
        $filterItems = $filter->transform($request);

        $patients = Patient::where($filterItems);
        return new PatientCollection($patients->paginate()->appends($request->query()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {
        return new PatientResource(Patient::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        return new PatientResource($patient);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        $patient->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
    }

    public function moveToVOT(Request $request, Patient $patient)
    {
        // Validate input
        $request->validate([
            'category' => 'required|in:Pure,Hybrid',
            'volunteer_id' => 'required|exists:volunteers,id',
            'vot_start_date' => 'required|date|after_or_equal:' . $patient->treatment_start_date . '|before_or_equal:' . now()->format('Y-m-d'),
        ]);

        // Create entry in vot_patients table
        VotPatient::create([
            'patient_id' => $patient->id,
            'category' => $request->input('category'),
            'volunteer_id' => $request->input('volunteer_id'),
            'vot_start_date' => $request->input('vot_start_date'),
        ]);

        // $patient->delete(); // if patient need to remove after moved to vot.
    }
}
