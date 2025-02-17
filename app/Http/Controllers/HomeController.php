<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    function home()
    {
        $user = null;
        if (Auth::user()) {
            $user = Auth::user();
        }
        return Inertia::render('Home/Home', compact('user'));
    }
}
