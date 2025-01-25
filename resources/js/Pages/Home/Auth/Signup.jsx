import React from "react";
import Layout from "../Layout/Layout";
import { SignUpForm } from "../../../../views/UI/AuthForm";
import "../../../../../resources/css/Auth.css";

export default function Home(){
  return (
 <Layout>
  <div className="auth-content-wrapper">
    <SignUpForm/>
  </div>
  </Layout>
  );
}