import React from "react";
import "../../css/ShopInfo.css"
export function ProductSellerInfo(){
  return (
    <div className="seller-wrapper container">
    <div className="seller">
      <div className="seller-acc">
        <a href="" className="seller-acc-img-wrapper">
          <img width="80" loading="lazy" class="seller-acc-img" srcset="https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5@resize_w80_nl 1x, https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5@resize_w160_nl 2x" src="https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5" alt="click here to visit shop" height="80"/>
        </a>
        <div className="seller-acc-info">
          <div className="seller-acc-name">
            Nguyễn Chí Bảo
          </div>
          <div className="seller-btn-wrapper">
            <button className="btn seller-watch-btn add-to-cart">
              <span className="seller-watch">
                Xem Shop
              </span> 
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="seller-info-wrapper">
        <SellerInfoContent title={"Đánh Giá"} value={"4.3tr"}/>
        <SellerInfoContent title={"Tỉ Lệ Phản Hồi"} value={"95%"}/>
        <SellerInfoContent title={"Sản Phẩm"} value={"5.6k"}/>
        <SellerInfoContent title={"Người Theo Dõi"} value={432}/>     
      </div>
  </div>
  );
}
export default function ShopInfo(){
  return (
    <div className="seller-wrapper container">
    <div className="seller">
      <div className="seller-acc">
        <a href="" className="seller-acc-img-wrapper">
          <img width="80" loading="lazy" class="seller-acc-img" srcset="https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5@resize_w80_nl 1x, https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5@resize_w160_nl 2x" src="https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lvy9c93i0aitd5" alt="click here to visit shop" height="80"/>
        </a>
        <div className="seller-acc-info">
          <div className="seller-acc-name">
            Nguyễn Chí Bảo
          </div>
          <div className="seller-btn-wrapper">
            <FollowButton/>
            {/* <FollowedButton/> */}
          </div>
        </div>
      </div>
    </div>
      <div className="seller-info-wrapper">
        <SellerInfoContent title={"Số Sản Phẩm:"} value={"56"}/>
        <SellerInfoContent title={"Nguời Theo Dõi:"} value={"4.8k"}/>
        <SellerInfoContent title={"Đánh Giá:"} value={"4.5 (4.3tr Đánh giá)"}/>
        <SellerInfoContent title={"Tỉ Lệ Phản Hồi:"} value={"95%"}/>
      </div>
  </div>
  );
}
function FollowButton(){
  return (
    <button className="btn btn-primary seller-watch-btn follow">
              <span className="seller-watch">
                Theo Dõi
              </span> 
            </button>
  );
}
function FollowedButton(){
  return (
    <button className="btn seller-watch-btn followed">
              <span className="seller-watch">
                Đã Theo Dõi
              </span> 
            </button>
  );
}
function SellerInfoContent({title,value}){
  return (
    <div className="seller-info-content ">
      <div className="seller-info-title shop-info">
        {title}
      </div>
      <div className="seller-info-value">
        {value}
      </div>
    </div>
  );
  }