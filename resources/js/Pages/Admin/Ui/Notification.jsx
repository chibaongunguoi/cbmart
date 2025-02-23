import React from "react";
export default function Notification({children}){
    return (
        <div class="alert alert-success">
            <div className="title">
                {children}
            </div>
        </div>
    );
}