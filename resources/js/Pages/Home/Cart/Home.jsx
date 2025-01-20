import React from "react";
import Layout from "../Layout/Layout";
import "../../../../../resources/css/Cart.css";
import ProductQtyEdit from "../../../../views/UI/ProductQTyEdit";

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home(){
  return (
 <Layout>
  <div className="cart-content-wrapper container">
    <div className="cart-product-list-wrapper">
      <div className="cart-list-header-wrapper">
        <div className="cart-checkbox-wrapper">
          <input className="cart-checkbox" type="checkbox" id="cart-checkall-product"/>
          
          <label className="cart-checkbox-label" htmlFor="cart-checkall-product">CHỌN TẤT CẢ SẢN PHẨM</label>
        </div>
        <div className="cart-checkbox-delete">
          XÓA
        </div>
      </div>    
      <CartShopSection/>
      <CartShopSection/>
    </div>

    <div className="cart-summary-wrapper">
      <div className="cart-summary-header">
        Chi tiết đơn hàng
      </div>
      <div className="cart-summary-content">
        <div className="summary-item">
          <div className="cart-summary-title">
            Giá gốc {"(8 sản phẩm)"}
          </div>
          <div className="cart-summary-value">
            1.064.000 ₫
          </div>
        </div>
        <div className="summary-item">
          <div className="cart-summary-title">
            Tiết kiệm
          </div>
          <div className="cart-summary-value highlight">
            -1.064.000 ₫
          </div>
        </div>
        <div className="summary-item total-item">
          <div className="cart-summary-title total-title">
            Tổng cộng 
          </div>
          <div className="cart-summary-value highlight total-value">
            1.064.000 ₫
          </div>
        </div>
      </div>
      <button type="button" class="next-btn next-btn-primary next-btn-large cart-checkout-btn">THANH TOÁN</button>
    </div>

  <div className="clear-both" style={{clear:"both"}}></div>
  </div>
  </Layout>
  );
}
function CartShopSection(){
  function renderCart(){
    let a=[];
    for (let i=0;i<5;i++)
      a.push(<CartItem/>)
    return a;
  }
  return (
    <div className="cart-shop">
        <div className="cart-shop-title-wrapper">
          <div className="cart-checbox-shop-wrapper">      
              <input className="cart-checkbox" type="checkbox" id="cart-checkall-product"/>
              <label className="cart-checkbox-shop-label" htmlFor="cart-checkall-product">Chí Bảo Store</label>
          </div>
        </div>
        
        <div className="cart-item-list">
          <CartItem/>
          {renderCart()}
        </div>
        
      </div>
  )
}
function CartItem(){
  return (          <div className="cart-item">
    <div className="cart-product-title-wrapper">
      <input className="cart-checkbox" type="checkbox" id="cart-checkall-product"/>
      <a href="" className="cart-product-img-wrapper">
        <img className="cart-product-img" src="https://img.lazcdn.com/g/p/48143e15974a0380d80a49caa57847e4.jpg_2200x2200q80.jpg_.webp" alt=""  />
      </a>
      <a className="cart-product-title">
      Thuốc Nhuộm Tóc Phủ Bạc Dạng Kem Bigen Speedy Color Cream - Bigen Nhật Bền Màu Phủ Bạc Thảo Dược Hoàn Hảo 80ml-Nâu 4NA
      </a>
    </div>

    <div className="cart-product-price">
        <div className="current-price">
          225.000 ₫
        </div>
        <div className="origin-price">
          300.000 ₫
        </div>
    </div>
    <div className="cart-product-qty">
         <ProductQtyEdit/>
    </div>
    <div className="cart-product-delele-wrapper">
      XÓA
    </div>
  </div>);
}