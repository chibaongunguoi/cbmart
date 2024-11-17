@extends('layouts.admin')
@section('content')
<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Danh sách vai trò</h5>
            <div class="form-search form-inline">
                <form action="#">
                    <input type="" class="form-control form-search" placeholder="Tìm kiếm">
                    <input type="submit" name="btn-search" value="Tìm kiếm" class="btn btn-primary">

                </form>
            </div>
        </div>
        <div class="card-body">
            @if (session('status'))
            <div class="alert alert-success">{{session('status')}}</div>
            @endif
            <form action="{{url('admin/user/action')}}" method=''>
                <div class="form-action form-inline py-3">
                    <select class="form-control mr-1" name='act' id="">
                        <option>Chọn</option>
                        <option>Tác vụ 1</option>
                        <option>Tác vụ 2</option>
                    </select>
                    <input type="submit" name="btn-search" value="Áp dụng" class="btn btn-primary">
                </div>
                <table class="table table-striped table-checkall">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" name="checkall">
                            </th>
                            <th scope="col">#</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $t = 0 ?>
                        @forelse ($roles as $role)
                        <?php $t++ ?>
                        <tr>
                            <td>
                                <input type="checkbox" name='list_check[]' value="{{$role->id}}">
                            </td>
                            <td scope="row">{{$t}}</th>
                            <td><a href="">{{$role->name}}</a></td>
                            <td>{{$role->description}}</td>
                            <td>{{$role->created_at}}</td>
                            <td>
                                <a href="{{route('role.edit',['role'=>$role->id])}}" class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
                                <a href="{{route('role.delete',['role'=>$role->id])}}" onclick="return confirm('Bạn có chắc chắn xóa bản ghi này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan='7' class='bg-white'>
                                Ko tìm thấy bản ghi
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </form>
            {{$roles->links()}}
            <!-- <div class="form-action form-inline py-3">
                <select class="form-control mr-1" id="">
                    <option>Chọn</option>
                    <option>Tác vụ 1</option>
                    <option>Tác vụ 2</option>
                </select>
                <input type="submit" name="btn-search" value="Áp dụng" class="btn btn-primary">
            </div>
            <table class="table table-striped table-checkall">
                <thead>
                    <tr>
                        <th scope="col">
                            <input name="checkall" type="checkbox">
                        </th>
                        <th scope="col">#</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td scope="row">1</td>
                        <td><a href="">Admin</a></td>
                        <td>Quản trị chung toàn bộ hệ thống</td>
                        <td>26:06:2025 14:00</td>
                        <td><button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td scope="row">2</td>
                        <td><a href="">Content Manager</a></td>
                        <td>Quản lý phát triển nội dung</td>
                        <td>26:06:2025 14:00</td>
                        <td><button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td scope="row">3</td>
                        <td><a href="">Sale Manager</a></td>
                        <td>Quản lý bán hàng</td>
                        <td>26:06:2025 14:00</td>
                        <td><button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table> -->

        </div>
    </div>
</div>
@endsection