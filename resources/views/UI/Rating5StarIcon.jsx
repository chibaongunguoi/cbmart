import React from "react";
import "../../css/Rating5StarIcon.css";
export default function Rating5StarIcon({ratingPoint=4,style={
  fontSize:"1rem"}}){
    function renderStar(){
      let StarList=[];
      for (let i=0;i<5;i++){
        if (ratingPoint>=1){
          StarList.push(<RatingStarIcon width={100} style={style}/>);
          ratingPoint-=1;
        }else{
            StarList.push(<RatingStarIcon width={ratingPoint*100} style={
              style
            }/>);
            while (i<4){
              StarList.push(<RatingStarIcon width={0} style={style}/>);
              i++;
            }
        }
      }
      return StarList;
    }
  return (<div className="card-product-rating-star">
    {renderStar()}               
  </div>);
  }
  function RatingStarIcon({width,style}){
    return (
      <div className="rating-star-wrapper" 
       style={style}
       >
                          <div className="rating-star-fill" 
                          style={{width:width+"%"}}
                          >
                              <svg 
                              // style={style} 
                              enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="rating-star-icon-fill"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                          </div>
                          <svg 
                          // style={style}
                          class="rating-star-icon-border-wrapper"
                           enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" >
                            <polygon class="rating-star-icon-border" fill="none"points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg>
                        </div>
    );
  }