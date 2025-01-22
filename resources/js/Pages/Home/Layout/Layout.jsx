import React from "react";
import Notification from "../../../../views/UI/Notification";
import "../../../../../resources/css/HomeLayout.css";
import { useState,useRef } from "react";
export default function Layout({children}){
  return (
    <>
  <div id="warpper" class="nav-fixed">
    <Header />
      <div className="content-wrapper">     
        {children}
      </div>
    <Footer/>
  </div>
  </>);
}
function Footer(){
  return (
    <>
    <div class="footer">
      <div className="footer-content-wrapper container">
        <div className="footer-content-card about-us-wrapper">
          <div className="footer-content-card-title">
            VỀ CBSHOP
          </div>
          <div className="footer-content-card-content">
            CBSHOP là đơn vị chuyên cung cấp các sản phẩm công nghệ cao, đặc biệt là máy tính và linh kiện chính hãng. Với đa dạng dòng sản phẩm như laptop, PC, đến các phụ kiện như màn hình, bàn phím cơ, chuột, tai nghe và các linh kiện máy tính (RAM, SSD, card đồ họa).
          </div>

        </div>
        <div className="footer-content-card contact">
        <div className="footer-content-card-title">
            LIÊN HỆ
          </div>
          <ul className="footer-content-card-contact">
              <li className="footer-contact-wrapper">
                <a href="" className="footer-contact-li">
                  <img class="footer-contact-icon" src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"/>
                  <span class="footer-contact-desc">Facebook</span>
                </a>
              </li>
              <li className="footer-contact-wrapper">
                <a href="" className="footer-contact-li">
                  <img class="footer-contact-icon" src="public/img/Home/Home/phone_icon1.png"/>
                  <span class="footer-contact-desc phone-number">0967430257</span>
                </a>
              </li>
              
          </ul>
        </div>
        <div className="footer-content-card contact">
          <div className="footer-content-card-title">
              THANH TOÁN
            </div>
            <ul className="footer-content-card-payment">
              <li className="footer-payment-wrapper">
                <img className="payment-icon" src="public/img/Home/Home/momo_logo.png" alt="" />
              </li>
              
              
          </ul>  
        </div>
      </div>
    </div>
    </>
  );

}
function Header(){
  return (
    <header className="header">
    <HeaderTop />
    <HeaderWithSearch/>
    </header>
  );
}
function HeaderTop(){
  let [notiDrop,setNotiDrop]=useState(false);
  let NotiDropDown=useRef(null);
function NotiHandleClick(){
  if(notiDrop==false)
    {NotiDropDown.current.style.display='block';}
  else{
      NotiDropDown.current.style.display='none';
  }
  setNotiDrop(!notiDrop);
}
return (
  <div className="navbar-wrapper">
    <nav className="container navbar">
      <div className="navbar-link">
        Kênh người bán
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">Hỗ Trợ</li>
        <li className="navbar-link" onClick={NotiHandleClick}>
           Thông Báo
           <div  className="noti-dropdown" ref={NotiDropDown}>
              <Notification/>
           </div>
           </li>
        <li className="navbar-link"> Đăng Nhập</li>
        <li className="navbar-link"> Đăng Kí</li>
      </ul>
    </nav>
  </div>
)
}
function HeaderWithSearch(){
  return (
    <div className="">
        <div className="container header-search-wrapper">
        <a className="company-logo-wrapper" href="">
          <svg className="company-logo-icon" width="90" height="370" viewBox="0 0 90 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd" >
              <path d="M8.80826 25.3295C7.5127 25.3343 6.35276 25.0456 5.32846 24.4635C4.30416 23.8813 3.49373 23.0347 2.89716 21.9236C2.3071 20.8125 2.00915 19.4692 2.00331 17.8937C1.99742 16.3052 2.28864 14.9532 2.87696 13.8377C3.47179 12.7222 4.27918 11.8696 5.29914 11.2799C6.3256 10.6902 7.47685 10.3929 8.75289 10.3882C9.87918 10.384 10.8923 10.5886 11.7923 11.0019C12.6988 11.4152 13.4399 12.0147 14.0158 12.8003C14.5916 13.586 14.9467 14.5384 15.0811 15.6577L11.9756 15.6693C11.8555 14.8689 11.5113 14.2419 10.9432 13.7883C10.3751 13.3282 9.67114 13.0996 8.83131 13.1028C7.71152 13.1069 6.81138 13.5269 6.13088 14.3628C5.45035 15.1921 5.1129 16.3653 5.11853 17.8822C5.12427 19.4316 5.47043 20.6088 6.15701 21.4135C6.8501 22.2182 7.75003 22.6186 8.85679 22.6145C9.67059 22.6114 10.3599 22.394 10.9247 21.9623C11.496 21.5304 11.8519 20.9269 11.9922 20.1516L15.0977 20.1401C14.9903 21.0325 14.6744 21.8735 14.15 22.6632C13.6321 23.4529 12.9215 24.0935 12.0184 24.5852C11.1218 25.0768 10.0517 25.3249 8.80826 25.3295ZM17.3329 25.1026L17.2789 10.5519L23.0992 10.5303C24.7008 10.5244 25.9065 10.8715 26.7164 11.5716C27.5262 12.2652 27.9332 13.1557 27.9372 14.2429C27.9404 15.0958 27.6923 15.79 27.193 16.3257C26.7002 16.8549 26.0764 17.2055 25.3219 17.3776L25.3224 17.5241C25.8759 17.5481 26.394 17.7024 26.8769 17.9871C27.3662 18.2717 27.7616 18.6739 28.063 19.1936C28.3709 19.7068 28.5262 20.3215 28.5288 21.0376C28.5317 21.8059 28.3454 22.4967 27.9701 23.11C27.5947 23.7169 27.0366 24.1975 26.2957 24.5518C25.5548 24.8996 24.6375 25.0755 23.5438 25.0796L17.3329 25.1026ZM22.6531 16.6258C23.278 16.6235 23.7983 16.4555 24.2137 16.1219C24.6291 15.7884 24.8358 15.3351 24.8337 14.7622C24.8317 14.2414 24.6446 13.8222 24.2724 13.5045C23.9001 13.1804 23.3754 13.0196 22.6983 13.0221L20.3546 13.0308L20.3679 16.6342L22.6531 16.6258ZM22.8997 22.5722C23.7591 22.569 24.3835 22.4007 24.7728 22.0672C25.1687 21.7337 25.3657 21.2935 25.3637 20.7466C25.3614 20.1477 25.1448 19.6569 24.7137 19.2744C24.2825 18.8854 23.6991 18.6922 22.9635 18.695L20.3756 18.7045L20.39 22.5815L22.8997 22.5722ZM35.9468 25.2387C34.1825 25.2452 32.7715 24.8468 31.7138 24.0434C30.6626 23.24 30.1114 22.0539 30.06 20.4851L33.0385 20.474C33.0933 21.203 33.3818 21.7521 33.904 22.1212C34.4327 22.4839 35.0974 22.6637 35.8982 22.6607C36.6794 22.6578 37.3038 22.4895 37.7713 22.1557C38.2453 21.8219 38.4814 21.3881 38.4794 20.8543C38.4776 20.366 38.2613 19.9924 37.8307 19.7336C37.4 19.4683 36.7872 19.2427 35.9922 19.0568L34.399 18.6721C33.174 18.3837 32.2054 17.9218 31.4935 17.2864C30.7879 16.6445 30.4332 15.7864 30.4292 14.7122C30.426 13.8333 30.6607 13.0642 31.1336 12.4049C31.6064 11.739 32.2555 11.2223 33.081 10.8547C33.9129 10.4805 34.8595 10.2914 35.9207 10.2875C37.0014 10.2835 37.9461 10.4655 38.7547 10.8336C39.5634 11.2017 40.1936 11.7137 40.6452 12.3696C41.1034 13.0255 41.3406 13.7831 41.3568 14.6424L38.388 14.6534C38.3339 14.0872 38.0913 13.6454 37.6605 13.328C37.2296 13.0105 36.6463 12.8532 35.9107 12.8559C35.162 12.8587 34.5864 13.0171 34.1839 13.3311C33.7814 13.6386 33.581 14.0299 33.5828 14.5052C33.5847 15.0195 33.8107 15.4093 34.2609 15.6746C34.7111 15.9333 35.2522 16.1364 35.8843 16.2838L37.1843 16.6012C38.0314 16.7869 38.7843 17.0608 39.4432 17.4229C40.1021 17.7786 40.6214 18.2389 41.0011 18.8039C41.3808 19.3624 41.5721 20.0453 41.5751 20.8526C41.58 22.1872 41.0859 23.2502 40.0928 24.0417C39.0996 24.8331 37.7176 25.2321 35.9468 25.2387ZM43.6608 25.005L43.6069 10.4543L46.6733 10.443L46.6955 16.4488L52.9357 16.4257L52.9135 10.4198L55.9896 10.4084L56.0435 24.9591L52.9674 24.9705L52.9451 18.9549L46.7049 18.9781L46.7272 24.9936L43.6608 25.005ZM65.136 25.1207C63.8469 25.1255 62.687 24.8368 61.6562 24.2547C60.6254 23.6726 59.8084 22.826 59.2054 21.715C58.6023 20.6039 58.2978 19.2606 58.292 17.6851C58.2861 16.0966 58.5806 14.7446 59.1754 13.6291C59.7702 12.5136 60.5809 11.661 61.6073 11.0712C62.6338 10.4815 63.7916 10.1842 65.0806 10.1794C66.3697 10.1747 67.5264 10.4633 68.5507 11.0455C69.5815 11.6276 70.3984 12.4742 71.0015 13.5852C71.6046 14.6963 71.9091 16.0461 71.9149 17.6346C71.9208 19.2232 71.6264 20.5752 71.0315 21.6907C70.4367 22.7996 69.626 23.649 68.5996 24.2388C67.5796 24.822 66.4251 25.116 65.136 25.1207ZM61.4072 17.6736C61.4129 19.21 61.7525 20.3839 62.4261 21.1952C63.1062 22.0065 64.0062 22.4101 65.1259 22.4059C66.2392 22.4018 67.1296 21.9916 67.7972 21.1753C68.4712 20.359 68.8054 19.1826 68.7997 17.6462C68.794 16.1032 68.4511 14.9261 67.771 14.1148C67.0974 13.297 66.204 12.8901 65.0907 12.8943C63.9709 12.8984 63.074 13.3119 62.4 14.1347C61.7324 14.951 61.4015 16.1306 61.4072 17.6736ZM74.227 24.8917L74.1731 10.341L79.8957 10.3198C81.0025 10.3157 81.944 10.5238 82.7203 10.9441C83.5031 11.3644 84.101 11.9449 84.5139 12.6856C84.9268 13.4262 85.135 14.2783 85.1386 15.2418C85.1422 16.2054 84.937 17.0558 84.523 17.793C84.1091 18.5302 83.509 19.1086 82.7228 19.5282C81.9366 19.9412 80.9836 20.1499 79.8638 20.154L77.2759 20.1636L77.2934 24.8804L74.227 24.8917ZM77.2668 17.7027L79.3469 17.695C80.2388 17.6917 80.8987 17.4646 81.3268 17.0138C81.7613 16.5565 81.9772 15.9697 81.9745 15.2536C81.9718 14.5244 81.7516 13.9393 81.3137 13.4982C80.8759 13.0571 80.211 12.8382 79.3191 12.8415L77.2488 12.8492L77.2668 17.7027Z" fill="white"/>
            </g>
          </svg>
        </a>
        <div className="header-search-form-wrapper">
          <form action="" className="header-searchbar">
            <input className="header-searchbar-input" placeholder="Tìm sản phẩm hay tên thương hiệu" type="text" name="" id="" />
            <button className="btn header-searchbar-button">
            <svg height="16" viewBox="0 0 19 19" width="20" class="search-icon"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-1016 -32)"><g><g transform="translate(405 21)"><g transform="translate(611 11)"><path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path><path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path></g></g></g></g></g></svg>
            </button>
          </form>
        </div >
        <div className="cart-wrapper"> 
          <a className="" href="">
            <svg width={27} height={27} viewBox="0 0 26.6 25.6" className="cart-icon "><title>Shopping Cart Icon</title>
            <polyline fill="none" points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5" stroke="white"></polyline>
            <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle><circle cx="19.7" cy="23" r="2.2" stroke="none"></circle></svg>
            <div className="cart-number-badget">
              1
            </div>
          </a>
        </div>
        </div>
    </div>
  )
}