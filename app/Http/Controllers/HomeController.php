<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    function home()
    {
        $name = "no name";
        if (Auth::user()) {
            $name = Auth::user()->username;
        }
        return Inertia::render('Home/Home', compact('name'));
    }
}
