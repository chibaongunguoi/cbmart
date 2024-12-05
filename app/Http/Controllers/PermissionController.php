<?php

namespace App\Http\Controllers;

use inertia\Inertia;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PermissionController extends Controller
{
    function add(Request $request)
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        $status = session('status');
        // dd($permissions);
        return inertia::render('Admin/Permission/Add', compact('permissions', 'status'));
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'lowercase', 'max:255', 'unique:' . Permission::class],
            // 'description' => ['string'],
        ], [
            'required' => ':attribute không được để trống',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên quyền',
            'slug' => 'Slug',
            'description' => 'Mô tả'
        ]);
        $permission = Permission::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
        ]);
        return redirect('admin/permission/add')->with('status', 'Thêm quyền thành công');
    }
    function edit(Request $request)
    {
        $id = $request->input('id');
        $permission = Permission::find($id);
        // dd($permissions);
        return inertia::render('Admin/Permission/Edit', compact('permission'));
    }
    function update(Request $request)
    {
        $id = $request->input('id');
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string'],
            // 'description' => ['string'],
        ], [
            'required' => ':attribute không được để trống',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên quyền',
            'slug' => 'Slug',
            'description' => 'Mô tả'
        ]);

        Permission::find($id)->update([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
        ]);
        return redirect("admin/permission/add")->with('status', 'Cập nhập quyền thành công');
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        Permission::find($id)->delete();
        return redirect("admin/permission/add")->with('status', 'Xóa quyền thành công');
    }
}
