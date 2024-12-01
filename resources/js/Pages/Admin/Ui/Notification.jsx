import React from "react";
export default function Notification({mess}){
    let  message={
        'user_add_success':"Thêm thành viên thành công",
        'user_delete_success':"Xóa thành viên thành công",
        'user_update_success':"Cập nhập thành viên thành công",    
        'user_restore_success':"Khôi phục thành viên thành công",
        'permission_add_success':"Thêm quyền thành công",
        'permission_delete_success':"Xóa quyền thành công",
        'permission_update_success':"Cập nhập quyền thành công",    
        'role_add_success':"Thêm vai trò thành công",
        'role_delete_success':"Xóa vai trò thành công",
        'role_update_success':"Cập nhập vai trò thành công",
    };
    return (
        <div class="alert alert-success">{message[mess]}</div>
    );
}