import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";

function App() {

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=ltBWr9lWRC3A2m6I2h1FE9eHwjy0ErNe22WGa27D`)
        .then((res) => console.log(res.data))
        .catch((err) => debugger);
    }
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
