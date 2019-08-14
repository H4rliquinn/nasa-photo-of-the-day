import React from "react";

function HiRes(props) {
    return(
        <button className="hiresToggle" onClick={()=>{
            props.cb(!props.res)
        }}>Click for {props.res?"Low-Res":"Hi-Res"}!</button>
    )
}


export default HiRes;