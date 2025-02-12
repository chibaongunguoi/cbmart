<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\EmailVerifyMail;
use App\Mail\resetPasswordMail;
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
    function stoteRecover(Request $request)
    {
        $email = $request->validate([
            'email' => 'required|string|lowercase|email|max:255|'
        ]);
        $user = User::where('email', $email)->first();
        if ($user) {
            $token = Str::random(60);
            $user->update(['remember_token' => $token]);
            AuthController::sendResetPasswordMail($token);
            return Inertia::render('Home/Auth/RecoverNotification');
        }
        return Inertia::render('Home/Auth/Recover');
    }
    function sendResetPasswordMail($token)
    {
        $link = env('APP_URL') . '/reset-password/';
        Mail::to('chibaongunguoi@gmail.com')
            ->send(new resetPasswordMail($token, $link));
    }
    function resetPassword(Request $request)
    {
        $token = $request->route('token');
        $user = User::where('remember_token', $token)->first();
        session(['user' => $user]);
        return Inertia::render('Home/Auth/ResetPassword');
    }
    function storeResetPassword(Request $request)
    {
        $user = $request->validate([
            'password' => ['required'],
        ]);
        $password = $request->input('password');
        $user = session('user');
        $user->update(['password' => Hash::make($password)]);
        return redirect('/');
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
            $user['password'] = Hash::make($user['password']);
            $user = User::create($user);
            Auth::login($user);
        }
        return redirect("/");
    }
}
