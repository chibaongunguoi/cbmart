@extends('layouts.admin')
@section('title','Chỉnh sửa vai trò')
@section('content')
<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Chỉnh sửa vai trò</h5>
            <div class="form-search form-inline">
                <form action="#">
                    <input type="" class="form-control form-search" placeholder="Tìm kiếm">
                    <input type="submit" name="btn-search" value="Tìm kiếm" class="btn btn-primary">
                </form>
            </div>
        </div>
        <div class="card-body">
            <form method="POST" action="{{route('role.update',['role'=>$role->id])}}" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label class="text-strong" for="name">Tên vai trò</label>
                    <input class="form-control" type="text" name="name" id="name" value="{{$role->name}}">
                    @error('name')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="text-strong" for="description">Mô tả</label>
                    <textarea class="form-control" type="text" name="description" id="description">{{$role->description}}</textarea>
                    @error('description')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <strong>Vai trò này có quyền gì?</strong>
                <small class="form-text text-muted pb-2">Check vào module hoặc các hành động bên dưới để chọn quyền.</small>
                <!-- List Permission  -->
                @forelse($permissions as $name=>$ModulePermission)
                <div class="card my-4 border">
                    <div class="card-header">
                        <input type="checkbox" class="check-all" name="" id="{{$name}}">
                        <label for="{{$name}}" class="m-0">Module {{ucfirst($name)}}</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            @forelse($ModulePermission as $permission)
                            <div class="col-md-3">
                                <input type="checkbox" class="permission" value="{{$permission->id}}" name="permission_id[]" id="{{$permission->id}}" <?php echo in_array($permission->id, $role->Permissions()->get()->pluck('id')->toArray()) ? 'checked' : ''; ?>>
                                <label for="{{$permission->id}}">{{$permission->name}}</label>
                            </div>
                            @empty
                            <div>Module này ko có chức năng</div>
                            @endforelse
                        </div>
                    </div>
                </div>
                @empty
                <div>Hiện chưa có quyền </div>
                @endforelse
                <input type="submit" name="btn_update" class="btn btn-primary" value="Cập nhập">
            </form>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $('.check-all').click(function() {
        $(this).closest('.card').find('.permission').prop('checked', this.checked)
    })
</script>
@endsection