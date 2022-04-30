import React from "react";
import "./widget.scss";

const Widget = (prop)  => {
    return(
        <div className="widget" style={{backgroundColor: prop.color}} >
            <span className="title" >{prop.type}</span>
        </div>
    )
}

export default Widget