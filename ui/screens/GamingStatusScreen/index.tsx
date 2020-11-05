import React from "react";
import { ScrollView } from "react-native";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";
import HeaderPreviewLetter from "./HeaderPreviewLetter";
import ListLettersWithValue from "./ListLettersWithValue";

const GamingStatusScreen = () => {
  return (
    <FlexWrapper>
      <ScrollView>
        <HeaderPreviewLetter/>
        <ListLettersWithValue/>
      </ScrollView>
    </FlexWrapper>
  );
};

export default GamingStatusScreen;
