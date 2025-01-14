<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function index(Request $request)
    {
        return Inertia::render('Home/Shop/Product');
    }
}
