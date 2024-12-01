import React from "react";
export default function RoleCheckBoxList({permissions}){
    return (
        <>
        {
            Object.keys(permissions).map((permissionKey)=>{
            let permissionList=permissions[permissionKey];
            if(permissionList.length<1)
                return(<div>Hiện chưa có quyền </div>);
            return (
                <div class="card my-4 border">
                <div class="card-header">
                    <input type="checkbox" class="check-all" name="" id={permissionKey} onClick={handleCheckAllPermission} />
                    <label for={permissionKey} class="m-0">Module {permissionKey}</label>
                </div>
                <div class="card-body">
                    <div class="row">
                    {permissionList.map((permission)=>{
                        return (<div class="col-md-3">
                            <input onChange={handleChangePermission} type="checkbox" class="permission" value={permission.id} name="permission_id[]" id={permission.id}/>
                            <label for={permission.id}>{permission.name}</label>
                        </div>);
                    })}
                    </div>
            </div>
        </div>
     );})} 
     </>
    )
}