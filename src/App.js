import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";

import ImageCard from "./ImageCard.js";
import HiRes from "./HiRes.js";
import DateDrop from "./DateDrop.js";

import rocket from "./img/rocket.jpg";
import rocket2 from "./img/rocket2.jpg";

function App() {
  const [APOD, setAPOD] = useState({});
  const [hiRes, setHiRes] = useState(false);
  const [showDate, setShowDate] = useState();
  const errState = useRef("");

  useEffect(() => {
    // Date parameter gets different Day: date:"2012-03-14"
    let dateParams = "";
    // console.log(showDate);
    if (showDate == undefined) {
      let newDate = new Date();
      var date =
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate();
    } else {
      date = showDate;
    }
    const api_key = process.env.REACT_APP_KEY;
    dateParams = {
      api_key: api_key,
      date: date
    };

    //Axios Data
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: dateParams
      })
      .then(res => {
        setAPOD(res.data);
        // console.log("DATA",APOD);
        // setShowDate(res.data.date);
      })
      .catch(err => {
        console.log("AAAAHHHH!!!!", err);
        errState.current = err;
      });
    // End Axios Data

    // Cached Data
    // const data = {
    //   date: "2019-08-14",
    //   explanation: "What's that next to the Moon? Saturn. In its monthly trip around the Earth -- and hence Earth's sky -- our Moon passed nearly in front of Sun-orbiting Saturn earlier this week. Actually the Moon passed directly in front of Saturn from the viewpoints of a wide swath of Earth's Southern Hemisphere. The featured image from Sydney, Australia captured the pair a few minutes before the eclipse. The image was a single shot lasting only 1/500th of a second, later processed to better highlight both the Moon and Saturn. Since Saturn is nearly opposite the Sun, it can be seen nearly the entire night, starting at sunset, toward the south and east. The gibbous Moon was also nearly opposite the Sun, and so also visible nearly the entire night -- it will be full tomorrow night. The Moon will occult Saturn again during every lap it makes around the Earth this year.",
    //   hdurl: "https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_1280.jpg",
    //   media_type: "image",
    //   service_version: "v1",
    //   title: "Saturn Behind the Moon",
    //   url: "https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_960.jpg"
    //   };
    // setAPOD(data)
    //End Cached Data
  }, [showDate]);
  // console.log("APOD",APOD);
  const { date, explanation, hdurl, title, url } = APOD;
  // console.log("Res?",hiRes,hdurl,url);
  let src = hiRes ? hdurl : url;

  // console.log("HiLo",src);
  function setShowDateHandle(val) {
    setShowDate(val);
    // console.log("SSD",val);
  }
  return (
    <div className="App">
      <div className="header">
        <img src={rocket} className="rocket" alt="Rocket ship-Left side" />
        <h1>
          NASA's
          <br />
          Photo of the Day
          <br />
          explorer!
        </h1>
        <img src={rocket2} className="rocket2" alt="Rocket ship-Right side" />
      </div>
      <div className="content">
        <section className="control">
          <DateDrop cb={setShowDateHandle} />
          <HiRes res={hiRes} cb={setHiRes} />
        </section>
        <section className="card">
          <ImageCard
            date={date}
            explanation={explanation}
            src={src}
            title={title}
            err={errState.current}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
