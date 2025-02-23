import React from "react";
import SideBar,{SideBarItem} from "../../../../views/UI/SideBar";
export default function Layout({children}){
  return (
  <div id="warpper" class="nav-fixed">
    <Header/>
    <div id="page-body" class="d-flex">
      <AdminSideBar/>
      <div id="wp-content">
      <div className="container-fluid py-5">
      {children}
      </div>
      </div>
    </div>
  </div>
);
}
function Header(){
  return (<nav class="topnav shadow navbar-light bg-white d-flex">
      <div class="navbar-brand"><a href="?">ADMIN</a></div>
      <div class="nav-right ">
          <div class="btn-group mr-auto">
              <button type="button" class="btn dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="plus-icon fas fa-plus-circle"></i>
              </button>
              <div class="dropdown-menu">
                  <a class="dropdown-item" href="{{url('admin/post/add')}}">Thêm bài viết</a>
                  <a class="dropdown-item" href="{{url('admin/product/add')}}">Thêm sản phẩm</a>
                  <a class="dropdown-item" href="{{url('admin/order/list')}}">Xem đơn hàng</a>
              </div>
          </div>
          <div class="btn-group">
              <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <!-- {{Auth::user()->name}} --> */}
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Tài khoản</a>
                  <form method="POST" action="{{ route('logout') }}">
                      @csrf
                      <a class="dropdown-item" href="{{route('logout')}}" onclick="event.preventDefault();
                                          this.closest('form').submit();">
                          Thoát
                      </a>
                  </form>
              </div>
          </div>
      </div>
  </nav>
);
}
function AdminSideBar(){
    return (
        <SideBar>
         <SideBarItem title="Bảng Điều Khiển" functionList={[{'name':'trang chủ','link':'admin'}]} />
            <SideBarItem title="Trang" functionList={[{'name':'thêm mới','link':'admin/page/add'}]} />
            <SideBarItem title="Danh mục" functionList={[{'name':'thêm mới','link':'admin/category/add'}]} />
            <SideBarItem title="Managers" functionList={[{'name':'thêm mới','link':'admin/manager/add'},{'name':'danh sách','link':'admin/manager/list'}]} />
            <SideBarItem title="Users" functionList={[{'name':'thêm mới','link':'admin/user/add'},{'name':'danh sách','link':'admin/user/list'}]} />
            <SideBarItem title="Phân Quyền" functionList={[{'name':'quyền','link':'admin/permission/add'},{'name':'thêm vai trò','link':'admin/role/add'},{'name':'danh sách vai trò','link':'admin/role/list'}]} />
        </SideBar>
    );
}
