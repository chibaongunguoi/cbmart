import React from "react";

export default function SideBar(){
    let route = (link)=>{
        return window.location.href+link
    };
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
                    <li><a href="{{url('admin/page/add')}}">Thêm mới</a></li>
                    <li><a href="{{url('admin/page/list')}}">Danh sách</a></li>
                </ul>
            </li>
            <li class="nav-https://www.youtube.com/watch?v=5nY291EPBFAlink {{$module_active=='post'?'active':''}}">
                <a href="{{url('admin/post/list')}}">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Bài viết
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href="{{url('admin/post/add')}}">Thêm mới</a></li>
                    <li><a href="{{url('admin/post/list')}}">Danh sách</a></li>
                    <li><a href="{{url('admin/post/cat/add')}}">Danh mục</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='product'?'active':''}}">
                <a href="{{url('admin/product/list')}}">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Sản phẩm
                </a>
                <i class="arrow fas fa-angle-down"></i>
                <ul class="sub-menu">
                    <li><a href="{{url('admin/product/add')}}">Thêm mới</a></li>
                    <li><a href="{{url('admin/product/list')}}">Danh sách</a></li>
                    <li><a href="{{url('admin/product/cat/list')}}">Danh mục</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='order'?'active':''}}">
                <a href="{{url('admin/order/list')}}">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Bán hàng
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href="{{url('admin/order/list')}}">Đơn hàng</a></li>
                </ul>
            </li>
            <li class="nav-link {{$module_active=='user'?'active':''}}">
                <a href={route("/user/list")}>
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Users
                </a>
                <i class="arrow fas fa-angle-right"></i>

                <ul class="sub-menu">
                    <li><a href="{{url('admin/user/add')}}">Thêm mới</a></li>
                    <li><a href="{{url('admin/user/list')}}">Danh sách</a></li>
                </ul>
            </li>
       
            <li class="nav-link {{$module_active=='permission'?'active':''}}">
                <a href="{{route('permission.add')}}">
                    <div class="nav-link-icon d-inline-flex">
                        <i class="far fa-folder"></i>
                    </div>
                    Phân quyền
                </a>
                <i class="arrow fas fa-angle-right"></i>
                <ul class="sub-menu">
                    <li><a href="{{route('permission.add')}}">Quyền</a></li>
               
                    <li><a href="{{route('role.add')}}">Thêm vai trò</a></li>
              
                    <li><a href="{{route('role.list')}}">Danh sách vai trò</a></li>
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