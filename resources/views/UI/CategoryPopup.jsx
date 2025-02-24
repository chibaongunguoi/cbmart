import React from "react";
import { useState,useEffect } from "react";
import { haveCatChild,isActive } from "../../js/helper/category";
import "../../css/catPopup.css"

export default function PopUp ({handleConfirm, handleClose, show,categories }){
  let [catChosenList,setCatChosenList]=useState([null]);
  let bc='';
  function renderBCitem(id){
    if (id!=null){
        let cat=categories.find(cat=>cat.id==id);
        if (id!=catChosenList[catChosenList.length-1])
          return bc+=" "+cat.name+" >";
        else return bc+=" "+cat.name;
    }
}
    catChosenList.map((id)=>{renderBCitem(id)}); 
  function handleCatClick(level,value){
      let newarray=catChosenList.slice(0,level);
      newarray[level]=value;
      return setCatChosenList(newarray);
  }
  
  return (
    <div className={`popup ${show ? "show" : ""}`}>
      <div className="popup-content">
        <div className="popup-title-wrapper">
          <div className="popup-title">
            Chọn danh mục cha   
          </div>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        <div className="cat-table-wrapper">
          <div className="table-header">  
            <form className="cat-form" action="">
              <input className="cat-search-bar" type="text" name="catKeyWord" placeholder="Tên danh mục"/>
              <span className="cat-search-icon-wrapper">
            <svg height="16" viewBox="0 0 19 19" width="20" class="cat-search-icon"><g fill-rule="evenodd" stroke="#e2e2e2" stroke-width="1"><g transform="translate(-1016 -32)"><g><g transform="translate(405 21)"><g transform="translate(611 11)"><path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path><path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path></g></g></g></g></g></svg>
            </span>
              </form>        
          </div>
          <div className="cat-table">
           <CatTabbleCell catChosenList={catChosenList}categories={categories} handleCatClick={handleCatClick}/>
          </div>
        </div>
        <div className="popup-footer">
          <CatBreadCrumb catChosenList={catChosenList} categories={categories} bc={bc}/>
          <div className="btn-group">

          <button className="btn popup-btn cat-notexist-btn" onClick={(e)=>{handleConfirm(e,'Không có danh mục cha',null)}}bc={bc}>
                  <span>
                    Không có danh mục cha
                  </span>                      
          </button>
          <button className="btn popup-btn cat-confirm" onClick={(e)=>{handleConfirm(e,bc,catChosenList[catChosenList.length-1])}}bc={bc}>
                  <span>
                    Xác nhận
                  </span>                      
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
function CatBreadCrumb({catChosenList,categories,bc}){
return (
  <div className="breadcrumb-wrapper">
          Đã Chọn:            
          <div className="cat-breadcrumb-item">
           {bc}       
          </div>
          </div>
);
}
function CatTabbleCell({catChosenList,categories,handleCatClick}){
  function renderlist(value,level){
    let a=[];
    let c=categories.filter(cat=>cat.parent_id==value)
    if (c.length>0){
      c.map((cat)=>{a.push(<CatItem isActive={isActive(catChosenList,cat.id)} hasChild={haveCatChild(categories,cat.id)} cat={cat} level={level} handleCatClick={handleCatClick}/>);})  
    return (<div className="cat-tabble-cell">
      {a}
      </div>)
    }
  }
  return (
    <>
    {catChosenList.map(((value,index)=>{return renderlist(value,index+1)}))}
    </>
  );
}
function CatItem({isActive,hasChild,cat,level,handleCatClick}){
  return (
    <div className={`cat-line ${isActive?"cat-active":""}`} onClick={()=>{handleCatClick(level,cat.id)}} >
             <div className="cat-name">
             {cat.name}
              </div> 
              {hasChild?<i class={`arrow fas fa-angle-right`} ></i>:""}
        </div>
  );
}
