import { APP_URL } from "../../../config/config";
import axios from "axios";
axios.defaults.headers.common['X-CSRF-TOKEN'] = $(
    'meta[name="csrf-token"]'
  ).attr('content');
 let csrfToken = $('meta[name="csrf-token"]').attr('content');  
 export let csrf=<input type="hidden" name="_token" value={csrfToken} />
export let route = (link='')=>{
    return APP_URL+link;
};
export let routeWithFullURL = (link='')=>{
    return window.location.href+link;
};
export function changeAttr(attrValue){
    let url=new URL(window.location.href);
    for (let x in attrValue)
        url.searchParams.set(x,attrValue[x]);
    return url;    
}