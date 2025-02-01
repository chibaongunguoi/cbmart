<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    function home()
    {
        // $name = Auth::user()->username;
        return Inertia::render('Home/Home',);
    }
}
