import React from "react";
import Layout from "./../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState} from "react";
export default function Home({roles}){
  return (
 <Layout>
        <UserAdd roles={roles} />
  </Layout>);
}
function UserAdd({roles}){
    const { errors } = usePage().props
    let [form ,setForm]=useState({
        'name':"",
        'username':"",
        'email':"",
        'password':"",
        'password_confirmation':"",
        'role_id':[]
    })
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault(); 
        router.post(route('admin/user/store'),form);
    }
    function handleCheck(e){
        return handleRoleList(e.target.value,e.target.checked);
    }
    function handleRoleList(id,checked){
        if (checked){
            setForm({...form,role_id:[...form.role_id,id]})
        }
        else{
            let newlist=form.role_id.filter((role_id)=>{return id.indexOf(role_id)==-1?true:false});
            setForm({...form,role_id:newlist}
            )
        }  
        }
  return (<div id="content" class="container-fluid">
    <div class="card">    
        <div class="card-header font-weight-bold">
            Thêm người dùng
        </div>
        <div class="card-body">
            <form 
            //  action={route('admin/user/store')}
            onSubmit={handleSubmit}
              method="POST">
                {csrf}
                <div class="form-group">
                    <label for="name">Họ và tên</label>
                    <input  value={form.name}class="form-control" type="text" name="name" id="name" onChange={handleChange}/>
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input value={form.username}class="form-control" type="text" name="username" id="username"onChange={handleChange}/>
                    {errors.username && <small className="text-danger">{errors.username}</small>}
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input value={form.email}class="form-control" type="text" name="email" id="email"onChange={handleChange}/>
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input value={form.password}class="form-control" type="password" name="password" id="password"onChange={handleChange}/>
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div class="form-group">
                    <label for="password-confirm">Xác nhận mật khẩu</label>
                    <input value={form.password_confirmation}class="form-control" type="password" name="password_confirmation" id="password-confirm"onChange={handleChange}/>
                </div>
                <div class="card my-4 border">
                    <div class="card-header">
                        <label for="roles" class="m-0">Vai trò trong hệ thống</label>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            {roles.map((role)=>{
                                return (<div class="col-md-12">
                                    <input  type="checkbox" class="role" value={role.id}name="role_id[]" id={role.id}onChange={handleCheck}/>
                                    <label for={role.id}>{role.name}</label>
                                </div>);
                            })}
                            {roles.length<1?<div>Không có vai trò </div>:null}
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