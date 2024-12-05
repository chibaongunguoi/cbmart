import React from "react";
import { useState } from "react";
import { route } from "../../../helper/helper";
export default function SearchBar({searchWord,pageName}){
      function handleChange(e) {
        setSearchValue(e.target.value);
      }
    return (
        <form
             action={route("admin/"+pageName+"/list")} 
            method="GET" class='row row-cols-lg-auto g-3 align-items-center'>
                <div class="col-12">
                    <input type="text" class="form-control" name='searchWord' onChange={handleChange} placeholder="Tìm kiếm" defaultValue={searchWord}/>
                </div>
                <div class="col-12">
                    <input type="submit" name="" value="Tìm kiếm" class="btn btn-primary btn-search col-12"/>
                </div>
            </form>
    );
}