<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Middleware\CheckLogin;
use Illuminate\Support\Facades\Auth;
use App\Http\Middleware\CheckHadShop;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class ShopController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            CheckLogin::class,
            new Middleware(CheckHadShop::class, except: ['signup', 'store'])
        ];
    }
    function signup()
    {
        return Inertia::render('Shop/Signup');
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên thương hiệu',
        ]);
        $name = $request->input('name');
        Shop::create([
            'user_id' => Auth::id(),
            'name' => $name,
            'product_count' => 0,
            'follower_count' => 0,
            'rating' => 0,
            'rating_count' => 0,
            'response_rate' => 0,
        ]);
        return redirect('shop');
    }
    function home()
    {
        return Inertia::render('Shop/Home');
    }
    function productAdd()
    {
        $categories = Category::all();
        return Inertia::render('Shop/Product/Add', compact('categories'));
    }
}
