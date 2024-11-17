<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    function __construct()
    {
        session(['module_active' => 'dashboard']);
    }
    function show()
    {
        return view('admin.dashboard');
    }
}
