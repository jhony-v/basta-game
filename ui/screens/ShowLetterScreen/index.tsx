import React from "react";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../components/atoms/Labels/BaseLabel";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";
import LetterCard from "../../components/molecules/LetterCard";

const ShowLetterScreen = () => {
  return (
    <FlexWrapper isCenter>
       <DividerContainer m="30px 0 auto">
           <BaseLabel weight textSize="14em" color="vgBlackAlpha00">3</BaseLabel> 
       </DividerContainer>
       <DividerContainer m="50px 0 100px">
           <DividerContainer pv="30px">
            <BaseLabel color="vgBlackAlpha00">La palabra es</BaseLabel>
           </DividerContainer>
           <LetterCard letter="A" />
        </DividerContainer>
    </FlexWrapper>
  );
};

export default ShowLetterScreen;
