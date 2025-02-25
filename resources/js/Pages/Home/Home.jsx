import React from "react";
import "../../../css/HomeContent.css";
import Layout from "./Layout/Layout";
import Rating5StarIcon from "../../../views/UI/Rating5StarIcon";
import ShopSection from "../../../views/UI/ShopSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import ProductCardList from "../../../views/UI/ProductCardList";
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
      <div className="home-carousel-wrapper container">
      <Carousel banners={banners}/>
      </div>
      <Categories/>
      <Recommend />
  </Layout>);
}

function Recommend(){
  return (
        <ProductCardList total={42}/>
  );
}
function Rating(){
  return (<div className="card-recommend-rating-wrapper">
    <div className="card-recommend-rating">
      <Rating5StarIcon ratingPoint={3}/>
      <div className="card-recommend-rating-number">
        {"(509)"}
      </div>
    </div>
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
    <div className="swiper-wrapper">
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
