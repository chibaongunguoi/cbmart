<?php

namespace App\Http\Controllers;



use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    function list(Request $request)
    {
        // $users = User::all()->paginate(1);
        $status = session('status');
        // dd($status);
        // $type = $request->input('type') ? $request->input('type') : 'active';
        if ($request->input('type') != null) {
            $type = $request->input('type');
            session(['type' => $type]);
        } else {
            $type = session('type');
        }
        $searchWord = '';
        $record_per_page = 5;
        $page = $request->input('page') ? (int)($request->input('page')) : 1;
        if ($request->input('searchWord')) {
            $searchWord = $request->input('searchWord');
        }
        if ($type == "active") {
            $action_list = ['delete' => "xóa tạm thời"];
            $users = User::where('name', 'LIKE', "%{$searchWord}%");
        } else if ($type == "trash") {
            $users = User::onlyTrashed()->where('name', 'LIKE', "%{$searchWord}%");
            $action_list = ['restore' => "khôi phục", 'permanentDelete' => "xóa vĩnh viễn"];
        }
        $count = [
            'userActive' => User::count(),
            'userTrash' => User::onlyTrashed()->count(),
        ];
        $count['user'] = $users->count();
        $users = $users->limit($record_per_page)->offset($record_per_page * ($page - 1))->get();
        $rolesOfUsers = [];
        foreach ($users as $user) {
            $rolesOfUsers[$user->id] = $user->Roles;
        }
        return inertia::render("Admin/User/List", compact('users', 'rolesOfUsers', 'count', 'searchWord', 'page', 'status', "action_list", 'type'));
    }
    function add()
    {
        $roles = Role::all();
        return Inertia::render('Admin/User/Add', compact('roles'));
    }
    function store(Request $request)
    {
        $validation = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:' . User::class],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
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
            'username' => 'Username',
            'email' => 'Email',
            'password' => 'Mật khẩu'
        ]);
        $user = User::create([
            "name" => $request->name,
            "username" => $request->name,
            "email" => $request->email,
            "password" => bcrypt($request->password),
        ]);
        $user->Roles()->attach($request->role_id);
        return redirect('admin/user/list?type=active')->with('status', 'Đã thêm thành viên thành công');
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        $user = User::onlyTrashed()->find($id);
        if ($user) {
            $user->forceDelete();
            return redirect("admin/user/list")->with('status', "Xóa thành viên ra khỏi hệ thống thành công");
        } else {
            User::find($id)->delete();
            return redirect("admin/user/list")->with('status', "Xóa tạm thời thành viên thành công");
        }
    }
    function update(Request $request)
    {
        $user = User::find($request->input('id'));
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => 'required|email|unique:users,email,' . $user->id

        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên người dùng',
            'email' => 'Email',
        ]);
        $user->update(['name' => $request->input('name'), 'email' => $request->input('email')]);
        $user->Roles()->sync($request->input('role_id', []));
        return redirect('admin/user/list?type=active')->with('status', 'Đã cập nhập thành viên thành công');
    }
    function edit(Request $request)
    {
        $roles = Role::all();
        $user = User::find($request->input('id'));
        $currentRoles = $user->Roles()->get()->pluck('id')->toArray();
        return Inertia::render('Admin/User/Edit', compact('user', 'roles', 'currentRoles'));
    }
    function action(Request $request)
    {
        $action = $request->input('action');
        if ($action == 'delete') {
            $checked_list = $request->input('list_check');
            User::destroy($checked_list);
            // dd($checked_list);
            return redirect("admin/user/list")->with('status', "Xóa tạm thời thành viên thành công");
        } else if ($action == 'restore') {
            $checked_list = $request->input('list_check');
            User::withTrashed()->whereIn('id', $checked_list)
                ->restore();
            return redirect("admin/user/list")->with('status', "Khôi phục thành viên thành công");
        } else if ($action == 'permanentDelete') {
            $checked_list = $request->input('list_check');
            User::withTrashed()->whereIn('id', $checked_list)
                ->forceDelete();
            return redirect("admin/user/list")->with('status', "Xóa thành viên ra khỏi hệ thống thành công");
        }
        return redirect("admin/user/list");
    }
}
