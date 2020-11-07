import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { gamingSelectors } from '../../../../features/gaming'
import DividerContainer from '../../../components/atoms/Dividers/DividerContainer'
import BaseLabel from '../../../components/atoms/Labels/BaseLabel'
import DrawerWrapper from '../../../components/atoms/Wrappers/DrawerWrapper'
import LetterCard from '../../../components/molecules/LetterCard'
import useNavigate from '../../../hooks/useNavigate'
import useTimerCountDown from '../../../hooks/useTimerCountDown'

const CountDownToStart = () => {
    const { letter } = useSelector(gamingSelectors.gamingStatus);
    const { timer, running } = useTimerCountDown({from:3,autostart:true});
    const { navigate } = useNavigate();

    useEffect(() => {
        if(timer === 0) navigate("gaming");
    },[running]);

    return (
        <DrawerWrapper isCenter>
        <DividerContainer m="auto 0 0">
        <BaseLabel weight textSize="200px"  color="vgBlackAlpha00">{timer}</BaseLabel> 
        </DividerContainer>
        <DividerContainer m="50px 0 100px" style={{justifyContent:"center"}}>
           <DividerContainer pv="30px">
             <BaseLabel textAlign="center" textSize="16px" color="vgBlackAlpha00">La palabra es</BaseLabel>
           </DividerContainer>
           <LetterCard letter={letter} />
         </DividerContainer>
     </DrawerWrapper>
     )
}

export default CountDownToStart