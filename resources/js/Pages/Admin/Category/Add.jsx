import React from "react";
import Layout from "../Layout/Layout";
import { route,csrf } from "../../../helper/helper";
import {router, usePage } from "@inertiajs/react";
import { useState,useEffect } from "react";
import PopUp from "../../../../views/UI/CategoryPopup";
import Notification from "../Ui/Notification";
export default function Home({categories,status}){
   
  return (
 <Layout>
    <div id="content" class="container-fluid">
    <div class="row">
    {status?<Notification>{status}</Notification>:""}
  <CategoryAdd categories={categories}/>
  <CategoryList categories={categories} />
  </div>
    </div>
  </Layout>);
}
function CategoryAdd({categories}){
    const { errors } = usePage().props;
    const [showPopup, setShowPopup] = useState(false);
    const [bc, setBc] = useState('a');
    const togglePopUp = () => {
      setShowPopup(!showPopup);
    };
    let [form ,setForm]=useState({
        'name':"",
        'parent_id':"",
    })
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin/category/store"), form);
      }
    return(
        <>
        <div className="col-4">       
                <div class="card">
                    <div class="card-header font-weight-bold">
                        Thêm Danh Mục
                    </div>
                    <div class="card-body">
                        <form onSubmit={handleSubmit} onChange={handleChange} method='POST'>
                            <div class="form-group">
                                <label for="name">Tên danh mục</label>
                                <input class="form-control" type="text" name="name"  />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="form-group App">
                                <label for="slug">Danh mục cha</label>
                                <button className="form-control cat-btn" onClick={togglePopUp}>{bc}</button>
                                <PopUp setBc={setBc} handleClose={togglePopUp} show={showPopup} categories={categories} />
                            </div>
                            <button type="submit" class="btn btn-primary" name='btn_add' value="add">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>
</>
       );
}

function CategoryList({categories=[]}){
    let t=1;
return (<div class="col-8">
    <div class="card">
        <div class="card-header font-weight-bold">
            Danh sách danh mục
        </div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoryTree categories={categories}/>
                </tbody>
            </table>
        </div>
    </div>
</div>);
}
function CategoryRecord({cat,level}){
    let s="";
    if (level!=0){
        s='----';
        s="|"+s.repeat(level)+" ";
    }
 return (<tr>
    <td scope="row">{cat.id}</td> {/* Fix: Display cat.id instead of entire cat object */}
    <td>{s}{cat.name}</td>
    <td>
        <a href={route("admin/category/edit?id=" + cat.id)} className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit">
            <i className="fa fa-edit"></i>
        </a>
        <a href={route("admin/category/delete?id=" + cat.id)} onClick={() => confirm('Bạn có chắc chắn xóa danh mục này?')} className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete">
            <i className="fa fa-trash"></i>
        </a>
    </td>
</tr>)
}

function CategoryTree({ categories }) {
    let b=[];
    function catLoop(id,k){
        let catList = categories.filter(cat => cat.parent_id == id);
        if (catList.length>0){
            catList.map((cat)=>{
                b.push(<CategoryRecord cat={cat} level={k}/>);
                if (haveCatChild(cat.id)){
                    catLoop(cat.id,k+1);
                }
        });
        }
    }
    function haveCatChild(id){
        return categories.filter(cat=>cat.parent_id==id).length>0?true:false;
    };
    catLoop(null,0);
    return <>{b}</>;
}