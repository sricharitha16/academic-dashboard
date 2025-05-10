<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\job_posting;

class JobPosting extends Controller
{
    //
    function jobPosting(request $req)
    {
        $job = new job_posting;
        $job->institution = $req->input('institution');
        $job->role = $req->input('role');
        $job->department = $req->input('department');
        $job->hours = $req->input('hours');
        $job->pay = $req->input('pay');
        $job->ethnicity = $req->input('ethnicity');
        $job->location = $req->input('location');
        $job->description = $req->input('description');
        $job->jid = $req->input('jid');

        $job->save();
        return $job;
    }
    function jobList()
    {
        return job_posting::all();
    }
}
