import React from "react";
import { route } from "../../../helper/helper";
export default function SearchBar({searchWord,pageName}){
    
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
    const url = new URL(form.action, window.location.origin);
    // Thêm giá trị từ các input form vào URL
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      url.searchParams.set(key, value);
    }
    if (pageName=='user'){
        url.searchParams.set("page", 1);
        if (!url.searchParams.has('type'))
            url.searchParams.set("type", "active");
    }
    window.location.href = url.toString();
    }
    return (
        <form
            //  action={route("admin/"+pageName+"/list")} 
            onSubmit={handleSubmit}
            method="GET" class='row row-cols-lg-auto g-3 align-items-center'>
                <div class="col-12">
                    <input type="text" class="form-control" name='q'  placeholder="Tìm kiếm" defaultValue={searchWord}/>
                </div>
                <div class="col-12">
                    <input type="submit" name="" value="Tìm kiếm" class="btn btn-primary btn-search col-12"/>
                </div>
            </form>
    );
}