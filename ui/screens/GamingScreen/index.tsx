import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import listWords from "../../../config/listWords";
import { gamingActions } from "../../../features/gaming";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import HeaderPreviewStatus from "./HeaderPreviewStatus";
import ListEditTextWord from "./ListEditTextWord";
import ProgressCompleteFields from "./ProgressCompleteFields";

const GamingScreen = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(gamingActions.fillData({words:listWords}));
  },[])

  return (
    <DrawerWrapper>
      <DividerContainer flex={1}>
          <HeaderPreviewStatus/>
        <ScrollView>
          <ListEditTextWord/>
        </ScrollView>
      </DividerContainer>
      <ProgressCompleteFields/>
    </DrawerWrapper>
  );
};

export default GamingScreen;
