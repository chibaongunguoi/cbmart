import React from "react";
import Layout from "../Layout/Layout";
import "../../../../../resources/css/Product.css";
import Rating5StarIcon from "../../../../views/UI/Rating5StarIcon";
import { useState,useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home(){
  function renderBCItem(){
    let a=[];
    for (let i=0;i<4;i++)
      a.push(<BreadcrumbItem/>)
    return a;
  }
  return (
 <Layout>
  <div className="content-wrapper ">
     <div className="breadcrumd-wrapper container">
        <div className="breadcrumd">
          <ul className="breadcrumb-list">
            {renderBCItem()}
          </ul>
        </div>
     </div>
     <ProductImportantInfo/>
     //seller
      <div className="seller-wrapper">
        <div className="seller">
          <div className="seller-acc">
            <a href="" className="seller-acc-img-wrapper">
              <img src="" alt="" className="seller-acc-img" />
            </a>
            <div className="seller-acc-info">
              <div className="seller-acc-name">
                Nguyễn Chí Bảo
              </div>
              <div className="seller-btn-wrapper">
                <button className="seller-watch-btn">
                  <span className="seller-watch">
                    Xem Shop
                  </span> 
                </button>
              </div>
            </div>

          </div>
          <div className="seller-info-wrapper">
            <SellerInfoContent title={"Đánh giá"} value={432}/>
            
          </div>
        </div>
      </div>
  </div>
  </Layout>
  );
}
function SellerInfoContent({title,value}){
return (
  <div className="seller-info-content">
    <div className="seller-info-title">
      {title}
    </div>
    <div className="seller-info-value">
      {value}
    </div>
  </div>
);
}
function ProductImportantInfo(){
  return(<div className="product-wrapper">
    <div className="product">
      <div className="product-img-wrapper">
        <img className="product-img" src="https://img.lazcdn.com/g/p/aed145245cd1b3cc6eb39a5fb950f5b7.jpg_720x720q80.jpg_.webp" alt="" />
      </div>
      <div className="product-info">
      
          <div className="product-title-wrapper">
            <div className="product-title"> 1kg chà là sấy dẻo</div>
          </div>
          <div className="product-rating-wrapper">
            <a href="" className="product-rating">
              <div className="product-rating-link rating-with-star">
                <div className="product-rating-point">
                  4.6
                </div>
                <Rating5StarIcon ratingPoint={4}/>
              </div>
              <div className="product-rating-link">
                <div className="product-rating-number">
                   5k 
                </div>
                <span className="product-rating-span"> Đánh Giá </span>
              </div>
            </a>
          </div>
          <div className="product-price-wrapper">
            <div className="product-price">
              <div className="product-final-price">
              <span style={{fontSize:"0.75em"}}>₫
                </span> 
              <div>
                53.000
                </div>
              </div>
              <div className="product-normal-price">
              <span style={{fontSize:"0.75em"}}>₫
                </span> 
              <div>
                95.000
                </div>
              </div>
              <div className="product-discount">
              -44%
              </div>
            </div>
          </div>
          <div className="product-optional">
            <div className="product-optional-content">
              <h3 className="product-optional-title">
                Phí Vận Chuyển
              </h3>
              <div className="product-optional-wrapper">
              <div className="product-ship-price">
                <span style={{fontSize:"0.75em"}}>₫
                  </span> 
                <div>
                  95.000
                  </div>
                </div>
              </div>
            </div>

           <div className="product-optional-content">
            <h3 className="product-optional-title">
              Số lượng
            </h3>
            <div className="product-optional-wrapper">
            <div className="product-qty-wrapper">
              
                <buttton className="qty-button">
                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="product-svg-qty"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg>
                </buttton>
              
                <input class="product-qty-input" type="text" disabled="" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1"></input>
                <buttton className="qty-button">
                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="product-svg-qty icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg>
                </buttton>
              
              </div>
              <div className="product-qty-remain">
                Còn lại 2000 sản phẩm
              </div>
            </div>                
          </div>
          <div className="product-optional-content">
              <div className="product-cart-concert">
                <button className="btn add-to-cart">
                  <span>
                    Thêm vào giỏ hàng
                  </span>                      
                </button>
                <button className="btn buy-now">
                  <span>
                    Mua ngay
                  </span>                      
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
 </div>);
}
function BreadcrumbItem(){
  return(<li class="breadcrumb_item">
      <span class="breadcrumb_item_text">
        <a title="Fashion Accessories" href="https://www.lazada.vn/dong-ho-mat-kinh-trang-suc/" class="breadcrumb_item_anchor">
          <span>
            Fashion Accessories
          </span>
        </a>
        <div class="breadcrumb_right_arrow">
        </div>
      </span>
      </li>);
}