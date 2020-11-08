import React, { useEffect } from 'react'
import useSendWordsToGame from "../../../hooks/useSendWordsToGame";
import useTimerCountDown from "../../../hooks/useTimerCountDown";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";

const TimerGaming = () => {
    const { sendAndNavigate } = useSendWordsToGame();
    const { timer,running } = useTimerCountDown({from:20,autostart:true});
    useEffect(() => {
        if(timer === 0) {
          sendAndNavigate()
        }
      },[running])
    
    return <BaseLabel weight textSize="13px" color="vgBlackAlpha00">Queda {timer} seconds</BaseLabel>
}

export default TimerGaming
