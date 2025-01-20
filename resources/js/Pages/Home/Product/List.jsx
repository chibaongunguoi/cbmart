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
  return (
    <Layout>     
      <ProductCardList total={60} loadMoreBtn={false}/>
      <Pagination/>
    </Layout>
  );
}