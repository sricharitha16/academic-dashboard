<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\rec_profile;

class RecruiterProfile extends Controller
{
    //
    function profileUpdate(request $req, $id)
    {
        $rec = rec_profile::find($id);
        $rec->fname = $req->input('fname');
        $rec->mname = $req->input('mname');
        $rec->lname = $req->input('lname');
        $rec->mobile = $req->input('mobile');
        $rec->email = $req->input('email');
        $rec->institution = $req->input('institution');
        $rec->preference = $req->input('preference');
        $rec->id = $req->input('id');

        $rec->save();
        return $rec;
    }
}
