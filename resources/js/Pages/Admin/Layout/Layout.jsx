import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
export default function Layout({children}){
  return (
    <>
  <div id="warpper" class="nav-fixed">
    <Header/>
    <div id="page-body" class="d-flex">
      <SideBar/>
      <div id="wp-content">
      <div className="container-fluid py-5">
      {children}
      </div>
      </div>
    </div>
  </div>
  </>);
}