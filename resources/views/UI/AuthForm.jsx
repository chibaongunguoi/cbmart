import React from "react";
import { useState } from "react";
import { csrf,route } from "../../js/helper/helper";
export default function AuthForm({title="Đăng nhập",children}){
  return (
    <div className="auth-wrapper container">
      <div className="auth-content">
        <div className="auth-title"> 
          {title}
        </div>
        <div className="auth-form-wrapper">
          {children}   
        </div>
        <SubInfo title={title}/>
      </div>
    </div>
  );
} 
function SubInfo({title}){
  if (title=="Đăng nhập"||title=="Đăng kí"){
  return (
    <div className="auth-other-way">
         
          {title=="Đăng nhập"?
          <>
          <div className="auth-other-ask"> Bạn chưa có tài khoản?</div><a href={route('signup')} className="auth-other-link">Đăng kí</a>
          </>
          :<>
          <div className="auth-other-ask"> Bạn đã có tài khoản?</div><a href={route('login')} className="auth-other-link">Đăng nhập</a>
          </>}   
        </div>
  );}
}
export function EmailFindForm(){
  return (
    <AuthForm title="Tìm tài khoản của bạn">
      <div className="email-verify-noti">
        Vui lòng nhập email để tìm kiếm tài khoản của bạn 
      </div>
      <form action="" className="email-verify-form" method="POST" >
      {csrf}
      <AuthTextInput name={"email"} title={"Email"} defaultValue={"chibaongunguoi@gmail.com"}/>
      <button className="auth-button">
        Tiếp tục
      </button>
      </form>
    </AuthForm>
  );
  } 
  export function ResetPasswordForm(){
    return (
      <AuthForm title="Đặt lại mật khẩu">
        <div className="email-verify-noti">
          Vui lòng nhập mật khẩu mới cho tài khoản của bạn
        </div>
        <form action="" className="email-verify-form" method="POST" >
        {csrf}
        <AuthPasswordInput/>
        <button className="auth-button">
          Tiếp tục
        </button>
        </form>
      </AuthForm>
    );
    } 
export function EmailVerifyForm(){
  return (
    <AuthForm title="Xác thực địa chỉ Email">
      <div className="email-verify-noti">
        Chúng tôi đã gửi mã xác thực đến 
        <div className="email-title">chibaongunguoi@gmail.com</div>
      </div>
      <form action="" className="email-verify-form" method="POST" >
      {csrf}
      <AuthTextInput name={"token"} title={"Nhập mã"} />
      <button className="auth-button">
        Tiếp tục
      </button>
      </form>
    </AuthForm>
  );
  }  
  function AuthEmailVerifyInput({name="token",title="Nhập mã"}){
    return(
    <div className="auth-input-wrapper">
        <input name={name} type="number" placeholder={`${title}`} class="auth-input" defaultValue={"chibaongunguoi"}/>
        <div className="resend-wrapper">
          <div className="resend-title" >
           Gửi lại mã        
          </div>
        </div>
      </div>
    );
}
export function LoginForm(){
return (
  <AuthForm>
    <form action="" className="login-form" method="POST" >
    {csrf}
    <AuthTextInput name={"username"} title={"Tên đăng nhập"} defaultValue={"chibaongunguoi"}/>
    <AuthPasswordInput/>
    <div className="auth-forget-password-wrapper">
        <a href={route('recover')} className="auth-forget-password">
        Quên mật khẩu?
          </a>
    </div>
    <button className="auth-button">
      Đăng nhập
    </button>
    </form>
  </AuthForm>
);
}
export function SignUpForm(){
  return (
    <AuthForm title="Đăng kí">
      <form action="" className="signup-form" method="POST" >
        {csrf}
      <AuthTextInput name={"name"} title={"Họ và Tên"} defaultValue={"Bảo"}/>
      <AuthTextInput name={"email"} title={"Email"} defaultValue={"chibaongunguoi@gmail.com"}/>
      <AuthTextInput name={"username"} title={"Tên đăng nhập"} defaultValue={"chibaongunguoi"}/>
      <AuthPasswordInput/>
      <button className="auth-button">
      Đăng kí
        </button>
      </form>
    </AuthForm>
  );
  }
function AuthTextInput({name="",title="",defaultValue=""}){
    return(
    <div className="auth-input-wrapper">
            <input name={name} type="text" placeholder={`${title}`} class="auth-input" defaultValue={defaultValue}/>
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
        <input name={name} type={eyestate==false?"password":"text"} placeholder={`${title}`} class="auth-input" defaultValue={"chibaongunguoi"}/>
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