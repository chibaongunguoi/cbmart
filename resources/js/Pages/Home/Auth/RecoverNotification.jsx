import React from "react";
import Layout from "../Layout/Layout";
import  AuthForm from "../../../../views/UI/AuthForm";
import { useState } from "react";
import "../../../../../resources/css/Auth.css";

export default function Home(){
  return (
 <Layout>
  <div className="auth-content-wrapper">
    <AuthForm title="Đặt lại mật khẩu" >
    Hãy kiểm tra email của bạn. Chúng tôi đã gửi một đường dẫn để bạn có thể đặt lại mật khẩu. 
    </AuthForm>
  </div>
  </Layout>
  );
}