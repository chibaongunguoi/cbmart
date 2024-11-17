@extends('layouts.admin')
@section('title','Thêm quyền')
@section('content')
<div id="content" class="container-fluid">
    <div class="row">
        @if (session('status'))
        <div class="alert alert-success">{{session('status')}}</div>
        @endif
        <div class="col-4">
            <div class="card">
                <div class="card-header font-weight-bold">
                    Thêm quyền
                </div>
                <div class="card-body">
                    <form action="{{route('permission.store')}}" method='POST'>
                        @csrf
                        <div class="form-group">
                            <label for="name">Tên quyền</label>
                            <input class="form-control" type="text" name="name" id="name">
                            @error('name')
                            <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="slug">Slug</label>
                            <small class="form-text text-muted pb-2">Ví dụ: posts.add</small>
                            <input class="form-control" type="text" name="slug" id="slug">
                            @error('slug')
                            <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="description">Mô tả</label>
                            <textarea class="form-control" type="text" name="description" id="description"> </textarea>
                            @error('description')
                            <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <button type="submit" class="btn btn-primary" name='btn_add' value="add">Thêm mới</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card">
                <div class="card-header font-weight-bold">
                    Danh sách quyền
                </div>
                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên quyền</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $t = 0 ?>
                            @foreach($permissions as $name=>$permission_list)
                            <tr>
                                <td scope="row"></td>
                                <td><strong>Module {{ucfirst($name)}}</strong></td>
                                <td></td>
                            </tr>
                            @foreach($permission_list as $permission)
                            <?php $t++ ?>
                            <tr>
                                <td scope="row">{{$t}}</td>
                                <td>|---{{$permission->name}}</td>
                                <td>{{$permission->slug}}</td>
                                <td>
                                    <a href="{{route('permission.edit',['id'=>$permission->id])}}" class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
                                    <a href="{{route('permission.delete',['id'=>$permission->id])}}" onclick="return confirm('Bạn có chắc chắn xóa quyền này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            @endforeach
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection