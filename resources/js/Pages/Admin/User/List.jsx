import "../../../../css/AdminPage.css"
import React from "react";
import { useState } from "react";
import Layout from "./../Layout/Layout";
import Pagination from "../Layout/Pagination";
import { route,routeWithFullURL } from "../../../helper/helper";
import { record_show_per_page } from "../../../../../config/config";
import Notification from "../Ui/Notification";
import SearchBar from "../Ui/SearchBar";
import { ActionList } from "../Ui/Form";
export default function Home({users,rolesOfUsers,count,searchWord,page,status,action_list,type}){
    return (
 <Layout>
  <UserList users={users} rolesOfUsers={rolesOfUsers} count={count} searchWord={searchWord} page={page}status={status} action_list={action_list} type={type}/>
  </Layout>);
}
function UserList({users,rolesOfUsers,count,searchWord,page,status,action_list,type}){
    let pageTotal=parseInt(Math.ceil(count.user/record_show_per_page));
  return (<div id="content" class="container-fluid">
    <div class="card">   
    {status?<Notification>{status}</Notification>:""}
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Danh sách thành viên {type=='trash'?" bị xóa":" hoạt động"}</h5>
            <SearchBar searchWord={searchWord} pageName={'user'}/>
        </div>
        <div class="card-body">
            <div class="analytic">
                <a href={route("admin/user/list?type=active")} class="text-primary">Thành viên hoạt động <span class="text-muted">({count.userActive})</span></a>
                <a href={route("admin/user/list?type=trash")} class="text-primary"> Thành viên bị xóa <span class="text-muted">({count.userTrash})</span></a>
            </div>
            <form action={route("admin/user/action")} method=''>

                        <ActionList action_list={action_list}/>
                    
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
                                <input type="checkbox" name='list_check[]' value={user.id}/>
                            </td>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            
                            <td>
                                {rolesOfUsers[user.id].map((role)=>{
                                    return(<span class='badge badge-warning'>{role.name}</span>)
                                })}
                                {/* {rolesOfUsers[user.id].length<1?<div> Hiện chưa có quyền</div>:null} */}
                            </td>
                            <td>{user.created_at}</td>
                            <td>
                                {type=='active'?<a href={route("admin/user/edit?id="+user.id)} class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>:""}
                                <a href={route("admin/user/delete?id="+user.id)} onclick="return confirm('Bạn có chắc chắn xóa bản ghi này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>     
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
            {(count.user>record_show_per_page)?<Pagination pageTotal={pageTotal} currentPage={page} />:null}
        </div>
    </div>
</div>
);
}
