import React from "react";
import styled from "styled-components";


const SButton = styled.button`
    background-color:blue;
    color:white;
    width 150px;
    height:50px;
    line-height:50px;
    margin:20px 15px;
`


function HiRes(props) {

    return(
        <SButton className="hiresToggle" onClick={()=>{
            props.cb(!props.res)
        }}>Click for {props.res?"Low-Res":"Hi-Res"}!</SButton>
    )
}

export default HiRes;