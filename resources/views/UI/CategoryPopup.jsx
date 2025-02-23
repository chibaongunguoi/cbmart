import React from "react";
import { useState } from "react";
import { haveCatChild } from "../../js/helper/category";
import "./a.css";

const PopUp = ({ handleClose, show,categories }) => {
  let [catChosenList,setCatChosenList]=useState([null]);
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
            Chọn danh mục   
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
          <CatBreadCrumb catChosenList={catChosenList} categories={categories}/>
          <button className="btn cat-confirm">
                  <span>
                    Xác nhận
                  </span>                      
                </button>
        </div>
      </div>
    </div>
  );
};
function CatBreadCrumb({catChosenList,categories}){
  function renderBC(id){
      if (id!=null){
          let cat=categories.find(cat=>cat.id==id);
          console.log(cat);
          return (
            <div className="cat-breadcrumb-item">
            <div className="cat-breadcrumb"> {cat.name} </div>
             {id==catChosenList[catChosenList.length-1]?'':<div className="bc-arrow">
              &gt;
            </div> }
          </div>
          );
      }
      return (<></>);
  }
return (
  <div className="breadcrumb-wrapper">
          Đã Chọn: 
          
          {catChosenList.map((id)=>{return renderBC(id)})}
          </div>
);
}
function CatTabbleCell({catChosenList,categories,handleCatClick}){
  function renderlist(value,level){
    let a=[];
    let c=categories.filter(cat=>cat.parent_id==value)
    if (c.length>0){
      c.map((cat)=>{a.push(<CatItem hasChild={haveCatChild(categories,cat.id)} cat={cat} level={level} handleCatClick={handleCatClick}/>);})  
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
function CatItem({hasChild,cat,level,handleCatClick}){
  return (
    <div className="cat-line" onClick={()=>{handleCatClick(level,cat.id)}} >
             <div className="cat-name">
             {cat.name}
              </div> 
              {hasChild?<i class={`arrow fas fa-angle-right`} ></i>:""}
        </div>
  );
}
export default PopUp;