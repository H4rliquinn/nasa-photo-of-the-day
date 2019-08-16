import React from "react";
import { Select } from "semantic-ui-react";

let newDate=new Date();
function dot(){
   
    let retVal=[];
    // console.log("Props",props);
    for (let x=0;x<6;x++){
        let showDate=newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+(newDate.getDate()-x)
        retVal.push({"key":showDate, "value":showDate,"text":showDate});
    }
    return retVal;
}
const dateOptions=dot();
// console.log(dateOptions);

const DateDrop=(props)=>(
    <Select placeholder={newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+newDate.getDate()} className="dateDrop" id="dateDrop" onChange={(e,data)=>{props.cb(data.value)}} options={dateOptions} />
)
export default DateDrop;

// function DateDrop(props) {
// let newDate=new Date();
// const days=[1,2,3,4,5]
// console.log("Props",props);
// return(
// <select className="dateDrop" id="dateDrop" onChange={(e)=>{props.cb(e.target.value)}}>
//     <option value={props.date}>{props.date}</option>
//     {days.map((item)=>{
//         for (let x=0;x<days.length;x++){
//             let showDate=newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+(newDate.getDate()-item)
//             return <option key={showDate} value={showDate}>{showDate}</option>
//         }
//     })}

// </select>
// }