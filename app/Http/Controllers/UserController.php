<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function Uregister(request $req)
    {
        $user = new users;
        $user->fname = $req->input('first_name');
        $user->lname = $req->input('last_name');
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->role = $req->input('role');
    {/*
        $user->password = Hash::make($req->input('password'));
    
    */}
        $user->password = $req->input('password');
        $user->save();
        return $user;
    }
    
    
    function getID(request $req)
    {
        $user = users::where('email',$req['email'])->get();
        $id = $user['id'];
        return $id;
    }



    function Ulogin(request $req){
        $result = ["","","",""];
        $input_password = $req->input('password');
        $user =  users::where('email',$req['userid'])->get();
        if ($user == []){
            $result = ["User Not Found","","",""];
        }
        else{
            $a = $user[0];
            $fetched_password = $a['password'];
            if ($input_password == $fetched_password){
                $message=""; 
                $role  = $a['role'];
                $id  = $a['id'];
                $name  = $a['fname'];
                $result = [$message,$role,$id,$name];     
             }
             else {
                $result = ["Incorrect Password","","",""];
             }
        }
        
        return $result;

    }
}