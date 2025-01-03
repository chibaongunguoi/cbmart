import React from "react";
export function ActionList({action_list}){
    return (
        <div class="form-action form-inline py-3">
                  <select class="form-control mr-1" name='act' id="">
                        <option>Chọn</option>
                        { action_list!=null?     
                        Object.keys(action_list).map((key)=>{
        return (<option value={key} >{action_list[key]}</option>);
    }) :null}
                    </select>
                    <input type="submit" name="btn-search" value="Áp dụng" class="btn btn-primary"/>
                </div>  
        )
}