import "../../../../css/AdminPage.css"
import React from "react";
import Layout from "./../Layout/Layout";
import Pagination from "../Layout/Pagination";
export default function Home({users,count,request,page,record_per_page}){
    console.log(request)
  return (
 <Layout>
  <UserList users={users} count={count} request={request} page={page} record_per_page={record_per_page}/>
  </Layout>);
}
function UserList({users,count,request,page,record_per_page}){
    let pageTotal=parseInt( count.user/record_per_page);
  return (<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Danh sách thành viên</h5>
            <form action="" method="GET" class='row row-cols-lg-auto g-3 align-items-center'>
                <div class="col-12">
                    <input type="text" class="form-control" name='keyword' placeholder="Tìm kiếm" defaultValue={request.keyword}/>
                </div>
                <div class="col-12">
                    <input type="submit" name="" value="Tìm kiếm" class="btn btn-primary btn-search col-12"/>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div class="analytic">
                <a href="request()fullUrlWithQuery(['status''active'])" class="text-primary">Kích hoạt<span class="text-muted">({count.userActive})</span></a>
                <a href="request()fullUrlWithQuery(['status''trash'])" class="text-primary">Vô hiệu hóa<span class="text-muted">({count.userTrash})</span></a>
            </div>
            <form action="url('admin/user/action')" method=''>
                <div class="form-action form-inline py-3">
                    <select class="form-control mr-1" name='act' id="">
                        <option>Chọn</option>
                        {/* @foreach ($list_act as $v$name) */}
                        <option value='$v'>$name</option>
                        {/* @endforeach */}
                    </select>
                    <input type="submit" name="btn-search" value="Áp dụng" class="btn btn-primary"/>
                </div>
                <table class="table table-striped table-checkall">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" name="checkall"/>
                            </th>
                            <th scope="col">#</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Quyền</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                       users.map((user,index)=>{
                        return (<tr key={user.id}>
                            <td>
                                <input type="checkbox" name='list_check[]' value="$userid"/>
                            </td>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            
                            <td>
                                {/* @foreach($userRoles as $role) */}
                                <span class='badge badge-warning'>$rolename</span>
                                {/* @endforeach */}
                            </td>
                            <td>{user.created_at}</td>
                            <td>
                                <a href="route('edit.user',['user'$userid])" class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
                                {/* @if (Auth::id()!=$userid) */}
                                <a href="route('delete.user',['user'$userid])" onclick="return confirm('Bạn có chắc chắn xóa bản ghi này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>

                                {/* @endif */}
                            </td>
                        </tr>);
                       })}
                        {(count.user<1)?<tr>
                            <td colspan='7' class='bg-white'>
                                Ko tìm thấy bản ghi
                            </td>
                        </tr>:null}
                        
                    </tbody>
                </table>
            </form>
            <Pagination pageTotal={pageTotal} currentPage={page} />
            {/* $userslinks() */}
        </div>
    </div>
</div>
);
}