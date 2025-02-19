import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import { usePage,router } from "@inertiajs/react";
import { useState} from "react";
export default function Home({manager,roles,currentRoles}){
  return (
 <Layout>
  <UserUpdate manager={manager} roles={roles} currentRoles={currentRoles}/>
  </Layout>);
}   


function UserUpdate({manager,roles,currentRoles}){
    const { errors } = usePage().props
    let [form ,setForm]=useState({
        'name':manager.name,
        'description':manager.description,
        'role_id':currentRoles

})
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
    function handleSubmit(e){
        e.preventDefault(); 
        router.post(route('admin/manager/update?id='+manager.id),form);
    }
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
  return (<div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold">
            Chỉnh sửa thông tin thành viên
        </div>
        <div class="card-body">
                <form 
                //  action={route('admin/manager/update?id='+user.id)} 
                onSubmit={handleSubmit}
                method="POST">
                    {csrf}
                    <div class="form-group">
                        <label for="name">Họ và tên</label>
                        <input value={form.name}class="form-control" type="text" name="name" id="name" onChange={handleChange}/>
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                    <div class="form-group">
                        <label for="description">Mô tả</label>
                        <input value={form.description}class="form-control" type="text" name="description" id="description" onChange={handleChange}/>
                        {errors.description && <small className="text-danger">{errors.description}</small>}
                    </div>
                    <div class="card my-4 border">
                        <div class="card-header">
                            {/* <!-- <input type="checkbox" class="check-all" name="" id="roles"> --> */}
                            <label for="roles" class="m-0">Vai trò trong hệ thống</label>
                        </div>
                        <div class="card-body">
                            <div class="row">
                            {roles.map((role)=>{
                                    return (<div class="col-md-12">
                                        <input defaultChecked={currentRoles.indexOf(role.id)==-1?false:true} type="checkbox" class="role" value={role.id}name="role_id[]" id={role.id}onChange={handleCheck}/>
                                        <label for={role.id}>{role.name}</label>
                                    </div>);
                                })}
                                {roles.length<1?<div>Không có vai trò </div>:null}
                            </div>
                        </div>
                    </div>
                    <button name='btn_add' value='manager_add' type="submit" class="btn btn-primary">Cập nhập</button>
                </form>
        </div>
    </div>
</div>
);
}