import React from "react";
import { ScrollView } from "react-native";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import useGameAgain from "../../hooks/useGameAgain";
import useGameMessages from "../../hooks/useGameMessages";
import HeaderPreviewLetter from "./HeaderPreviewLetter";
import ListLettersWithValue from "./ListLettersWithValue";
import MessageNotifications from "./MessageNotifications";
import RoomChat from "./RoomChat";

const GamingStatusScreen = () => {
  const { again } = useGameAgain();
  useGameMessages();  
  
  return (
    <DrawerWrapper>
      <ScrollView>
        <HeaderPreviewLetter />
        <ListLettersWithValue/>
        <DividerContainer p="20px">
          <BaseButton onPress={() => again()}>jugar otra vez</BaseButton>
        </DividerContainer>
      </ScrollView>
      <MessageNotifications/>
      <RoomChat />
    </DrawerWrapper>
  );
};

export default GamingStatusScreen;
