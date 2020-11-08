import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { gamingActions } from "../../../features/gaming";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import HeaderPreviewStatus from "./HeaderPreviewStatus";
import ListEditTextWord from "./ListEditTextWord";
import ProgressCompleteFields from "./ProgressCompleteFields";

const listWords = [
  {
    key: "animal",
    value: "",
  },
  {
    key: "cosa",
    value: "",
  },
  {
    key: "comida",
    value: "",
  },
  {
    key: "acción",
    value: "",
  },
  {
    key: "lugar",
    value: "",
  },
  {
    key: "color",
    value: "",
  },
];

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
