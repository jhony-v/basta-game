import React, { useEffect, useState } from "react";
import { firebaseServiceGetStatusGame } from "../../../services/FirebaseService";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../components/atoms/Labels/BaseLabel";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import LetterCard from "../../components/molecules/LetterCard";

const ShowLetterScreen = () => {


  React.useEffect(() => {
    const subcriber = firebaseServiceGetStatusGame("575477413374042041604622784035")
    return () => { 
      subcriber() 
    } 
  },[])
  return (
    <DrawerWrapper isCenter>
       <DividerContainer m="auto 0 0">
       <BaseLabel weight textSize="200px"  color="vgBlackAlpha00">10</BaseLabel> 
       </DividerContainer>
       <DividerContainer m="50px 0 100px" style={{justifyContent:"center"}}>
          <DividerContainer pv="30px">
            <BaseLabel textAlign="center" textSize="16px" color="vgBlackAlpha00">La palabra es</BaseLabel>
          </DividerContainer>
          <LetterCard letter="A" />
        </DividerContainer>
    </DrawerWrapper>
  );
};

export default ShowLetterScreen;
