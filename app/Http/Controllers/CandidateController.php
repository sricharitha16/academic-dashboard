<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\candidates;
class CandidateController extends Controller
{

    //Register New Candiate
    function Cregister(request $req)
    {
        $user = new candidates;
        $user->fname = $req->input('first_name');
        $user->lname = $req->input('last_name');
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->save();
        return $user;
        
    }



    //
    function cpUpdate(request $req)
    {
        $rec = new rec_profile;
        $rec->fname = $req->input('fname');
        $rec->mname = $req->input('mname');
        $rec->lname = $req->input('lname');
        $rec->mobile = $req->input('mobile');
        $rec->email = $req->input('email');
        $rec->institution = $req->input('institution');
        $rec->preference = $req->input('preference');
        //$rec->rid = $req->input('rid');

        $rec->save();
        return $rec;
    }
}
