<?php

namespace App\Http\Controllers;



use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    function index(Request $request)
    {
        // $users = User::all()->paginate(1);
        $type = $request->input('type') ? $request->input('type') : 'active';
        $keyword = '';
        $record_per_page = 2;
        $mess = $request->input('mess');
        $page = $request->input('page') ? (int)($request->input('page')) : 1;
        if ($request->input('keyword')) {
            $keyword = $request->input('keyword');
        }
        if ($type == "active") {
            $action_list = ['delete' => "xóa tạm thời"];
            $users = User::where('name', 'LIKE', "%{$keyword}%");
        } else if ($type == "trash") {
            $users = User::onlyTrashed()->where('name', 'LIKE', "%{$keyword}%");
            $action_list = ['restore' => "khôi phục", 'permanentDelete' => "xóa vĩnh viễn"];
        }
        $count = [
            'userActive' => User::count(),
            'userTrash' => User::onlyTrashed()->count(),
        ];
        $count['user'] = $users->count();
        $users = $users->limit($record_per_page)->offset($record_per_page * ($page - 1))->get();
        return inertia::render("Admin/User/List", compact('users',  'count', 'request', 'page', 'mess', "action_list", 'type'));
    }
    function add()
    {
        $roles = Role::all();
        return Inertia::render('Admin/User/Add', compact('roles'));
    }
    function store(Request $request)
    {
        $request->validate([
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
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        $user = User::onlyTrashed()->find($id);
        if ($user)
            $user->forceDelete();
        else {
            User::find($id)->delete();
        }
        return redirect("admin/user/list?mess=delete_success");
    }
    function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
        ], [
            'required' => ':attribute không được để trống',
            'min' => ':attribute có độ dài ít nhất :min ký tự',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên người dùng',
            'email' => 'Email',
        ]);
        $user = User::find($request->input('id'));
        $user->update(['name' => $request->input('name'), 'email' => $request->input('email')]);
        return redirect("admin/user/list?mess=update_success");
    }
    function edit(Request $request)
    {
        $user = User::find($request->input('id'));
        return Inertia::render('Admin/User/Edit', compact('user'));
    }
    function action(Request $request)
    {
        $action = $request->input('action');
        if ($action == 'delete') {
            $checked_list = $request->input('list_check');
            User::destroy($checked_list);
            // dd($checked_list);
            return redirect("admin/user/list?mess=delete_success");
        } else if ($action == 'restore') {
            $checked_list = $request->input('list_check');
            User::withTrashed()->whereIn('id', $checked_list)
                ->restore();
            return redirect("admin/user/list?mess=restore_success");
        } else if ($action == 'permanentDelete') {
            $checked_list = $request->input('list_check');
            User::withTrashed()->whereIn('id', $checked_list)
                ->forceDelete();
            return redirect("admin/user/list?mess=delete_success");
        }
        return redirect("admin/user/list");
    }
}
