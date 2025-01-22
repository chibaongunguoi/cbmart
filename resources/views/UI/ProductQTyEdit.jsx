import React from "react";
import "../../css/ProductQTyEdit.css"
export default function ProductQtyEdit({currentQty=1,max=1}){
return (
  <div className="product-qty-wrapper">
                <buttton className="qty-button">
                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="product-svg-qty"><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg>
                </buttton>
              
                <input class="product-qty-input" type="text" disabled="" role="spinbutton" aria-live="assertive" aria-valuenow="12" value="12"></input>
                <buttton className="qty-button">
                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="product-svg-qty icon-plus-sign"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg>
                </buttton>
              
              </div>
);
}