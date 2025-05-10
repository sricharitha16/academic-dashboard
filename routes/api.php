<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CandidateController;

use App\Http\Controllers\RecruiterProfile;
use App\Http\Controllers\JobPosting;
use App\Http\Controllers\CandidateDetails;
use App\Http\Controllers\InterviewDetails;
use App\Http\Controllers\ApplicationAction;


use App\Http\Controllers\Academicprofile;
use App\Http\Controllers\AcademicJob;
use App\Http\Controllers\AcademicCand;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Prelogin routes
Route::post('Uregister',[UserController::Class,'Uregister']);
Route::post('Ulogin',[UserController::Class,'Ulogin']);
Route::post('getID',[UserController::Class,'getID']);

//CAndidate routes
Route::post('Cregister',[CandidateController::Class,'Cregister']);
Route::post('cpUpdate',[CandidateController::Class,'cpUpdate']);

//Recruiter Routes
Route::put('profileUpdate/{id}',[RecruiterProfile::class,'profileUpdate']);

Route::post('jobPosting',[JobPosting::class,'jobPosting']);
Route::get('jobList',[JobPosting::class,'jobList']);
Route::get('candidate/{name}',[CandidateDetails::class,'getCandidate']);
Route::post('interview',[InterviewDetails::class,'interview']);

//Application
Route::get('application',[ApplicationAction::class,'application']);
Route::get('applicationEdit/{id}',[ApplicationAction::class,'applicationEdit']);
Route::put('applicationUpdate/{id}',[ApplicationAction::class,'applicationUpdate']);


//Academia
Route::post('profileUpdate',[Academicprofile::class,'profileUpdate']);
Route::post('profileCreate',[AcademicJob::class,'profileCreate']);
Route::post('profileCand',[AcademicCand::class,'profileCand']);

//Admin
Route::post('registered',[Registered_UsersController::class,'registered']);