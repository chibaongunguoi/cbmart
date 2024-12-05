import React from "react";
export default function Notification({children}){
    return (
        <div class="alert alert-success">{children}</div>
    );
}