import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";

import Media from "./Media"
import Explanation from "./Explanation";
import Title from "./Title";
import styled from "styled-components";
import { BASE_URL, API_KEY } from './constants'


function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`${BASE_URL}${API_KEY}&date=2020-10-02`)
        .then((res) => {
          console.log(res.data);
          setApodData(res.data)
        })
        .catch((err) => {})
    }
    fetchPhoto();
  }, []);

  return (
    <BigContainer>
      <Title title={apodData.title} />
      <Media mediaType={apodData.media_type} url={apodData.url} />
      <Explanation explanation={apodData.explanation} />
    </BigContainer>
  );
}

export default App;

const BigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  border: dotted;
  margin: auto;
`
