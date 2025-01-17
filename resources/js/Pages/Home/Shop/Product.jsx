import React from "react";
import Layout from "../Layout/Layout";
import "../../../../../resources/css/Product.css";
import Rating5StarIcon from "../../../../views/UI/Rating5StarIcon";
import Pagination from "../../../../views/UI/Pagination";
import ProductCardList from "../../../../views/UI/ProductCardList";
import { useState,useRef,useEffect } from "react";

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ShopSection from "../../../../views/UI/ShopSection";
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
      {/* seller-end */}

      //mô tả sản phẩm
      <div className="product-des-wrapper container">
        <h2 className="product-des-title ">
          MÔ TẢ SẢN PHẨM
        </h2>
        <div className="product-des-content-wrapper">
          {<p> Chủ Shop đã ăn và đánh giá rằng đồ ăn rất ngon </p>}
        </div>
      </div>

      //Đánh Giá
      <div className="product-des-wrapper container">
        <h2 className="product-des-title ">
          ĐÁNH GIÁ SẢN PHẨM
        </h2>
        <div className="product-des-content-wrapper">
          <div className="product-rating-wrapper">
            <div className="rating-summary">
              <div className="rating-score">
                <span 
                className="score-avg">
                    4.5
                </span>
                <span className="score-max">
                    /5
                </span>
              </div>
              <div className="reply-rating-star-icon-list">

              <Rating5StarIcon ratingPoint={4.5} style={{fontSize:"1.75rem",marginRight:"4px"}}/>
              </div>
              <div className="rating-count">
                50 Lượt đánh giá
              </div>
            </div>
            <div className="rating-detail">
              <RatingStarList total_count={100}/>
            </div>
            <div className="rating-choose-star-wrapper">
              <div className="reply-button-title">
                Xem Danh Sách Các Đánh Giá :
              </div>
              <RatingStarButton/>
            </div>
          </div>
        </div>
        

        <div className="reply-content-wrapper">
          <UserReply/>
          <UserReply/>
          <UserReply/>
          <UserReply/>
          <div className="reply-pagination">
            <Pagination/>
          </div>
        </div>
      </div>
      <ProductFromShop/>
      <Recommend/>
  </div>
  </Layout>
  );
}
function ProductFromShop(){
  return (
        <ProductCardList title={"Các Sản Phẩm Khác Của Shop"} total={12}/>
  );
}
function Recommend(){
  return (
        <ProductCardList total={24}/>
  );
}
function UserReply(){
  return(
    <div className="reply-card-wrapper">
    <div className="reply-user-name">
      quangduc1482
    </div>
    <div className="reply-user-rating-star">
        <Rating5StarIcon ratingPoint={4.6}/>
    </div>
    <div className="reply-user-time">
      2023-03-27 15:23
    </div>
    <div className="reply-user-content">
      Mình đã ăn thử giống như chủ shop và công nhận đúng là ngon thật
    </div>
  </div>
  );
}
function RatingStarButton(){
  let a=['Tất cả',"5 Sao","4 Sao","3 Sao","2 Sao","1 Sao"];
  return (
    <>
    <div className="reply-choose-star-button-wrapper">

    {a.map((content)=>{
      return (<div className={content=="Tất cả"?"rating-choose-star rating-choose-star-active":"rating-choose-star"}>
        {content}
    </div>);
    })}
    </div>
    </>
  );
}
function RatingStarList({count,total_count}){
  count=[70,15,10,0,5]
  function Ratingstar({RatingPoint,count_per_star}){
    return (
      <li className="rating-star">
                    <div className="rating-star-wrapper">
                      <Rating5StarIcon ratingPoint={RatingPoint}/>
                    </div>
                    <div class="progress-bar-wrapper">
                      <div class="review-progress-wrapper">
                          <div class="review-progress">
                          </div>
                          
                          <div class="review-progress review-progress-fill" style={{width:(count_per_star*100)/total_count+"%"}}>
                          </div>
                        </div>
                    </div>
                    <div className="review-star-rating-count">
                      {count_per_star}
                    </div>
                  </li>
    );
  }
return (
  <ul className="rating-star-list">
          {count.map((star,index)=>{
              return (
                <Ratingstar count_per_star={star} RatingPoint={5-index}/>
              );
          })}
  </ul>
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