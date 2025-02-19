import React from "react";
import Layout from "../Home/Layout/Layout";
import ShopInfo from "../../../views/UI/ShopInfo";
import ProductCardList from "../../../views/UI/ProductCardList";
import Pagination from "../../../views/UI/Pagination";
import AuthForm,{AuthTextInput} from "../../../views/UI/AuthForm";
import { asset, csrf } from "../../helper/helper";
export default function Home(){
  return (
 <Layout>
    <div className="shop-wrapper">
      <div className="shop-info-wrapper container">
      <AuthForm >
        <div className="shop-intro">
          <img src={asset('img/Home/Shop/shop_icon.png')} alt="" />
        </div>
        <div className="auth-title"> 
        Chào mừng bạn đến với kênh người bán!
        </div>
        <div className="shop-form-text"> 
          Xin hãy nhập tên thương hiệu của bạn để bắt đầu bán hàng trên CBSHOP.
        </div> 
        <form action="" className="email-verify-form" method="POST" >
              {csrf}
        <AuthTextInput name={"name"} title={"Tên thương hiệu"} />
        <button className="auth-button">
        Bắt đầu bán hàng
      </button>
      </form>
      </AuthForm>
      </div>
    </div>
  </Layout>);
}
 
