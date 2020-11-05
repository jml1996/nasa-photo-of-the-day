import React, { useState, useEffect } from 'react'

export default function Photo(props) {
    const { mediaType, url } = props;
    // console.log(url);

    return (
        <div>
            {
            mediaType === "image" ?
            <img src={url} alt="APOD" />
            : console.log("video")
            // <Youtube />
            }
        </div>
    )
}