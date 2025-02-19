import React from "react";
import { useState } from "react";
import { route } from "../../../helper/helper";
export default function SideBar(){
    
    return (<div id="sidebar" class="bg-white">
        <ul id="sidebar-menu">
            <SideBarItem title="Bảng Điều Khiển" functionList={[{'name':'trang chủ','link':'admin'}]} />
            <SideBarItem title="Trang" functionList={[{'name':'thêm mới','link':'admin/page/add'}]} />
            <SideBarItem title="Managers" functionList={[{'name':'thêm mới','link':'admin/manager/add'},{'name':'danh sách','link':'admin/manager/list'}]} />
            <SideBarItem title="Users" functionList={[{'name':'thêm mới','link':'admin/user/add'},{'name':'danh sách','link':'admin/user/list'}]} />
            <SideBarItem title="Phân Quyền" functionList={[{'name':'quyền','link':'admin/permission/add'},{'name':'thêm vai trò','link':'admin/role/add'},{'name':'danh sách vai trò','link':'admin/role/list'}]} />
        </ul>
    </div>
);
}
function SideBarItem({title='',functionList=[]}){
    let activeModule=sessionStorage.getItem('activeModule');
    const [isDown, setIsDown] = useState(sessionStorage.getItem(title)==='false'?false:true);
    function setModuleActive(e,link){
        e.preventDefault();
        sessionStorage.setItem('activeModule', link);
        window.location.href=route(link);
    }
    function toggleMenu(){
        sessionStorage.setItem(title, !isDown);
        setIsDown(!isDown);
    };
    return (
        <li class="nav-link">
                <div className="sidebar-link-title" >
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    {title}
                </div>
                <i class={`arrow fas ${isDown ? "fa-angle-down" : "fa-angle-right"}`} onClick={() => toggleMenu()}></i>
                <ul class="sub-menu"style={{ display: isDown ? "block" : "none" }}>
                    {functionList.map((item)=>{
                        return (<li className={item.link==activeModule?"active":""} key={item.name} onClick={(e)=>{setModuleActive(e,item.link)}}><a href={route(item.link)}>{item.name}</a></li>);
                    })}
                </ul>
            </li>
    );
}