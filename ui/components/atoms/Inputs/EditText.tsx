import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const EditTextInput = styled.TextInput`
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha20};
`;

type EditTextProps = React.ComponentProps<typeof TextInput> & {
  onKeyUp ?: ({value,name} : {value:string,name:string}) => void;
  name : string;
};

const EditText = forwardRef<TextInput,EditTextProps>((props,ref) => {
  const handlerOnKeyPress = (text: string) => {
      props.onKeyUp && props.onKeyUp({
          value : text,
          name : props.name
      });
  }
  return <EditTextInput {...props} ref={ref} onChangeText={handlerOnKeyPress} />;
});

export default EditText;
