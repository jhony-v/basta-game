import React from "react";
import { ScrollView } from "react-native";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import useGameAgain from "../../hooks/useGameAgain";
import HeaderPreviewLetter from "./HeaderPreviewLetter";
import ListLettersWithValue from "./ListLettersWithValue";

const GamingStatusScreen = () => {
  const { again } = useGameAgain();
  return (
    <DrawerWrapper>
      <ScrollView>
        <HeaderPreviewLetter />
        <ListLettersWithValue/>
        <DividerContainer p="20px">
          <BaseButton onPress={() => again()}>jugar otra vez</BaseButton>
        </DividerContainer>
      </ScrollView>
    </DrawerWrapper>
  );
};

export default GamingStatusScreen;
