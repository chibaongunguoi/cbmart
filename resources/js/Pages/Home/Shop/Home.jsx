import React from "react";
import Layout from "../Layout/Layout";
import { useState,useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home(){
  let banners=["https://img.lazcdn.com/us/domino/e6481fd6-fe15-4ea3-9150-9540024b23bd_VN-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/5fcb09af-3260-4abc-919f-829816d460ce_VN-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/485a6f12-386c-4d1e-a28f-4a6c15c580c3_VN-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/fea63853-c275-4ad8-acd9-6ed44582efc0_VN-1976-688.jpg_2200x2200q80.jpg"
  ];
  return (
 <Layout>
  <div className="content-wrapper">
      <Carousel banners={banners}/>
      <Categories/>
      <Recommend />
  </div>
  </Layout>);
}
function ShopSection({title,children}){
  return (
    <div className="shop-section-wrapper container">
      <div className="shop-section-header">
        <div className="shop-section-title">
          {title}
        </div>
      </div>
      <div className="shop-section-content">
          {children}
      
      </div>
    </div>
  );
}
function Recommend(){
  function renderHomeRecommendCard(){
      let HomeRecommendCardList=[];
      for (let i=0;i<42;i++){  
          HomeRecommendCardList.push(<HomeRecommendCard/>);
      }
      return(<>
        {HomeRecommendCardList}
        
      </>
      );
    
  }
  return (
    <ShopSection title={'Đề Cử Cho Bạn'}>
        <div className="card-recommend-ul">
          {renderHomeRecommendCard()}
        </div>
        <div className="recommend-load-more-wrapper">  
            <div className="recommend-load-more-button">
              XEM THÊM
            </div>
        </div>
    </ShopSection>
  );
}
function HomeRecommendCard(){
  return(
<div className="card-recommend-li">
            <a href="card-recommend-li-content">
              <div className="card-recommend-imgage-wrapper">
                <img className="card-recommend-imgage" src="https://img.lazcdn.com/g/p/748536eb94b58d36c5cb8f9d976d8996.png_170x170q80.jpg"></img>
              </div>
              <div className="card-recommend-desc">
                <div className="card-recommend-name">
                Canvas Bee|Star bracelet design, versatile whitening and sweet bracelet
                </div>
                <div className="card-recommend-price-wrapper">
                  <div className="card-recommend-price">
                    <span className="currency">₫</span>
                    <span class="price">7,000</span>
                    <span class="discount">-30%</span>
                  </div>
                </div>
                <div className="card-recommend-rating-wrapper">
                  <div className="card-recommend-rating">
                    <RatingStar ratingPoint={3}/>
                    <div className="card-recommend-rating-number">
                      {"(509)"}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
  );
}
function RatingStar({ratingPoint}){
  function renderStar(){
    let StarList=[];
    for (let i=0;i<5;i++){
      if (ratingPoint>=1){
        StarList.push(<RatingStarIcon width={100}/>);
        ratingPoint-=1;
      }else{
          StarList.push(<RatingStarIcon width={ratingPoint*100}/>);
          while (i<4){
            StarList.push(<RatingStarIcon width={0}/>);
            i++;
          }
      }
    }
    return StarList;
  }
return (<div className="card-recommend-rating-star">
  {renderStar()}               
</div>);
}
function RatingStarIcon({width}){
  return (
    <div className="rating-star-wrapper">
                        <div className="rating-star-fill" 
                        style={{width:width+"%"}}
                        >
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="rating-star-icon-fill"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                        </div>
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="rating-star-icon-border"><polygon fill="none"points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                      </div>
  );
}
function Categories(){
  return (
    <ShopSection title={'Danh Mục'}>
        <div className="card-categories-ul">
          <CategoriesCardList/>
        </div>
    </ShopSection>
  );
}
function CategoriesCardList(){
  let a=[];
  for (let i=0;i<16;i++){
    a.push(<CategoriesCard />)}
  return a;
}
function CategoriesCard(){
  return(
    <div className="card-categories-li">
              <a className="card-categories-li-content" href="/">
                <div className="card-categories-imgage-wrapper">
                    <img className="card-categories-imgage" src="https://img.lazcdn.com/g/p/748536eb94b58d36c5cb8f9d976d8996.png_170x170q80.jpg"></img>
                </div>
                <div className="card-categories-name">
                    Wireless and Bluetooth Speakersaaaa  
                </div>
              </a>
            </div>
  )
}
function Carousel({banners}){
  return(  
    <>
    <div className="swiper-wrapper container">
      <Swiper 
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper carousel-wrapper container"
      >
        {banners.map((src)=>{return (
          <SwiperSlide>
            <a className="swiper-slide-wrapper" href="">
              <img className="carousel-item-img" src={src} alt=""/>
            </a>
          </SwiperSlide>
          )})}
      </Swiper>
        </div>
    </>
    );
}
