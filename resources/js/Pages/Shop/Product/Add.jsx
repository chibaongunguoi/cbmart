import React from "react";
import { useState} from "react";
import Layout from "./../Layout/Layout";
import PopUp from "../../../../views/UI/CategoryPopup";
import { csrf, route,csrfToken } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
export default function Home({categories}){
  const { errors } = usePage().props;
  let [form,setForm]=useState({'thumbnail':"","name":"","cat_id":"","description":"","price":0,"quantity":0});
  const [showPopup, setShowPopup] = useState(false);
  const [bc, setBc] = useState('Chọn danh mục');
  function togglePopUp(){
        setShowPopup(!showPopup);
      };
  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value});
  }  
  function handleSubmit(e) {
    e.preventDefault();
    router.post(route("shop/product/add"), form);
    }
    function handleConfirm(e,bc,value){
      e.preventDefault();
      setBc(bc);
      setForm({...form,'cat_id':value});
      togglePopUp();
    }
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setForm({...form,[e.target.name]:file});
    let formdata=new FormData();
    formdata.append('thumbnail',file);
      $.ajax({
          url :route("upload-image"),
          method:"POST",
          data:formdata,
          processData: false,
          contentType: false,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRF-TOKEN',csrfToken);
        },
          success:function(data){
              console.log(data);
          },
          error:function (xhr,ajaxOptions, throwError){
              alert(xhr.status);
              alert(throwError);
          }
      });

  };
  return (
 <Layout>
    <div className="pt-add-content-wrapper">
      <div className="pt-add-content">
        <div className="pt-add-title">
          Thông tin cơ bản
        </div>
        <div className="pt-add-form">
          <form id="pt-add" onSubmit={handleSubmit} enctype="multipart/form-data" method="POST">
          {csrf}
            <div className="pt-add-form-item">
              <div className="pt-add-label">            
                <label htmlFor="thumbnail-choose"><RequiredIcon />Hình ảnh sản phẩm</label>
              </div>
              {form.thumbnail && <img src={URL.createObjectURL(form.thumbnail)} alt="Uploaded" className="thumbnail-img choose-file-btn" />}
              <label className="pt-add-form-input choose-file-btn" htmlFor="thumbnail-choose">{form.thumbnail?"Thay đổi hình ảnh":"Thêm hình ảnh"}</label>
                <input id="thumbnail-choose" onChange={handleImageUpload} type="file" class="pt-add-form-input custom-file-input" name="thumbnail" />               
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor=""><RequiredIcon />Tên sản phẩm</label>
              </div>  
              <div className="pt-add-input-wrapper">
                <input className="pt-add-form-input pt-name-input" onChange={handleChange} type="text" name="name" placeholder="Nhập vào" maxlength="150" />
                <div className="text-count">{form.name.length}/150</div>             
              </div>        
              {errors.name && <small className="text-danger pt-add-error">{errors.name}</small>}
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="cat"><RequiredIcon />Danh mục</label>
              </div>
              <div className="pt-add-input-wrapper">
                <input readOnly={true} className="pt-add-form-input cat-choose" onClick={togglePopUp} type="text" name="cat" id="cat" placeholder="Chọn danh mục" value={bc}/>
                {errors.cat_id && <small className="text-danger">{errors.cat_id}</small>}
                <PopUp handleConfirm={handleConfirm} handleClose={togglePopUp} show={showPopup} categories={categories} />
              </div>
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="description"><RequiredIcon />Mô tả sản phẩm</label>
              </div>
              <div className="pt-add-input-wrapper">
                <textarea onChange={handleChange} className="pt-add-form-input detail-input" name="description" id="description"></textarea>
                {errors.description && <small className="text-danger">{errors.description}</small>}      
              </div>
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor=""><RequiredIcon />Giá</label>
              </div>  
              <div className="pt-add-input-wrapper">
                <input value={form.price==0?"":form.price} className="pt-add-form-input pt-add-price-input" onChange={handleChange} type="number" name="price" placeholder="Nhập vào" maxlength="150" />
                <div className="money-detail">₫</div>             
              </div>         
              {errors.price && <small className="text-danger pt-add-error">{errors.price}</small>}
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor=""><RequiredIcon />Số lượng</label>
              </div>  
              <div className="pt-add-input-wrapper">
                <input value={form.quantity} className="pt-add-form-input pt-name-input" onChange={handleChange} type="number" name="quantity" placeholder="Nhập vào" maxlength="150" />
              </div>        
              {errors.quantity && <small className="text-danger pt-add-error">{errors.quantity}</small>}
            </div>
            <div className="pt-add-btn-group">
              <button className="hl-btn" >
                    <span>
                      Xác nhận
                    </span>                      
            </button>
            </div>
          </form>
        </div>
      </div>   
    </div>
  </Layout>);
}
function RequiredIcon(){
  return <div className="required-icon">*</div>;
}