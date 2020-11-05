import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";
import FormAuthButtons from "./FormAuthButtons";
import FormAuthInputs from "./FormAuthInputs";
import Title from "./Title";

const AuthScreen = () => {
  return (
    <FlexWrapper>
      <ScrollView>
        <DividerContainer p="10px 20px">
          <Title />
          <FormAuthInputs/>
          <FormAuthButtons/>
        </DividerContainer>
      </ScrollView>
    </FlexWrapper>
  );
};

export default AuthScreen;
