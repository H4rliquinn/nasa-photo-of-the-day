import React,{useState,useEffect} from "react";
import axios from "axios";
import { OutputQuoteStyle } from "terser";

import "./App.css";
import ImageCard from "./ImageCard.js"
import HiRes from "./HiRes.js";

function App() {
  const [APOD,setAPOD]=useState({});
  const [hiRes,setHiRes]=useState(false);


  useEffect(() => {
        // Date parameter gets different Day: date:"2012-03-14"

      axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {api_key:"V2Gk5u80cbVTbC5iuSaDMZipq1U0Kt48dqN3fd2z"}
      })
      .then(res => {
        // console.log(res.data);
        setAPOD(res.data)
      })
      .catch((err)=>{
        console.log("AAAAHHHH!!!!",err);
      });


  }, []);

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

  const {date,explanation,hdurl,title,url} = APOD;
  let src=(hiRes)?hdurl:url;
  // console.log(APOD);
    return (


      <div className="App">
          <header>
            <img src="#" alt="Rocket ship"></img>
            <h1>Nasa's Photo of the Day explorer!</h1>
            <HiRes res={hiRes} cb={setHiRes} />
          </header>
          <section className="content">
          <ImageCard date={date} explanation={explanation} src={src} title={title} />

          </section>
      </div>
  );
}

export default App;
