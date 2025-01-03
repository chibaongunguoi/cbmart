import "../../../../css/AdminPage.css"
import React from "react";
import { useState } from "react";
import Layout from "./../Layout/Layout";
import Pagination from "../Layout/Pagination";
import { route,routeWithFullURL } from "../../../helper/helper";
import { record_show_per_page} from "../../../../../config/config";
import SearchBar from "../Ui/SearchBar";
import Notification from "../Ui/Notification";
import { ActionList } from "../Ui/Form";
export default function Home({roles,count,request,page,mess,action_list,type,searchWord,status}){
  return (
 <Layout>
  <RoleList status={status} roles={roles} searchWord={searchWord} count={count} request={request} page={page}mess={mess} action_list={action_list} type={type}/>
  </Layout>);
}
function RoleList({roles,count,request,page,mess,action_list,type,searchWord,status}){
    let [searchValue,setSearchValue]=useState('');
    function handleSubmit(e) {
        e.preventDefault();
        window.location.replace(routeWithFullURL("&keyword="+searchValue))
        // e.stopPropagation() ;
      }
      function handleChange(e) {
        console.log(searchValue);
        setSearchValue(e.target.value);
      }
    let pageTotal=parseInt(Math.ceil(count.role/record_show_per_page));
   
  return (
  <div id="content" class="container-fluid">
    <div class="card">
    {status?<Notification>{status}</Notification>:""}
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Danh sách vai trò</h5>
            <SearchBar searchWord={searchWord} pageName={'role'}/>
        </div>
        <div class="card-body">
            {/* @if (session('status'))
            <div class="alert alert-success">{{session('status')}}</div>
            @endif */}
            <form action="{{url('admin/user/action')}}" method=''>
                        <ActionList action_list={action_list}/> 
                <table class="table table-striped table-checkall">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" name="checkall"/>
                            </th>
                            <th scope="col">#</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <?php $t = 0 ?>
                        @forelse ($roles as $role)
                        <?php $t++ ?> */}
                         {
                       roles.map((role,index)=>{
                        return (<tr key={role.id}>
                            <td>
                                <input type="checkbox" name='list_check[]' value="{{$role->id}}"/>
                            </td>
                            <td scope="row">{index+1}</td>
                            <td><a href="">{role.name}</a></td>
                            <td>{role.description}</td>
                            <td>{role.created_at}</td>
                            <td>
                                <a href={route("admin/role/edit?id="+role.id)} class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
                                <a href={route("admin/role/delete?id="+role.id)} onclick="return confirm('Bạn có chắc chắn xóa bản ghi này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>
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
            {(count.role>record_show_per_page)?<Pagination pageTotal={pageTotal} currentPage={page} />:null}
        </div>
    </div>
</div>
);
}
