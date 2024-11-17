<?php

use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('admin', [DashBoardController::class, 'show']);
    Route::get('admin/user/list', [AdminUserController::class, 'list']);
    Route::get('admin/user/add', [AdminUserController::class, 'add']);
    Route::post('admin/user/store', [AdminUserController::class, 'store']);
    Route::get('admin/user/delete/{user}', [AdminUserController::class, 'delete'])->name('delete.user');
    Route::get('admin/user/action', [AdminUserController::class, 'action']);
    Route::get('admin/user/edit/{user}', [AdminUserController::class, 'edit'])->name('edit.user');
    Route::post('admin/user/update/{user}', [AdminUserController::class, 'update'])->name('update.user');

    Route::get('/dashboard', [DashBoardController::class, 'show'])->name('dashboard');
    Route::get('admin/permission/add', [PermissionController::class, 'add'])->name('permission.add');
    Route::post('admin/permission/store', [PermissionController::class, 'store'])->name('permission.store');
    Route::get('admin/permission/edit/{id}', [PermissionController::class, 'edit'])->name('permission.edit');
    Route::post('admin/permission/update/{id}', [PermissionController::class, 'update'])->name('permission.update');
    Route::get('admin/permission/delete/{id}', [PermissionController::class, 'delete'])->name('permission.delete');

    // 
    Route::get('admin/role/list', [RoleController::class, 'list'])->name('role.list')->middleware('can:role.list');
    Route::get('admin/role/add', [RoleController::class, 'add'])->name('role.add');
    Route::post('admin/role/store', [RoleController::class, 'store'])->name('role.store');
    Route::post('admin/role/update/{role}', [RoleController::class, 'update'])->name('role.update');
    Route::get('admin/role/edit/{role}', [RoleController::class, 'edit'])->name('role.edit');
    Route::get('admin/role/delete/{role}', [RoleController::class, 'delete'])->name('role.delete');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
