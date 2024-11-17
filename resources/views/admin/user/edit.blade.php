@extends('layouts.admin')
@section('content')
<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold">
            Chỉnh sửa thông tin người dùng
        </div>
        <div class="card-body">
            <form action='{{route("update.user",["user"=>$user->id])}}' method="POST">
                @csrf
                <div class="form-group">
                    <label for="name">Họ và tên</label>
                    <input class="form-control" value="{{$user->name}}" type="text" name="name" id="name">
                    @error('name')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" value="{{$user->email}}" type="text" name="email" id="email" disabled>
                </div>
                <!-- <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input class="form-control" type="password" name="password" id="password">
                    @error('password')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="password-confirm">Xác nhận mật khẩu</label>
                    <input class="form-control" type="password" name="password_confirmation" id="password-confirm">
                </div> -->
                <div class="card my-4 border">
                    <div class="card-header">
                        <!-- <input type="checkbox" class="check-all" name="" id="roles"> -->
                        <label for="roles" class="m-0">Roles</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            @forelse($roles as $role)
                            <div class="col-md-12">
                                <input type="checkbox" class="role" value="{{$role->id}}" name="role_id[]" id="{{$role->id}}" <?php echo in_array($role->id, $user->Roles->pluck('id')->toArray()) ? 'checked' : ''; ?>>
                                <label for="{{$role->id}}">{{$role->name}}</label>
                            </div>
                            @empty
                            <div>Ko có vai trò</div>
                            @endforelse
                        </div>
                    </div>
                </div>
                <button name='btn_update' value='user_add' type="submit" class="btn btn-primary">Cập nhập</button>
            </form>
        </div>
    </div>
</div>
@endsection