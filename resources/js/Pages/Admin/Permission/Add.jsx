import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
import Notification from "../Ui/Notification";
export default function Home({permissions,status}){
  return (
 <Layout>
    <div id="content" class="container-fluid">
    <div class="row">
    {status?<Notification>{status}</Notification>:null}
    
  <PermissionAdd />
  <PerrmissionsList permissions={permissions} />
  </div>
    </div>
  </Layout>);
}
function PermissionAdd(){
    const { errors } = usePage().props
    let [form ,setForm]=useState({
        'name':"",
        'slug':"",
        'description':"",
    })
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin/permission/add"),form,{
            onSuccess: () => {
              setForm({
                'name':"",
                'slug':"",
                'description':"",
            });
            },
          });
      }
    return(
        <>
        <div className="col-4">       
                <div class="card">
                    <div class="card-header font-weight-bold">
                        Thêm quyền
                    </div>
                    <div class="card-body">
                        <form 
                        onSubmit={handleSubmit}
                         onChange={handleChange} method='POST'>
                            <div class="form-group">
                                <label for="name">Tên quyền</label>
                                <input class="form-control" type="text" name="name" id="name" value={form.name}/>
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div class="form-group">
                                <label for="slug">Slug</label>
                                <small class="form-text text-muted pb-2"> Ví dụ: posts.add</small>
                                <input class="form-control" type="text" name="slug" id="slug"value={form.slug}/>
                                {errors.slug && <small className="text-danger">{errors.slug}</small>}
                            </div>
                            <div class="form-group">
                                <label for="description">Mô tả</label>
                                <textarea class="form-control" type="text" name="description" id="description" value={form.description}> </textarea>
                                {errors.description && <small className="text-danger">{errors.description}</small>}
                            </div>
                            <button type="submit" class="btn btn-primary" name='btn_add' value="add">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>
</>
       );
}
function PerrmissionsList({permissions}){
    let t=1;
return (<div class="col-8">
    <div class="card">
        <div class="card-header font-weight-bold">
            Danh sách quyền
        </div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên quyền</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(permissions).map((permissionKey)=>{
                        let permissionList=permissions[permissionKey];
                        return (<>
                        <tr>
                            <td scope="row"></td>
                            <td><strong className='text-capitalize'>Module {permissionKey}</strong></td>
                            <td></td>
                        </tr>
                        {permissionList.map((permission)=>{
                                    return(<tr>
                                        <td scope="row">{t++}</td>
                                        <td>|---{permission.name}</td>
                                        <td>{permission.slug}</td>
                                        <td>
                                            <a href={route("admin/permission/edit?id="+permission.id)} class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
                                            <a href={route("admin/permission/delete?id="+permission.id)} onclick="return confirm('Bạn có chắc chắn xóa quyền này?')" class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>
                                        </td>
                                    </tr>);
                                })}
                                
                            </>
                            );
                        })}
                </tbody>
            </table>
        </div>
    </div>
</div>);
}