<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\candidate;

class CandidateDetails extends Controller
{
    //
    function getCandidate($name)
    {
        $result =  candidate::where('name',$name)->get();
        return $result;
    }
}
