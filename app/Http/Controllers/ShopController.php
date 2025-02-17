<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    function home()
    {
        return Inertia::render('Home/Shop/Home');
    }
}
