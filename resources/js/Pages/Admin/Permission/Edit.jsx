import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
export default function Home({permission}){
    
  return (
 <Layout>
  <PermissionEdit permission={permission}/>
  </Layout>);
}
function PermissionEdit({permission}){
    const { errors } = usePage().props
    let [stateForm,setStateForm]=useState("edit");
    let [status,setStatus]=useState(null);
    let [form ,setForm]=useState({
        'name':permission.name,
        'slug':permission.slug,
        'description':permission.description,
})
    function handleChange(e){
        console.log(form);
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        setStateForm("submit");
        setStatus(null);
        router.post(route("admin/permission/update?id="+permission.id), form);
      }   
  return (<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold">
            Chỉnh sửa thông tin quyền
        </div>
        <div class="card-body">
            <form onSubmit={handleSubmit} onChange={handleChange} method="POST">
                @csrf
                <div class="form-group">
                    <label for="name">Tên quyền</label>
                    <input class="form-control" defaultValue={form.name} type="text" name="name" id="name"/>
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div class="form-group">
                    <label for="slug">Slug</label>
                    <input class="form-control" defaultValue={form.slug}  type="text" name="slug" id="slug"/>
                    {errors.slug && <small className="text-danger">{errors.slug}</small>}
                </div>
                <div class="form-group">
                    <label for="description">Mô tả</label>
                    <input class="form-control" type="description" name="description" id="description" defaultValue={form.description} />
                    {errors.description && <small className="text-danger">{errors.description}</small>}
                </div>
                <button name='btn_update' Value='permission_update' type="submit" class="btn btn-primary">Cập nhập</button>
            </form>
        </div>
    </div>
</div>
);
}