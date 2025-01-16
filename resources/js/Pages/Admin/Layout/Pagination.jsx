import React from "react";
import { route,routeWithFullURL,changeAttr } from "../../../helper/helper";
import { useState } from "react";
export default function Pagination({pageTotal,currentPage,record_show_per_page}){
  let delta=1;
    return (<nav aria-label="Page navigation example">
        <ul className="pagination" >
          <li className="page-item" >
            <a className={"page-link "+(currentPage==1?"disabled":'')} href={changeAttr({'page':currentPage-1})} aria-label="Previous">
              <span aria-hidden="true">Trước</span>
              {/* <span className="sr-only">Sau</span> */}
            </a>
          </li>
         {pagination(pageTotal,delta,currentPage)}
          <li className="page-item" >
            <a className={"page-link "+(currentPage==pageTotal?"disabled":'')} href={changeAttr({'page':currentPage+1})} aria-label="Next">
              <span aria-hidden="true">Sau</span>
              {/* <span className="sr-only">Next</span> */}
            </a>
          </li>
        </ul>
      </nav>)
    }
function pagination(pageTotal,delta,currentPage){
let a=[];
let pos=1;
let truncateLeft=currentPage-delta;
let truncateRight=currentPage+delta;
let range=2*delta +1;
while (pos<=pageTotal){
  // active = pos == curPage ? 'active' : '';
  if ( (pos==1||pos==pageTotal)) {
    a.push(<li className="page-item">
      <a className={'page-link '+(pos==currentPage?"active":'')} href={changeAttr({'page':pos})}>
        {pos}
      </a>
    </li>)
  }
  else if (truncateRight>pageTotal-3 && pos>pageTotal-range-2){
    if (pos>2)
    a.push(<li className="page-item">
      {pos==3? <a className="page-link  " href={changeAttr({'page':pos})}>
      {pos-1}
      </a> :<div className="page-link">. . .</div> }
    </li>)
    while (pos>pageTotal-range-2 && pos<pageTotal)
      a.push(<li className="page-item">
        <a className={'page-link '+(pos==currentPage?"active":'')} href={changeAttr({'page':pos})}>
          {pos++}
        </a>
      </li>)
      pos--;
  }else if (truncateLeft<3 && pos<range+2){
    while (pos<=range+2 && pos<pageTotal)
    a.push(<li className="page-item">
      <a className={"page-link "+(pos==currentPage?" active":'')} href={changeAttr({'page':pos})}>
        {pos++}
      </a>
    </li>)
    if (pos<pageTotal)
      a.push(<li className="page-item">
        {pos==pageTotal-1? <a className="page-link " href={changeAttr({'page':pos})}>
        {pos++}
        </a> :<div className="page-link">. . .</div> }
      </li>)
    pos--;
  } else if (pos>=truncateLeft &&pos<=truncateRight){
    if (pos==truncateLeft){
      a.push(<li className="page-item"><div className="page-link">. . .</div></li>)
    }
    a.push(<li className="page-item">
      <a className={"page-link "+(pos==currentPage?" active":'')} href={changeAttr({'page':pos})}>
        {pos}
      </a>
    </li>)
     if (pos==truncateRight){
      a.push(<li className="page-item"><div className="page-link">. . .</div></li>)
    }
  }
  pos++;  
}
return a;
}
