<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Mail\EmailVerifyMail;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    function login()
    {
        return Inertia::render('Home/Auth/Login');
    }
    function recover()
    {
        return Inertia::render('Home/Auth/Recover');
    }
    function signup()
    {
        return Inertia::render('Home/Auth/Signup');
    }
    function storeSignup(Request $request)
    {
        $user = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'username' => ['required', 'string', 'max:255', 'unique:' . User::class],
            'password' => ['required'],
        ]);
        session(['user' => $user]);
        return redirect('send_email_verify');
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
    function emailVerify()
    {
        return Inertia::render('Home/Auth/EmailVerify');
    }
    function sendEmailVerifyMail()
    {
        $token = rand(100000, 999999);
        session(['token' => bcrypt($token)]);
        // dd($user->remember_token);
        Mail::to('chibaongunguoi@gmail.com')
            ->send(new EmailVerifyMail($token));
        return redirect("email_verify");
    }
    function storeEmailVerify(Request $request)
    {
        $token = $request->input('token');
        if (Hash::check($token, session('token'))) {
            $user = session('user');
            $user['email_verified_at'] = now();
            $user = User::create($user);
            Auth::login($user);
        }
        return redirect("/");
    }
}
