import React from "react";
export function SuccessOrder(){
return (
    <div className="col">
    <div
      className="card text-white bg-primary mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">ĐƠN HÀNG THÀNH CÔNG</div>
      <div className="card-body">
        <h5 className="card-title">2.680</h5>
        <p className="card-text">Đơn hàng giao dịch thành công</p>
      </div>
    </div>
  </div>);
}
export function ProcessOrder(){
    return (
        <div className="col">
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">ĐANG XỬ LÝ</div>
        <div className="card-body">
          <h5 className="card-title">10</h5>
          <p className="card-text">Số lượng đơn hàng đang xử lý</p>
        </div>
      </div>
    </div>);
    }
    export function Value(){
        return (
            <div className="col">
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">DOANH SỐ</div>
        <div className="card-body">
          <h5 className="card-title">2.5 tỷ</h5>
          <p className="card-text">Doanh số hệ thống</p>
        </div>
      </div>
    </div>);
        }
        export function CancelOrder(){
            return (
                <div className="col">
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">ĐƠN HÀNG HỦY</div>
        <div className="card-body">
          <h5 className="card-title">125</h5>
          <p className="card-text">Số đơn bị hủy trong hệ thống</p>
        </div>
      </div>
    </div>);
            }
export default function Overview(){
    return (<div className="row">
        <SuccessOrder />
        <ProcessOrder/>
        <Value/>
        <CancelOrder/>  
       </div>);
}