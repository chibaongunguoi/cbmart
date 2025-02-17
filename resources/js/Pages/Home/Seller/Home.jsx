import React from "react";
import Layout from "../Layout/Layout";
import ShopInfo from "../../../../views/UI/ShopInfo";
import ProductCardList from "../../../../views/UI/ProductCardList";
import Pagination from "../../../../views/UI/Pagination";
import "../../../../../resources/css/Shop.css";

export default function Home(){
  return (
 <Layout>
    <div className="shop-wrapper">
      <div className="shop-info-wrapper">
        <ShopInfo/>
      </div>
      <div className="shop-product-wrapper">
          <ProductCardList total={24} loadMoreBtn={false}/>
              <Pagination/>
      </div>
    </div>
  </Layout>);
}

