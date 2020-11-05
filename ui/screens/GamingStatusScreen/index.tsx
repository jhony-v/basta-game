import React from "react";
import { ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import EditText from "../../components/atoms/Inputs/EditText";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import ListLettersWritingsByUser from "../../components/organisms/ListLettersWritingsByUser";
import HeaderPreviewLetter from "./HeaderPreviewLetter";
import {
  GridColumnWrapper,
  GridWrapper,
} from "./ListLettersWithValue/elements";

const GamingStatusScreen = () => {
  return (
    <DrawerWrapper>
      <ScrollView>
        <HeaderPreviewLetter />
        <GridWrapper>
          <GridColumnWrapper>
            <ListLettersWritingsByUser
              data={[]}
              user={{
                avatar: "",
                username: "Jhony vega",
              }}
            />
          </GridColumnWrapper>
          <GridColumnWrapper>
            <ListLettersWritingsByUser
              data={[]}
              user={{
                avatar: "",
                username: "Jhony vega",
              }}
            />
          </GridColumnWrapper>
        </GridWrapper>
      </ScrollView>
    </DrawerWrapper>
  );
};

export default GamingStatusScreen;
