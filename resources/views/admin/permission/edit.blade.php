@extends('layouts.admin')
@section('content')
<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold">
            Chỉnh sửa thông tin quyền
        </div>
        <div class="card-body">
            <form action='{{route("permission.update",["id"=>$permission->id])}}' method="POST">
                @csrf
                <div class="form-group">
                    <label for="name">Tên quyền</label>
                    <input class="form-control" value="{{$permission->name}}" type="text" name="name" id="name">
                    @error('name')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="slug">Slug</label>
                    <input class="form-control" value="{{$permission->slug}}" type="text" name="slug" id="slug">
                    @error('slug')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="description">Mô tả</label>
                    <input class="form-control" type="description" name="description" id="description" value="{{$permission->description}}">
                    @error('description')
                    <small class="text-danger">{{$message}}</small>
                    @enderror
                </div>
                <button name='btn_update' value='permission_update' type="submit" class="btn btn-primary">Cập nhập</button>
            </form>
        </div>
    </div>
</div>
@endsection