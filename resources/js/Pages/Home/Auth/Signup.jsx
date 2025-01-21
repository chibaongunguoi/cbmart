import React from "react";
import Layout from "../Layout/Layout";
import "../../../../../resources/css/Auth.css";
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home(){
  return (
 <Layout>
  <div className="auth-content-wrapper">

    <div className="auth-wrapper container">
      <div className="auth-content">
        <div className="auth-title"> 
          Đăng nhập
        </div>
        <div className="auth-form-wrapper">
          <div className="auth-input-wrapper">
            <input type="text" placeholder="Vui lòng nhập tên đăng nhập của bạn" class="auth-input" defaultValue=""/>
          </div>
          <div className="auth-input-wrapper">
            <input type="password" placeholder="Vui lòng nhập mật khẩu của bạn" class="auth-input" defaultValue=""/>
          </div>
          <div className="auth-forget-password">
            Quên mật khẩu?
          </div>
          <button className="auth-button">
            ĐĂNG NHẬP
          </button>
        </div>
        <div className="auth-other-way">
          Bạn chưa có tài khoản?
          <a href="" className="auth-other-link">Đăng ký</a>
        </div>
      </div>
    </div>
  </div>
    
  </Layout>
  );
}
