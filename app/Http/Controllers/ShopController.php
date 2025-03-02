<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Middleware\CheckLogin;
use Illuminate\Support\Facades\Auth;
use App\Http\Middleware\CheckHadShop;
use App\Models\Product;
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
    function productStore(Request $request)
    {
        $request->validate([
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|dimensions:max_width=1080,max_height=1080|max:2048',
            'name' => ['required', 'string', 'max:150'],
            'cat_id' => "required",
            'description' => 'required',
        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên sản phẩm',
            'cat_id' => 'Danh mục',
            'description' => 'Mô tả sản phẩm',
        ]);
        $product = $request->all();
        $file = $request->thumbnail;
        $filename = $file->getClientOriginalName();
        $thumbnail = 'public/uploads/' . $filename;
        $path = $file->move('public/img/products', $filename);
        $product['thumbnail'] = $thumbnail;
        $product['shop_id'] = session('shop')->id;
        $product['price'] = 10000;
        $product['discount'] = 0;
        $product['quantity'] = 10;
        $product['rating'] = 5;
        $product['rating_count'] = 0;
        Product::create($product);
        return redirect('shop/product/list');
    }
    function productList()
    {
        return Inertia::render('Shop/Home');
    }
}
