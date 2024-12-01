import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
export default function Home({user}){
  return (
 <Layout>
  <UserUpdate user={user}/>
  </Layout>);
}
function UserUpdate({user}){
    const { errors } = usePage().props
    let [stateForm,setStateForm]=useState("edit");
    let [status,setStatus]=useState(null);
    let [form ,setForm]=useState({
        'name':user.name,
        'email':user.email,
})
    
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        setStateForm("submit");
        setStatus(null);
        router.post(route("admin/user/update?id="+user.id), form);
      }
    
  return (<div id="content" class="container-fluid">
    <div class="card">
        {status}
        <div class="card-header font-weight-bold">
            Chỉnh sửa thông tin người dùng
        </div>
        <div class="card-body">
            <form  onSubmit={handleSubmit} method="POST">
                {csrf}
                <div class="form-group">
                    <label for="name">Họ và tên</label>
                    <input value={form.name}class="form-control" type="text" name="name" id="name" onChange={handleChange}/>
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input value={form.email}class="form-control" type="text" name="email" id="email"onChange={handleChange}/>
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div class="card my-4 border">
                    <div class="card-header">
                        {/* <!-- <input type="checkbox" class="check-all" name="" id="roles"> --> */}
                        <label for="roles" class="m-0">Roles</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            {/* @forelse($roles as $role) */}
                            <div class="col-md-12">
                                <input type="checkbox" class="role" value="{{$role->id}}" name="role_id[]" id="{{$role->id}}"onChange={handleChange}/>
                                <label for="{{$role->id}}">role-name</label>
                            </div>
                            {/* @empty */}
                            {/* <div>Ko có vai trò</div> */}
                            {/* @endforelse */}
                        </div>
                    </div>
                </div>
                <button name='btn_add' value='user_add' type="submit" class="btn btn-primary">Thêm mới</button>
            </form>
        </div>
    </div>
</div>
);
}