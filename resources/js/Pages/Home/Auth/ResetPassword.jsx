import React from "react";
import Layout from "../Layout/Layout";
import { ResetPasswordForm } from "../../../../views/UI/AuthForm";
import { useState } from "react";
import "../../../../../resources/css/Auth.css";

export default function Home(){
  return (
 <Layout>
  <div className="auth-content-wrapper">
    <ResetPasswordForm/>
  </div>
  </Layout>
  );
}