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
Route::get('/admin/user/delete', [AdminUserController::class, 'delete']);
Route::post('/admin/user/update', [AdminUserController::class, 'update']);
Route::get('/admin/user/edit', [AdminUserController::class, 'edit']);
Route::get('/admin/user/action', [AdminUserController::class, 'action']);
