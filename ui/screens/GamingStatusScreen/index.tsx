import React from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { gamingActions } from "../../../features/gaming";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import useNavigate from "../../hooks/useNavigate";
import HeaderPreviewLetter from "./HeaderPreviewLetter";
import ListLettersWithValue from "./ListLettersWithValue";

const GamingStatusScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigate()
  return (
    <DrawerWrapper>
      <ScrollView>
        <HeaderPreviewLetter />
        <ListLettersWithValue/>
        <DividerContainer p="20px">
          <BaseButton onPress={() => {
              dispatch(gamingActions.reset());
              navigate("createNewGame");
          }}>jugar otra vez</BaseButton>
        </DividerContainer>
      </ScrollView>
    </DrawerWrapper>
  );
};

export default GamingStatusScreen;
