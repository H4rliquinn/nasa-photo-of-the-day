import React from "react";

function ImageCard(props) {
    const {title,date,explanation,src}=props;
    // console.log("Image Err",props);
    if (props.err.Error) return "Error: "+props.err.Error;
    if (!props.src) return <h3>Loading...</h3>;


    return(
    <div className="imageCard">
        <div className="cardHeader">
            <h1>{title}</h1>
            <h2>{date}</h2>
        </div>
        <div className="cardImage">
            <img src={src} alt="NASA Dayly"/>
        </div>
        <div className="explanation">
            <p>{explanation}</p>
        </div>

    </div>
    )
}


export default ImageCard;