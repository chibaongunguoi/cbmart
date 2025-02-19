import React from "react";
import Layout from "../Layout/Layout";
import "../../../../../resources/css/Product.css";
import Pagination from "../../../../views/UI/Pagination";
import ProductCardList from "../../../../views/UI/ProductCardList";
import { useState,useRef,useEffect } from "react";


import ShopSection from "../../../../views/UI/ShopSection";
export default function Home(){
  return (
    <Layout>     
      <ProductCardList total={60} loadMoreBtn={false}/>
      <Pagination/>
    </Layout>
  );
}