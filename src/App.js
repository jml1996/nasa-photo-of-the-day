import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";

import Media from "./Media"
import Explanation from "./Explanation";
import Title from "./Title";

function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=ltBWr9lWRC3A2m6I2h1FE9eHwjy0ErNe22WGa27D&date=2020-10-01`)
        .then((res) => {
          console.log(res.data);
          setApodData(res.data)
        })
        .catch((err) => {})
    }
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <Title title={apodData.title} />
      <Media mediaType={apodData.media_type} url={apodData.url} />
      <Explanation explanation={apodData.explanation} />
    </div>
  );
}

export default App;
