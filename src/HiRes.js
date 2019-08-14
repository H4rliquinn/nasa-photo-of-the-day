import React from "react";

function HiRes(props) {
    console.log(props.res);
    return(
        <button className="hiresToggle" onClick={()=>{
            props.cb(!props.res)
        }}>Click for {props.res?"Low-Res":"Hi-Res"}!</button>
    )
}


export default HiRes;