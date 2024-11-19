<?php

namespace App\Http\Controllers;


// use Inertia\Inertia;


use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    function index()
    {
        return inertia::render("Admin/Home");
    }
}
