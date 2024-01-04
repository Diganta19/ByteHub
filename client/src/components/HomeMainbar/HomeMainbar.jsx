import React ,{useRef,useState}from 'react'
import {useLocation,Link, useNavigate} from "react-router-dom"
import QuestionList from './QuestionList';
import "./HomeMainbar.css"
import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
// import { Container } from "@mui/material";
import Control from '../Control/Control';
import { useEffect } from 'react';


const HomeMainbar = () => {
  const location = useLocation();
  const user = useSelector((state)=> state.currentUserReducer);
  const navigate = useNavigate();
  const questionsList = useSelector(state=>state.questionsReducer)

  
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
    played: 0,
    seeking: false,
  Buffer : true
  });
  const {playing, muted} = videoState;
  const playPauseHandler = () => {
    
      setVideoState({ ...videoState, playing: !videoState.playing });
  };
  const videoPlayerRef = useRef(null);

  const rewindHandler = () => {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 10);
    };
    const fastFowardHandler = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
      };
    const muteHandler = ()=>{
      setVideoState({...videoState, muted:!videoState.muted})
      console.log(videoState.muted);
    }
    const checkAuth = () =>{
      if(user === null){
        alert("Login or Signup to ask a question")
        navigate('/Auth')
      }else{
        navigate("/AskQuestions")
      }
    }

  return (
    <div className='main-bar'>
     { location.pathname==='/' ? <><div className="video-container">
       <div className="player-wrapper">
       <ReactPlayer
           ref={videoPlayerRef}
           className="player"
           url="https://www.youtube.com/shorts/2Xsk9X2PXUI"
           width="100%"
           height="100%"
           playing={playing}
           muted={muted}
         />
        <div className="control-wrapper">
          <Control onPlayPause={playPauseHandler} playing={playing} onRewind={rewindHandler} onForward ={fastFowardHandler} mute={muted} muteHandler={muteHandler}/>
        </div>
     </div> 
 </div>
 </> : <></>}
      <div className="main-bar-header">
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <button onClick={checkAuth}className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
           questionsList.data === null ?
    
          <h1>Loading....</h1> :
          <>
           <p>{questionsList.data.length} Questions</p>{ 
         
             <QuestionList questionsList={questionsList.data} />}
           
          </>
        
        }
      </div>
    </div>
  )
}

export default HomeMainbar
