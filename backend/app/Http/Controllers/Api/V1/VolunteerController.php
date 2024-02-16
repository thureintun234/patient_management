<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\VolunteerFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVolunteerRequest;
use App\Http\Requests\UpdateVolunteerRequest;
use App\Http\Resources\V1\PatientResource;
use App\Http\Resources\V1\VolunteerCollection;
use App\Http\Resources\V1\VolunteerResource;
use App\Models\Volunteer;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new VolunteerFilter();
        $filterItems = $filter->transform($request);

        $includePatients = $request->query('includePatients');

        $volunteers = Volunteer::where($filterItems);
        if ($includePatients) {
            $volunteers = $volunteers->with('patients');
        }
        return new VolunteerCollection($volunteers->paginate()->appends($request->query()));
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
    public function store(StoreVolunteerRequest $request)
    {
        return new VolunteerResource(Volunteer::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Volunteer $volunteer)
    {
        $includePatients = $request->query('includePatients');

        if ($includePatients) {
            return new PatientResource($volunteer->loadMissing('invoices'));
        }
        return new VolunteerResource($volunteer);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Volunteer $volunteer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVolunteerRequest $request, Volunteer $volunteer)
    {
        $volunteer->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Volunteer $volunteer)
    {
        $volunteer->delete();
    }
}
