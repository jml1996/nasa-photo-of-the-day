import React, { useState, useEffect } from 'react';
import Youtube from "./Youtube";
import styled, { keyframes } from "styled-components";

export default function Photo(props) {
    const { mediaType, url } = props;
    // console.log(url);

    // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    // function youtube_parser(url){
    //     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    //     var match = url.match(regExp);
    //     return (match&&match[7].length==11)? match[7] : false;
    // }

    // const parsedUrl = youtube_parser(url);
    // console.log(parsedUrl);
    console.log(url);

    return (
        <div>
            {
            mediaType === "image" ?
            <img src={url} alt="APOD" width="100%" />
            : null
            // : <Youtube url={url} />
            }
        </div>
    )
}