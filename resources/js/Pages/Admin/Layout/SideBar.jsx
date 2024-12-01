import React from "react";
import { route } from "../../../helper/helper";
export default function SideBar(){
    return (<div id="sidebar" class="bg-white">
        <ul id="sidebar-menu">
            <li class="nav-link {{$module_active=='dashboard'?'active':''}}">
                <a href="/admin">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Dashboard
                </a>
                <i class="arrow fas fa-angle-right"></i>
            </li>
            <li class="nav-link {{$module_active=='page'?'active':''}}">
                <a href="/page/list">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Trang
                </a>
                <i class="arrow fas fa-angle-right"></i>

                <ul class="sub-menu">
                    <li><a href={route('admin/page/add')}>Thêm mới</a></li>
                    <li><a href={route('admin/page/list')}>Danh sách</a></li>
                </ul>
            </li>
            <li class="nav-https://www.youtube.com/watch?v=5nY291EPBFAlink {{$module_active=='post'?'active':''}}">
                <a href={route('admin/post/list')}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Bài viết
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href={route('admin/post/add')}>Thêm mới</a></li>
                    <li><a href={route('admin/post/list')}>Danh sách</a></li>
                    <li><a href={route('admin/post/cat/add')}>Danh mục</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='product'?'active':''}}">
                <a href={route('admin/product/list')}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Sản phẩm
                </a>
                <i class="arrow fas fa-angle-down"></i>
                <ul class="sub-menu">
                    <li><a href={route('admin/product/add')}>Thêm mới</a></li>
                    <li><a href={route('admin/product/list')}>Danh sách</a></li>
                    <li><a href={route('admin/product/cat/list')}>Danh mục</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='order'?'active':''}}">
                <a href={route('admin/order/list')}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Bán hàng
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href={route('admin/order/list')}>Đơn hàng</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='user'?'active':''}}">
                <a href={route("admin/user/list?type=active")}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Users
                </a>
                <i class="arrow fas fa-angle-right"></i>

                <ul class="sub-menu">
                    <li><a href={route('admin/user/add')}>Thêm mới</a></li>
                    <li><a href={route('admin/user/list')}>Danh sách</a></li>
                </ul>
            </li>
       
            <li class="nav-link {{$module_active=='permission'?'active':''}}">
                <a href={route('admin/permission/add')}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Phân quyền
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href={route('admin/permission/add')}>Quyền</a></li>
               
                    <li><a href={route('admin/role/add')}>Thêm vai trò</a></li>
              
                    <li><a href={route('admin/role/list')}>Danh sách vai trò</a></li>
                </ul>
            </li>
   

            {/* <!-- <li class="nav-link"><a>Bài viết</a>
                <ul class="sub-menu">
                    <li><a>Thêm mới</a></li>
                    <li><a>Danh sách</a></li>
                    <li><a>Thêm danh mục</a></li>
                    <li><a>Danh sách danh mục</a></li>
                </ul>
            </li>
            <li class="nav-link"><a>Sản phẩm</a></li>
            <li class="nav-link"><a>Đơn hàng</a></li>
            <li class="nav-link"><a>Hệ thống</a></li> --> */}

        </ul>
    </div>
);
}