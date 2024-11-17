<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    function add()
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        return view('admin.role.add', compact('permissions'));
    }
    function list()
    {
        if (Gate::allows('role.list')) {
            $roles = Role::paginate(5);
            return view('admin.role.list', compact('roles'));
        } else {
            abort(403);
        }
        // return Auth::user()->hasPermission('post.add');
        // $roles = Role::paginate(5);
        // return view('admin.role.list', compact('roles'));
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'unique:roles,name'],
            'permission_id' => ['nullable', 'array'],
            'permission_id.*' => ['exists:permissions,id'],
            'description' => ['required',],
        ], [
            'required' => ':attribute không được để trống',
            'max' => ':attribute có độ dài tối đa :max ký tự',
            'unique' => ":attribute này đã tồn tại trong hệ thống"
        ], [
            'name' => 'Tên vai trò',
            'description' => 'Mô tả'
        ]);
        $role = Role::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        $role->Permissions()->attach($request->permission_id);
        return redirect('admin/role/list')->with('status', 'Đã thêm vai trò thành công');
    }
    function edit(Role $role)
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        return view('admin.role.edit', compact('permissions', 'role'));
    }
    function update(Request $request, Role $role)
    {
        if ($request->input('btn_update')) {
            $request->validate([
                'name' => 'required|unique:roles,name,' . $role->id,
                'permission_id' => ['nullable', 'array'],
                'permission_id.*' => ['exists:permissions,id'],
                'description' => ['required', 'string'],
            ], [
                'required' => ':attribute không được để trống',
                'max' => ':attribute có độ dài tối đa :max ký tự',
            ], [
                'name' => 'Tên quyền',
                'description' => 'Mô tả'
            ]);
            $role->update([
                'name' => $request->name,
                'description' => $request->description,
            ]);
            $role->Permissions()->sync($request->input('permission_id', []));
            return redirect()->route('role.list')->with('status', 'Cập nhập vai trò thành công');
        }
    }
    function delete(Role $role)
    {
        $role->delete();
        return redirect()->route('role.list')->with('status', 'Đã xóa quyền thành công');
    }
}
