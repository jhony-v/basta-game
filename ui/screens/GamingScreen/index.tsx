import React from "react";
import { Button, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { gamingActions, gamingSelectors } from "../../../features/gaming";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";
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
  const isComplete = useSelector(gamingSelectors.isComplete) as boolean;
  
  return (
    <FlexWrapper>
      <KeyboardAvoidingView>
        <ProgressCompleteFields/>
        <ListEditTextWord/>
        <DividerContainer m="40px 10px">
        <Button onPress={()=>console.log("ok")} title="send" disabled={isComplete} />
        <Button onPress={()=>{
          dispatch(gamingActions.fillData({words:listWords}));
        }} title="Crear nueva sala"  />
        </DividerContainer>
      </KeyboardAvoidingView>
    </FlexWrapper>
  );
};

export default GamingScreen;
