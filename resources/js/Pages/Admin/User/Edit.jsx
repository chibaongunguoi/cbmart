import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import { usePage,router } from "@inertiajs/react";
import { useState} from "react";
export default function Home({user}){
  return (
 <Layout>
  <UserUpdate user={user}/>
  </Layout>);
}   

function UserUpdate({user}){
    const { errors } = usePage().props
    let [form ,setForm]=useState({
        'name':user.name,
        'email':user.email,

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
        router.post(route('admin/user/update?id='+user.id),form);
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
                //  action={route('admin/user/update?id='+user.id)} 
                onSubmit={handleSubmit}
                method="POST">
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
                    <button name='btn_add' value='user_add' type="submit" class="btn btn-primary">Cập nhập</button>
                </form>
        </div>
    </div>
</div>
);
}