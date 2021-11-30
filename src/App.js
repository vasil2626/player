import { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import "./App.css";

function App() {

//https://www.youtube.com/watch?v=n8dvAcf2c98//


  const playerRef = useRef(null)

  const progressRef = useRef(null)




  const play = ( ) =>{
    playerRef.current.play()
  }

  const pause = () =>{
    playerRef.current.pause()
  }

  const stop = () =>{
    playerRef.current.pause()
    playerRef.current.currentTime = 0
  }

  const videoRevived = (e) =>{
    console.log(playerRef.current.offsetX,"event");
    const width = progressRef.current.offsetWidth
    console.log(width);
  }


  useEffect(() =>{
    console.log(playerRef)
    console.log(progressRef);
    playerRef.current.addEventListener('timeupdate', (event) => {
      console.log('The currentTime attribute has been updated. Again.', playerRef.current.currentTime);
      // setProgress(playerRef.current.duration / playerRef.current.currentTime * 100)
      progressRef.current.value = (100 *  playerRef.current.currentTime) / playerRef.current.duration
   });

  })

  return (
    <div className="App">
      <ReactHlsPlayer
      playerRef={playerRef}
      id="player"
        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />

      <div className="bar-container">
        <progress 
        onClick={videoRevived}
        ref={progressRef} 
        id="progress" 
        max="100" value="0" 
        style={{width: "80%", margin:"0 auto"}}>
          progress
        </progress>
      </div>

        <button 
        id="play"
        onClick={play}
        >
          play
        </button>
        <button 
        id="pause"
        onClick={pause}
        >pause
        </button>
        <button 
        id="stop"
        onClick={stop}
        >
          stop
          </button>
    </div>
  );
}

export default App;
