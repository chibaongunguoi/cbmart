<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function seller()
    {
        return Inertia::render('Home/Seller/Home');
    }
}
