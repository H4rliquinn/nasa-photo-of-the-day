import React from "react";

function DateDrop(props) {
    let newDate=new Date();
    const days=[1,2,3,4,5]
    console.log("Props",props);
    return(
    <select className="dateDrop" id="dateDrop" onChange={(e)=>{props.cb(e.target.value)}}>
        <option value={props.date}>{props.date}</option>
        {days.map((item)=>{
            for (let x=0;x<days.length;x++){
                let showDate=newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+(newDate.getDate()-item)
                return <option key={showDate} value={showDate}>{showDate}</option>
            }
        })}

    </select>
    )
}

export default DateDrop;