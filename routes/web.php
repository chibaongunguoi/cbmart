<?php

use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ShopController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;


Route::get('/send_email_verify', [AuthController::class, 'sendEmailVerifyMail']);
Route::get('/send_recover_password', [AuthController::class, 'sendRecoverPasswordMail']);
Route::get('/email_verify', [AuthController::class, 'emailVerify'])
    ->name('verification.notice');
Route::post('/email_verify', [AuthController::class, 'storeEmailVerify']);

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/');
})->middleware(['signed'])->name('verification.verify');


Route::get('/', [HomeController::class, 'home'])
    // ->middleware(['auth', 'verified']);
;
Route::get('/login', [AuthController::class, 'login'])->name("login");
Route::get('/recover', [AuthController::class, 'recover']);
Route::post('/recover', [AuthController::class, 'stoteRecover']);
Route::get('/reset-password/{token}', [AuthController::class, 'resetPassword']);
Route::post('/reset-password/{token}', [AuthController::class, 'storeResetPassword']);
Route::get('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'checkLogin']);
Route::post('/signup', [AuthController::class, 'storeSignup']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/admin', [AdminController::class, 'index']);
Route::get('/admin/user/list', [AdminUserController::class, 'list']);
Route::get('/admin/user/delete', [AdminUserController::class, 'delete']);
Route::post('/admin/user/update', [AdminUserController::class, 'update']);
Route::get('/admin/user/edit', [AdminUserController::class, 'edit']);
Route::get('/admin/user/action', [AdminUserController::class, 'action']);


Route::get('/admin/manager/list', [ManagerController::class, 'list']);
Route::get('/admin/manager/add', [ManagerController::class, 'add']);
Route::post('/admin/manager/store', [ManagerController::class, 'store']);
Route::get('/admin/manager/delete', [ManagerController::class, 'delete']);
Route::post('/admin/manager/update', [ManagerController::class, 'update']);
Route::get('/admin/manager/edit', [ManagerController::class, 'edit']);
Route::get('/admin/manager/action', [ManagerController::class, 'action']);


Route::get('/admin/permission/add', [PermissionController::class, 'add']);
Route::post('/admin/permission/add', [PermissionController::class, 'store']);
Route::get('/admin/permission/edit', [PermissionController::class, 'edit']);
Route::post('/admin/permission/update', [PermissionController::class, 'update']);
Route::get('/admin/permission/delete', [PermissionController::class, 'delete']);


Route::get('/admin/role/add', [RoleController::class, 'add']);
Route::post('/admin/role/store', [RoleController::class, 'store']);
Route::get('/admin/role/edit', [RoleController::class, 'edit']);
Route::post('/admin/role/update', [RoleController::class, 'update']);
Route::get('/admin/role/delete', [RoleController::class, 'delete']);
Route::get('/admin/role/list', [RoleController::class, 'list']);

Route::get('/admin/category/add', [CategoryController::class, 'add']);
Route::post('/admin/category/add', [CategoryController::class, 'store']);
Route::get('/admin/category/edit', [CategoryController::class, 'edit']);
Route::post('/admin/category/update', [CategoryController::class, 'update']);
Route::get('/admin/category/delete', [CategoryController::class, 'delete']);
Route::get('/admin/category/list', [CategoryController::class, 'list']);

Route::get('/product', [ProductController::class, 'index']);
Route::get('/product/list', [ProductController::class, 'list']);

Route::get('/cart', [CartController::class, 'index']);

Route::get('/seller', [UserController::class, 'seller']);

Route::get('/shop', [ShopController::class, 'home']);
Route::get('/shop/signup', [ShopController::class, 'signup']);
Route::post('/shop/signup', [ShopController::class, 'store']);
Route::get('/shop/product/add', [ShopController::class, 'productAdd']);
Route::post('/shop/product/add', [ShopController::class, 'store']);
