<?php

namespace App\Http\Controllers;



use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    function index(Request $request)
    {
        // $users = User::all()->paginate(1);
        $keyword = '';
        $record_per_page = 2;
        $mess = $request->input('mess');
        $page = $request->input('page') ? (int)($request->input('page')) : 1;
        if ($request->input('keyword')) {
            $keyword = $request->input('keyword');
        }
        $users = User::where('name', 'LIKE', "%{$keyword}%")->limit($record_per_page)->offset($record_per_page * ($page - 1))->get();
        $count = [
            'userActive' => User::count(),
            'userTrash' => User::onlyTrashed()->count(),
        ];
        $count['user'] = $count['userActive'] + $count['userTrash'];
        return inertia::render("Admin/User/List", compact('users',  'count', 'request', 'page', 'record_per_page', 'mess'));
    }
    function add()
    {
        return Inertia::render('Admin/User/Add');
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
        $user = User::find($request->input('id'));
        $user->delete();
        return redirect('admin/user/list');
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
        $status = "Cập nhập thông tin người dùng thành công";
        return redirect("admin/user/list?mess=update_success");
    }
    function edit(Request $request)
    {
        $user = User::find($request->input('id'));
        return Inertia::render('Admin/User/Edit', compact('user'));
    }
}
