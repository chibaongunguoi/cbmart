<?php

namespace App\Http\Controllers;

use App\Models\Role;
use inertia\Inertia;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    function list(Request $request)
    {
        $searchWord = '';
        $record_per_page = 5;
        $mess = $request->input('mess');
        $page = $request->input('page') ? (int)($request->input('page')) : 1;
        if ($request->input('searchWord')) {
            $searchWord = $request->input('searchWord');
        }
        $roles = Role::where('name', 'LIKE', "%{$searchWord}%");
        $count['role'] = $roles->count();
        $roles = $roles->limit($record_per_page)->offset($record_per_page * ($page - 1))->get();
        return inertia::render("Admin/Role/List", compact('roles',  'count', 'request', 'page', 'mess', 'searchWord'));
    }
    function add(Request $request)
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        return inertia::render('Admin/Role/Add', compact('permissions'));
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

        $role->Permissions()->attach($request->permissionList);
        return redirect('admin/role/add');
    }
    function edit(Request $request)
    {
        $permissions = Permission::all()->groupBy(function ($permission) {
            return explode('.', $permission->slug)[0];
        });
        $id = $request->input('id');
        $role = Role::find($id);
        // echo in_array($permission->id, $role->Permissions()->get()->pluck('id')->toArray()) ? 'checked' : '';
        $currentpermissions = $role->Permissions()->get()->pluck('id')->toArray();
        return inertia::render('Admin/Role/Edit', compact('role', 'permissions', 'currentpermissions'));
    }
    function update(Request $request)
    {
        $role = Role::find($request->id);
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
        return redirect('admin/role/list');
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        Role::find($id)->delete();
        return redirect("admin/role/list?mess=delete_success");
    } //
}
