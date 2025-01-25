<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    function login()
    {
        return Inertia::render('Home/Auth/Login');
    }
    function signup()
    {
        return Inertia::render('Home/Auth/Signup');
    }
    function storeSignup(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'username' => ['required', 'string', 'max:255', 'unique:' . User::class],
            'password' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        event(new Registered($user));
        Auth::login($user);
        return redirect("/");
    }
    function checkLogin(Request $request)
    {
        $users = $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($users)) {
            $request->session()->regenerate();
            return redirect("/");
        }
        return Inertia::render('Home/Auth/Login');
    }
}
