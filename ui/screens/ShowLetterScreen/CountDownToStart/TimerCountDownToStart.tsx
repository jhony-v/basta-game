import React, { useEffect } from 'react'
import BaseLabel from '../../../components/atoms/Labels/BaseLabel';
import useNavigate from '../../../hooks/useNavigate'
import useTimerCountDown from '../../../hooks/useTimerCountDown'

const TimerCountDownToStart = () => {
    const { timer, running } = useTimerCountDown({from:3,autostart:true});
    const { navigate } = useNavigate();
    
    useEffect(() => {
        if(timer === 0) navigate("gaming");
    },[running]);
    return  <BaseLabel weight textSize="200px"  color="vgBlackAlpha00">{timer}</BaseLabel> 
}

export default TimerCountDownToStart
