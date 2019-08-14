import React from "react";

function DateDrop(props) {
    let newDate=new Date();
    const days=[1,2,3,4,5]
    // let showDate=`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`
    // console.log(showDate);


    return(
    <select className="dateDrop" id="dateDrop" onChange={props.cb(props.date)}>
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

// option value={newDate.getFullYear()-newDate.getMonth()+1-newDate.getDate()-i>newDate.getFullYear()-newDate.getMonth()+1-newDate.getDate()-i</option>

export default DateDrop;