<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    function index()
    {
        // return "home";
        return Inertia::render('Admin/Home');
    }
    
}
