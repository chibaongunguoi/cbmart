import React from "react";
import { useState } from "react";
import Layout from "./../Layout/Layout";
export default function Home({categories}){
  let [form,setForm]=useState({'thumbanil':"","name":"","cat_id":"","description":""});
  const [showPopup, setShowPopup] = useState(false);
  const [bc, setBc] = useState('Chọn danh mục cha');
  function togglePopUp(){
        setShowPopup(!showPopup);
      };
  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value});
  }  
  function handleSubmit(e) {
    e.preventDefault();
    router.post(route("admin/role/store"), form);
    }
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };
  return (
 <Layout>
    <div className="pt-add-content-wrapper">
      <div className="pt-add-content">
        <div className="pt-add-title">
          Thông tin cơ bản
        </div>
        <div className="pt-add-form">
          <form action="" enctype="multipart/form-data">
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="thumbnail-choose">Hình ảnh sản phẩm</label>
              </div>
              {image && <img src={image} alt="Uploaded" className="thumbnail-img choose-file-btn" />}
              <label className="pt-add-form-input choose-file-btn" htmlFor="thumbnail-choose">{image?"Thay đổi hình ảnh":"Thêm hình ảnh"}</label>
                <input id="thumbnail-choose" onChange={handleImageUpload} type="file" class="pt-add-form-input custom-file-input" name="file" />
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="">Tên sản phẩm</label>
              </div>
              <input className="pt-add-form-input pt-name-input" onChange={handleChange} type="text" name="name" placeholder="Nhập vào" maxlength="150" />
              <div className="text-count">{form.name.length}/150</div>
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="">Danh mục</label>
              </div>
              <input className="pt-add-form-input" type="text" name="name" placeholder="Chọn danh mục" />
              {/* <PopUp handleConfirm={handleConfirm} handleClose={togglePopUp} show={showPopup} categories={categories} /> */}
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="">Mô tả sản phẩm</label>
              </div>
              <textarea className="pt-add-form-input detail-input" name="" id=""></textarea>
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
 