import "../../../css/AdminPage.css"
import React from "react";
import Overview from "./Dashboard/OverviewBox";
import NewOrderList from "./Dashboard/NewOrderLList";
import SideBar from "./Layout/SideBar";
import Header from "./Layout/Header";
export default function Home(){
  return (
  <div id="warpper" class="nav-fixed">
    <Header/>
    <div id="page-body" class="d-flex">
      <SideBar/>
      <div id="wp-content">
      <div className="container-fluid py-5">
      <Overview/>
      <NewOrderList/>
      </div>
      </div>
    </div>
  </div>);
}