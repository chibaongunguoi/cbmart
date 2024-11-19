import React from "react";

export default function Header(){
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