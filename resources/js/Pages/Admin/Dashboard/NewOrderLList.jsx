import React from "react";
export default function NewOrderList(){
    return (<div className="card">
        <div className="card-header font-weight-bold">ĐƠN HÀNG MỚI</div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mã</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá trị</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1212</td>
                <td>
                  Phan Văn Cương <br />
                  0988859692
                </td>
                <td>
                  <a href="#">Samsung Galaxy A51 (8GB/128GB)</a>
                </td>
                <td>1</td>
                <td>7.790.000₫</td>
                <td>
                  <span className="badge badge-warning">Đang xử lý</span>
                </td>
                <td>26:06:2020 14:00</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-success btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="fa fa-trash" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>1212</td>
                <td>
                  Tuấn Anh <br />
                  091236768
                </td>
                <td>
                  <a href="#">Apple MacBook Pro Touch 2020 i5 512GB</a>
                </td>
                <td>1</td>
                <td>47.990.000₫</td>
                <td>
                  <span className="badge badge-success">Hoàn thành</span>
                </td>
                <td>26:06:2020 14:00</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-success btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="fa fa-edit" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <i className="fa fa-trash" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination/>
        </div>
      </div>);
}
function Pagination(){
return (<nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">Trước</span>
          <span className="sr-only">Sau</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>)
}