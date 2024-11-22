import { APP_URL } from "../../../config/config";
import axios from "axios";
axios.defaults.headers.common['X-CSRF-TOKEN'] = $(
    'meta[name="csrf-token"]'
  ).attr('content');
 let csrfToken = $('meta[name="csrf-token"]').attr('content');  
 export let csrf=<input type="hidden" name="_token" value={csrfToken} />
export let route = (link)=>{
    return APP_URL+link;
};