import React from "react";
import Rating5StarIcon from "./Rating5StarIcon";
import "./ProductCardList.css";
import ShopSection from "./ShopSection";
export default function ProductCardList({total=12,title="Đề Cử Cho Bạn"}){
  function renderProduct(total){
    let ProductList=[];
    for (let i=0;i<total;i++){  
        ProductList.push(<ProductCard/>);
    }
    return ProductList;
}
  return (
    <ShopSection title={title}>

    <div className="card-product-ul">
          {renderProduct(total)}
    </div>
    <div className="product-load-more-wrapper">  
        <LoadMoreButton/>    
    </div>
    
    </ShopSection>
  );
}
function ProductCard(){
  return(
<div className="card-product-li">
            <a href="card-product-li-content">
              <div className="card-product-imgage-wrapper">
                <img className="card-product-imgage" src="https://img.lazcdn.com/g/p/748536eb94b58d36c5cb8f9d976d8996.png_170x170q80.jpg"></img>
              </div>
              <div className="card-product-desc">
                <div className="card-product-name">
                Canvas Bee|Star bracelet design, versatile whitening and sweet bracelet
                </div>
                <div className="card-product-price-wrapper">
                  <div className="card-product-price">
                    <span className="currency">₫</span>
                    <span class="price">7,000</span>
                    <span class="discount">-30%</span>
                  </div>
                </div>
                <Rating/>
              </div>
            </a>
          </div>
  );
}
function LoadMoreButton(){
  return (<div className="product-load-more-button">
    XEM THÊM
  </div>);
  }
function Rating(){
  return (<div className="card-product-rating-wrapper">
    <div className="card-product-rating">
      <Rating5StarIcon ratingPoint={3}/>
      <div className="card-product-rating-number">
        {"(509)"}
      </div>
    </div>
  </div>
  );
}