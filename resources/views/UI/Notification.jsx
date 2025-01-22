import React from "react";
import "../../css/Notification.css"
export default function Notification(){
  function renderNotiItem(){
    let a=[];
    for (let i=1;i<10;i++)
      a.push(<NotificationItem/>);
    return a;
  }
  return(<div className="noti-wrapper">
    <div className="noti-content-wrapper">
      <div className="noti-title">
        Thông báo
      </div>
      <div className="noti-item-list">
        {renderNotiItem()}
        <NotificationItem isNew={false}/>
      </div>
    </div>
  </div>);
}
 function NotificationItem({isNew=true}){
  return (<a className={`noti-item ${isNew?"new":""}`}>
    <div className="noti-item-content-wrapper">
      <div className="noti-shop-img-wrapper">
        <img src="https://yt3.ggpht.com/g_gd-kGxjIDM0ZxYL68C28EvmKyws7eL9PZp_NCKl11kmiTR4jACXiQ4ATKvwZEyPL3Ah4lHwA=s88-c-k-c0x00ffffff-no-rj" alt="" className="noti-shop-img" />
      </div>
      <div className="noti-item-content">
        Chí Bảo Shop đã thêm ví da siuuu bền
      </div>
      <div className="noti-product-img-wrapper">
        <img src="https://img.lazcdn.com/g/p/748536eb94b58d36c5cb8f9d976d8996.png_170x170q80.jpg" alt="" className="noti-product-img" />
      </div>
    </div>
  </a>);
}