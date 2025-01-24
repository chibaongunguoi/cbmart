import React from "react";
import { useState } from "react";
export default function AuthForm({title="Đăng nhập",children}){
  return (
    <div className="auth-wrapper container">
      <div className="auth-content">
        <div className="auth-title"> 
          {title}
        </div>
        <div className="auth-form-wrapper">
          {children}
          <button className="auth-button">
            {title}
          </button>
        </div>
        <div className="auth-other-way">
          Bạn chưa có tài khoản?
          <a href="" className="auth-other-link">{title=="Đăng nhập"?"Đăng kí":"Đăng nhập"}</a>
        </div>
      </div>
    </div>
  );
}
export function LoginForm(){
return (
  <AuthForm>
    <AuthTextInput name={"username"} title={"Tên đăng nhập"}/>
    <AuthPasswordInput/>
    <div className="auth-forget-password">
        Quên mật khẩu?
    </div>
    
  </AuthForm>
);
}
export function SignUpForm(){
  return (
    <AuthForm title="Đăng kí">
      <AuthTextInput name={"name"} title={"Họ và Tên"}/>
      <AuthTextInput name={"email"} title={"Email"}/>
      <AuthTextInput name={"username"} title={"Tên đăng nhập"}/>
      <AuthTextInput name={"phone_number"} title={"Số điện thoại"}/>
      <AuthPasswordInput/>
    </AuthForm>
  );
  }
function AuthTextInput({name="",title=""}){
    return(
    <div className="auth-input-wrapper">
            <input name={name} type="text" placeholder={`${title}`} class="auth-input" defaultValue=""/>
        </div>
    );
}
function AuthPasswordInput({name="password",title="Mật khẩu"}){
    let [eyestate,setEyeState]=useState(false);
    function Eyeclicked(){
        setEyeState(!eyestate);
    }
    return(
    <div className="auth-input-wrapper">
        <input name={name} type="password" placeholder={`${title}`} class="auth-input" defaultValue=""/>
        <div className="hide-show-icon-wrapper">
          <div className="eye-icon-wrapper" onClick={Eyeclicked}>
           {eyestate==false?<EyeClose/>:<EyeOpen/>}            
          </div>
        </div>
      </div>
    );
}
function EyeClose(){
  return (
    <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" width="100%" height="100%" >
                  <path d="M32.711 11c-3.166 4.841-8.573 8.03-14.71 8.03-6.139 0-11.546-3.189-14.712-8.03M9.79 17.5l-3 5m8.5-3-1 5.5m12.5-7.5 3 5m-8.5-3 1 5.5"></path>
     </svg>
  );
}
function EyeOpen(){
  return (
    <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" width="100%" height="100%" >
      <circle cx="18" cy="17.5" r="4">
      </circle>
      <path d="M3.284 18.47a1.77 1.77 0 0 1 0-1.94c3.167-4.84 8.573-8.03 14.711-8.03s11.545 3.19 14.711 8.03a1.77 1.77 0 0 1 0 1.94c-3.166 4.84-8.573 8.03-14.71 8.03-6.139 0-11.545-3.19-14.712-8.03">
      </path>
    </svg>
  );
}