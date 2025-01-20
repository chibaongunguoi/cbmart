<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CartController extends Controller
{
    function index(Request $request)
    {
        return Inertia::render('Home/Cart/Home');
    }
}
