<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Mail\EmailVerifyMail;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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

        session(['user' => $user]);
        // User::find($user->id)->delete();
        // $user->forceDelete();
        event(new Registered($user));
        Auth::login($user);
        // Auth::login($user);
        return redirect("email_verify");
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
        $user = session('user');
        $token = 1241;
        $user->update(['remember_token' => bcrypt($token)]);
        // dd($user->remember_token);
        Mail::to('chibaongunguoi@gmail.com')
            ->send(new EmailVerifyMail($token));
        return redirect("email_verify");
    }
    function storeEmailVerify(Request $request)
    {
        $token = $request->input('token');
        $user = session('user');
        if (bcrypt($token) == $user->remember_token) {
            $user->markEmailAsVerified();
            event(new Verified($user));
        }
        return redirect("/");
    }
}
