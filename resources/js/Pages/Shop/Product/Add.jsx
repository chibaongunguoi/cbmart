import React from "react";
import { useState } from "react";
import Layout from "./../Layout/Layout";
export default function Home(){
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
              <div className="pt-add-form-input">
                <label htmlFor="">Thêm hình ảnh</label>
                <input id="thumbnail-choose" onChange={handleImageUpload} type="file" class="custom-file-input" name="file" />

              </div>
              {image && <img src={image} alt="Uploaded" className="mt-4 w-64 h-64 object-cover rounded-lg shadow" />}
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="">Tên sản phẩm</label>
              </div>
              <input className="pt-add-form-input" type="text" name="name" placeholder="Nhập vào" />
            </div>
            <div className="pt-add-form-item">
              <div className="pt-add-label">
                <label htmlFor="">Danh mục</label>
              </div>
              <input className="pt-add-form-input" type="text" name="name" placeholder="Chọn danh mục" />
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
 
