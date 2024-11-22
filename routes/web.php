<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminUserController;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/admin', [AdminController::class, 'index']);
Route::get('/admin/user/list', [AdminUserController::class, 'index']);
Route::get('/admin/user/add', [AdminUserController::class, 'add']);
Route::post('/admin/user/store', [AdminUserController::class, 'store']);
