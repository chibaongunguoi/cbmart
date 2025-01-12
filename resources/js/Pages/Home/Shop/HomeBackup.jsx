import React from "react";
import "../../../../css/HomeHeader.css";
import "../../../../css/HomeContent.css";
import Layout from "../Layout/Layout";
import { useState,useRef,useEffect } from "react";
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
  </div>
  </Layout>);
}
function Carousel({banners}){
  let [pos,setPos]=useState(0);
  useEffect(() => {
    // Tạo interval để gọi hàm mỗi 1 giây
    let i = setInterval(() => {
      handleCarouselButtonNext()
    }, 5000);

    // Dọn dẹp interval khi component bị unmount
    return () => clearInterval(i);
  }, [pos]); // Chỉ chạy 1 lần khi component được render lần đầu

  function handleCarouselButtonPrev(){
    if (pos<=0){
      setPos(banners.length-1);
    }
    else{
      setPos((pos)=>pos-1);
    }
  }
  function handleCarouselButtonNext(){
    if (pos>=banners.length-1)
      setPos(0);
    else
    setPos((pos)=>pos+1);
  }
  return(  
    <div className="home-banners-wrapper"> 
      <div className="container home-banners">
        <div className="home-carousel">
          <div style={{transform:"translate3d("+(-pos*1200)+"px, 0px, 0px)"}} className="home-carousel-item-list" >
            {banners.map((src,index)=>{return (<CarouselItem src={src} index={index}/>)})}
          </div>
          <div className="carousel-pagination">
            {banners.map((src,index)=>{return (<span className={index==pos?"carousel-pagination-bullet carousel-pagination-bullet-active":"carousel-pagination-bullet"}></span>)})}
          </div>
          <div onClick={handleCarouselButtonPrev} className="carousel-button-prev"></div>
          <div onClick={handleCarouselButtonNext} className="carousel-button-next"></div>
        </div>
      </div>      
    </div>
    );
}
function CarouselItem({src,index}){
return (<div className="home-carousel-item" data-carousel-item-index={index}>
  <a href="carousel-itemdivnk">
      <img className="carousel-item-img" src={src} alt="" />
  </a>
</div>);
}