import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Yotube(props) {
    const { url } = props;
    const [youtubeData, setYouTubeData] = useState([]);
    console.log(url);
    useEffect(() => {
      const fetchYt = () => {
        axios
          .axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              maxResults: 5,
              type: "any",
              key: "AIzaSyDJi9nL1YjgK_7RF3lx89d_bOA2gvqVDic",
            },
          })
          .then((res) => {
            console.log(res.data);
            setYouTubeData(res.data)
          })
          .catch((err) => {})
      }
      fetchYt();
    }, []);
        // var tag = document.createElement('script');

        // tag.src = "https://www.youtube.com/iframe_api";
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // // 3. This function creates an <iframe> (and YouTube player)
        // //    after the API code downloads.
        // var player;
        // function onYouTubeIframeAPIReady() {
        //     player = new YT.Player('player', {
        //     height: '390',
        //     width: '640',
        //     videoId: 'M7lc1UVf-VE',
        //     events: {
        //         'onReady': onPlayerReady,
        //         'onStateChange': onPlayerStateChange
        //     }
        //     });
        // }

        // // 4. The API will call this function when the video player is ready.
        // function onPlayerReady(event) {
        //     event.target.playVideo();
        // }

        // // 5. The API calls this function when the player's state changes.
        // //    The function indicates that when playing a video (state=1),
        // //    the player should play for six seconds and then stop.
        // var done = false;
        // function onPlayerStateChange(event) {
        //     if (event.data == YT.PlayerState.PLAYING && !done) {
        //     setTimeout(stopVideo, 6000);
        //     done = true;
        //     }
        // }
        // function stopVideo() {
        //     player.stopVideo();
        // }
        // }
        
    return(
    <div id="player">

        {/* // 2. This code loads the IFrame Player API code asynchronously. */}
    </div>
    )
}