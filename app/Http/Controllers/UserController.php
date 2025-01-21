<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function Shop()
    {
        return Inertia::render('Home/Shop/Home');
    }
}
