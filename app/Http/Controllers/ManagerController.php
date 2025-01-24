<?php

namespace App\Http\Controllers;


use App\Models\Role;
use Inertia\Inertia;
use App\Models\Manager;
use Inertia\Controller;
use Illuminate\Http\Request;

class ManagerController extends Controller
{
    function list(Request $request)
    {
        $status = session('status');
        if ($request->input('type') != null) {
            $type = $request->input('type');
        } else {
            $type = 'active';
        }
        $searchWord = '';
        $record_per_page = 5;
        $page = $request->input('page') ? (int)($request->input('page')) : 1;
        if ($request->input('q')) {
            $searchWord = $request->input('q');
        }
        if ($type == "active") {
            $action_list = ['delete' => "xóa tạm thời"];
            $managers = Manager::where('name', 'LIKE', "%{$searchWord}%");
        } else if ($type == "trash") {
            $managers = Manager::onlyTrashed()->where('name', 'LIKE', "%{$searchWord}%");
            $action_list = ['restore' => "khôi phục", 'permanentDelete' => "xóa vĩnh viễn"];
        }
        $count = [
            'managerActive' => Manager::count(),
            'managerTrash' => Manager::onlyTrashed()->count(),
        ];
        $count['manager'] = $managers->count();
        $managers = $managers->limit($record_per_page)->offset($record_per_page * ($page - 1))->get();
        $rolesOfmanagers = [];
        foreach ($managers as $manager) {
            $rolesOfmanagers[$manager->id] = $manager->Roles;
        }
        return inertia::render("Admin/Manager/List", compact('managers', 'rolesOfmanagers', 'count', 'searchWord', 'page', 'status', "action_list", 'type'));
    }
    function add()
    {
        $roles = Role::all();
        return Inertia::render('Admin/Manager/Add', compact('roles'));
    }
    function store(Request $request)
    {
        $validation = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:' . Manager::class],
            'password' => [
                'required',
                'confirmed',
                'min:8',
                'string',
            ]
        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
            'confirmed' => 'Mật khẩu xác nhận không trùng khớp',
        ], [
            'name' => 'Tên người dùng',
            'description' => 'Mô tả',
            'username' => 'Username',
            'password' => 'Mật khẩu'
        ]);
        $manager = Manager::create([
            "name" => $request->name,
            "username" => $request->username,
            "description" => $request->description,
            "password" => bcrypt($request->password),
        ]);
        $manager->Roles()->attach($request->role_id);
        return redirect('admin/manager/list?type=active')->with('status', 'Đã thêm thành viên thành công');
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        $manager = Manager::onlyTrashed()->find($id);
        if ($manager) {
            $manager->forceDelete();
            return redirect("admin/manager/list")->with('status', "Xóa thành viên ra khỏi hệ thống thành công");
        } else {
            Manager::find($id)->delete();
            return redirect("admin/manager/list")->with('status', "Xóa tạm thời thành viên thành công");
        }
    }
    function update(Request $request)
    {
        $manager = Manager::find($request->input('id'));
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:255'],

        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên người dùng',
            'description' => 'Mô tả',
        ]);
        $manager->update([
            'name' => $request->input('name'),
            "description" => $request->description,
        ]);
        $manager->Roles()->sync($request->input('role_id', []));
        return redirect('admin/manager/list?type=active')->with('status', 'Đã cập nhập thành viên thành công');
    }
    function edit(Request $request)
    {
        $roles = Role::all();
        $manager = Manager::find($request->input('id'));
        $currentRoles = $manager->Roles()->get()->pluck('id')->toArray();
        return Inertia::render('Admin/Manager/Edit', compact('manager', 'roles', 'currentRoles'));
    }
    function action(Request $request)
    {
        $action = $request->input('act');
        if ($action == 'delete') {
            $checked_list = $request->input('list_check');
            Manager::destroy($checked_list);
            // dd($checked_list);
            return redirect("admin/manager/list")->with('status', "Xóa tạm thời thành viên thành công");
        } else if ($action == 'restore') {
            $checked_list = $request->input('list_check');
            Manager::withTrashed()->whereIn('id', $checked_list)
                ->restore();
            return redirect("admin/manager/list")->with('status', "Khôi phục thành viên thành công");
        } else if ($action == 'permanentDelete') {
            $checked_list = $request->input('list_check');
            Manager::withTrashed()->whereIn('id', $checked_list)
                ->forceDelete();
            return redirect("admin/manager/list")->with('status', "Xóa thành viên ra khỏi hệ thống thành công");
        }
        return redirect("admin/manager/list");
    }
}
