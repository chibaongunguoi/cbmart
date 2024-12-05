import React from "react";
import Layout from "./../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Notification from "../Ui/Notification";
export default function Home({permissions}){
return (
<Layout>
    <RoleAdd permissions={permissions}/>
</Layout>);
}
function RoleAdd({permissions}){
    const { errors } = usePage().props
    let [stateForm,setStateForm]=useState("edit");
    let [status,setStatus]=useState(null);
    let [form ,setForm]=useState({
        'name':"",
        "description":"",
        'permission_id':[]
    })

    // });}},[errors]);
    function handlepermission_id(id,checked){
    if (checked){
        setForm({...form,permission_id:[...form.permission_id,...id]})
    }
    else{
        let newlist=form.permission_id.filter((permissionId)=>{return id.indexOf(permissionId)==-1?true:false});
        setForm({...form,permission_id:newlist}
        )
    }  
    }
    function handleCheckAllPermission(e){ 
        let nodeList=e.target.closest('.card').querySelectorAll(".permission");
        Object.keys(nodeList).map((index)=>{
                nodeList[index].checked=e.target.checked
            });
        handlepermission_id(Object.keys(nodeList).map((index)=>{
           return  nodeList[index].value;
        }),e.target.checked); 
    }   
    function handleChangePermission(e){
        handlepermission_id(e.target.value,e.target.checked);
    }
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
        }
    
    function handleSubmit(e) {
        e.preventDefault();
        setStateForm("submit");
        setStatus(null);
        router.post(route("admin/role/store"), form);
    }
    return (
    <>
    <div id="content" class="container-fluid">
    <div class="card">
    {status?<Notification>{status}</Notification>:""}
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Thêm mới vai trò</h5>
        </div>
        <div class="card-body">
            <form method="POST" 
            onSubmit={handleSubmit}
            // action={route("admin/role/store")}
              enctype="multipart/form-data">
                {csrf}
                <div class="form-group">
                    <label class="text-strong" for="name">Tên vai trò</label>
                    <input value={form.name} onChange={handleChange} class="form-control" type="text" name="name" id="name"/>
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div class="form-group">
                    <label class="text-strong" for="description">Mô tả</label>
                    <textarea value={form.description} onChange={handleChange} class="form-control" type="text" name="description" id="description"></textarea>
                    {errors.description && <small className="text-danger">{errors.description}</small>}
                </div>
                <strong>Vai trò này có quyền gì?</strong>
                <small class="form-text text-muted pb-2"> Check vào module hoặc các hành động bên dưới để chọn quyền.</small> 
                {
                        Object.keys(permissions).map((permissionKey)=>{
                        let permission_id=permissions[permissionKey];
                        if(permission_id.length<1)
                            return(<div>Hiện chưa có quyền </div>);
                        return (
                            <div class="card my-4 border">
                            <div class="card-header">
                                <input type="checkbox" class="check-all" name="" id={permissionKey} onClick={handleCheckAllPermission} />
                                <label for={permissionKey} class="m-0">Module {permissionKey}</label>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                {permission_id.map((permission)=>{
                                    return (<div class="col-md-3">
                                        <input onChange={handleChangePermission} type="checkbox" class="permission" value={permission.id} name="permission_id[]" id={permission.id}/>
                                        <label for={permission.id}>{permission.name}</label>
                                    </div>);
                                })}
                                </div>
                        </div>
                    </div>
                 );})}             
                <input type="submit" name="btn-add" class="btn btn-primary" value="Thêm mới"/>
            </form>
        </div>
    </div>
</div>

</>
);
}