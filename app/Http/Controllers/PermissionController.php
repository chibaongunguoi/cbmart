<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    function add()
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        // dd($permissions);
        return view('admin.permission.add', compact('permissions'));
    }
    function store(Request $request)
    {
        if ($request->input('btn_add')) {
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
            return redirect('admin/permission/add')->with('status', 'Đã thêm quyền thành công');
        }
    }
    function edit($id)
    {
        $permission = Permission::find($id);
        return view('admin.permission.edit', compact('permission'));
    }
    function update(Request $request, $id)
    {
        if ($request->input('btn_update')) {
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
            return redirect()->route('permission.add')->with('status', 'Cập nhập quyền thành công');
        }
    }
    function delete($id)
    {
        Permission::find($id)->delete();
        return redirect()->route('permission.add')->with('status', 'Đã xóa quyền thành công');
    }
}
