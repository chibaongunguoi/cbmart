import React from "react";
import "../../css/ShopSection.css"
export default function ShopSection({title,children}){
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