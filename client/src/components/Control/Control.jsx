import React from "react";
// import { makeStyles, Slider, withStyles, Button,  Tooltip,  Popover,Grid} from "@material-ui/core";
// import {
//  FastForward,
//  FastRewind,
//  Pause,
//  PlayArrow,
//  SkipNext,
//   VolumeUp,
// } from "@material-ui/icons";
import backward from '../../assets/backward.svg'
import forward from '../../assets/forward.svg'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import pen from '../../assets/pen-solid.svg'
import unmute from "../../assets/unmute.svg"
import muted from "../../assets/mute.svg"


import "./Control.css";

const Control = ({onPlayPause,playing,onForward,onRewind,muteHandler,mute}) => {

  return (
    <div className="control-container">
    <div className="mid-container">
    <div className="icon-btn backward">
     <img src={backward}  width="100px" height="100px" onDoubleClick={onRewind}/>
    </div>

   <div className="icon-btn play-pause" onClick={onPlayPause}>
   {playing ? (
    <img src={pause}  width="100px" height="100px"/>
         ) : (
    <img src={play} width="100px" height="100px"/>
         )}{" "}
   </div>

   <div className="icon-btn forward">
        <img src={forward}width="100px" height="100px" onDoubleClick={onForward}/>
    </div>
    </div>
    <div className="low-container" onClick={muteHandler}>
            {
                mute ? (<img src={unmute} className="icon-btn" width="25px"/>) : (<img src={muted} width="25px" className="icon-btn"/>)
            }
    </div>
    </div>
  )
}

export default Control
