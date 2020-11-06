import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";

import Media from "./Media"
import Explanation from "./Explanation";
import Title from "./Title";
import styled from "styled-components";
import { BASE_URL, API_KEY } from './constants';
import DateInput from "./DateInput";


function App() {
  const [apodData, setApodData] = useState([]);
  const [date, setDate] = useState("2020-10-02");

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`${BASE_URL}${API_KEY}&date=${date}`)
        .then((res) => {
          console.log(res.data);
          setApodData(res.data)
        })
        .catch((err) => {})
    }
    fetchPhoto();
  }, [date]);

  const dateOnEnterKey = (evt) => {
        
    if (evt.keyCode === 13) {
        // debugger;
        evt.preventDefault();

      const { value } = evt.target;
      console.log(date);
      console.log(value);
      // const josh = {...com[(com.length - 1)], 
      //   id: (com[(com.length - 1)].id + 1),
      //   username: "Josh",
      //   text: value
      // };
        // setCom([...com, josh]);
        setDate(value);
    }else{
      setDate(date);
        // setCom(com);
        // console.log(com);
    }
  };
  // console.log(dateOnEnterKey);

  return (
    <BigContainer>
      <TitleStyle>
        <Title title={apodData.title} date={date} />
      </TitleStyle>
      <MediaStyle>
        <Media mediaType={apodData.media_type} url={apodData.url} />
      </MediaStyle>
      <TextStyle>
        <Explanation explanation={apodData.explanation} />
      </TextStyle>
      <DateInput dateOnEnterKey={dateOnEnterKey} />
    </BigContainer>
  );
}

export default App;

const BigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  // border: dotted;
  margin: auto;
`
const TitleStyle = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
const MediaStyle = styled.div`
  margin-bottom: 1%;
`

const TextStyle = styled.div`
  margin-top: 1%;
  margin-bottom: 1%;
`