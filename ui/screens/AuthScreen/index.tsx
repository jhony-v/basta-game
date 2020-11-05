import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import FormAuthButtons from "./FormAuthButtons";
import FormAuthInputs from "./FormAuthInputs";
import Title from "./Title";

const AuthScreen = () => {
  return (
    <DrawerWrapper>
      <ScrollView>
        <DividerContainer p="10px 20px">
          <Title />
          <FormAuthInputs/>
          <FormAuthButtons/>
        </DividerContainer>
      </ScrollView>
    </DrawerWrapper>
  );
};

export default AuthScreen;
