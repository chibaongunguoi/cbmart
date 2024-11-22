import React from "react";
import Overview from "./OverviewBox";
import NewOrderList from "./NewOrderList";
export default function Dashboard(){
  return (
      <div className="container-fluid py-5">
      <Overview/>
      <NewOrderList/>
  </div>);
}