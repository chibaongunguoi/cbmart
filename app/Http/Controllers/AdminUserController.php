<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class AdminUserController extends Controller
{
    function __construct()
    {
        session(['module_active' => 'user']);
    }
    function list(Request $request)
    {
        $status = $request->input('status');
        $list_act = ['Delete' => 'Xóa tạm thời'];
        if ($status == 'trash') {
            $list_act = [
                'Restore' => 'Khôi phục',
                'ForceDelete' => 'Xóa vĩnh viễn'
            ];
            $users = User::onlyTrashed()->paginate(5);
        } else {
            $keyword = '';
            if ($request->input('keyword')) {
                $keyword = $request->input('keyword');
            };
            $users = User::where('name', 'LIKE', "%{$keyword}%")->paginate(5);
        }
        $count_user_active = User::count();
        $count_user_trash = User::onlyTrashed()->count();
        $count = [$count_user_active, $count_user_trash];
        // $users = User::withTrashed()->where('name', 'LIKE', "%{$keyword}%")->paginate(5);
        // dd($users->total());
        return view('admin.user.list', compact('users', 'count', 'list_act'));
    }
    function add(Request $request)
    {
        $roles = Role::all();
        return view('admin.user.add', compact('roles'));
    }
    function store(Request $request)
    {
        if ($request->input('btn_add')) {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
                'password' => ['required', 'confirmed', 'min:8', 'string'],
            ], [
                'required' => ':attribute không được để trống',
                'min' => ':attribute có độ dài ít nhất :min ký tự',
                'max' => ':attribute có độ dài tối đa :max ký tự',
                'confirmed' => 'Mật khẩu xác nhận không trùng khớp',
            ], [
                'name' => 'Tên người dùng',
                'email' => 'Email',
                'passord' => 'Mật khẩu'
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $user->Roles()->attach($request->role_id);
            return redirect('admin/user/list')->with('status', 'Đã thêm User thành công');
        }
    }
    function update(Request $request, User $user)
    {
        if ($request->input('btn_update')) {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => 'required|email|unique:users,email,' . $user->id,
            ], [
                'required' => ':attribute không được để trống',
                'min' => ':attribute có độ dài ít nhất :min ký tự',
                'max' => ':attribute có độ dài tối đa :max ký tự',

            ], [
                'name' => 'Tên người dùng',
                'email' => 'Email'
            ]);

            $user->update([
                'name' => $request->name,
                'password' => Hash::make($request->password),
            ]);
            $user->Roles()->sync($request->input('role_id', []));
            return redirect('admin/user/list')->with('status', 'Cập nhập người dùng thành công');
        }
    }
    function delete($id)
    {
        if (Auth::id() != $id) {
            $user = User::find($id);
            $user->delete();
            return redirect('admin/user/list')->with('status', 'Đã xóa thành viên thành công');
        } else {
            return redirect('admin/user/list')->with('status', 'Bạn không thể tự xóa mình ra khỏi hệ thống ');
        }
    }
    function action(Request $request)
    {
        $list_check = $request->input('list_check');
        if ($list_check) {
            foreach ($list_check as $k => $id) {
                if (Auth::id() == $id) {
                    unset($list_check[$k]);
                }
            }
            if (!empty($list_check)) {
                $act = $request->input('act');
                if ($act == 'Delete') {
                    User::destroy($list_check);
                    return redirect('admin/user/list')->with('status', 'Bạn đã xóa thành công ');
                } else if ($act == 'Restore') {
                    User::withTrashed()->whereIn('id', $list_check)
                        ->restore();
                    return redirect('admin/user/list')->with('status', 'Bạn đã xóa thành công ');
                } else if ($act == 'ForceDelete') {
                    User::withTrashed()->whereIn('id', $list_check)
                        ->forceDelete();
                    return redirect('admin/user/list?status=trash')->with('status', 'Bạn đã xóa vĩnh viễn thành công ');
                }
            }
            return redirect('admin/user/list')->with('status', 'Bạn không thể thao tác trên tài khoản của bạn ');
        } else {
            return redirect('admin/user/list')->with('status', 'Bạn cần phải chọn phần tử để thực thi');
        }
    }
    function edit(User $user)
    {
        $roles = Role::all();
        return view('admin.user.edit', compact('user', 'roles'));
    }
}
