import React, { useEffect } from "react";
import { Button, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { gamingActions } from "../../../features/gaming";
import { RootState } from "../../../store";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import EditText from "../../components/atoms/Inputs/EditText";
import ProgressBar from "../../components/atoms/Status/ProgressBar";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";

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
  const words = useSelector<RootState>(state => state.gaming.words);
  const percentage = useSelector<RootState>(state => state.gaming.percentage) as number;
  useEffect(() => {
    dispatch(gamingActions.fillData({words:listWords}));
  },[]);

  useEffect(() => {
      dispatch(gamingActions.calculatePercentage({}))
  },[words]);

  return (
    <FlexWrapper>
      <KeyboardAvoidingView>
        <DividerContainer m="40px 10px">
                <ProgressBar percentage={percentage} />
        </DividerContainer>
        <ScrollView>
          {listWords.map((e, i) => (
            <DividerContainer key={i} m="40px 10px">
              <EditText placeholder={e.key} defaultValue={e.value}  name={e.key} onKeyUp={({name,value}) => {
                  dispatch(gamingActions.writeWord({
                      key:name,
                      value
                  }))
              }} />
            </DividerContainer>
          ))}
        </ScrollView>
        <DividerContainer m="40px 10px">
            <Button onPress={()=>console.log(words)} title="send" />
        </DividerContainer>
      </KeyboardAvoidingView>
    </FlexWrapper>
  );
};

export default GamingScreen;
