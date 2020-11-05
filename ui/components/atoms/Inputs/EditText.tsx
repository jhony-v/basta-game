import { useTheme } from "styled-components/native";
import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const EditTextInput = styled.TextInput`
  font-weight:bold;
  color:${props => props.theme.colors.vgBlack};
  box-shadow:none;
`;
const EditTextWrapper = styled.View`
  border-radius: 20px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  box-shadow:0 5px 10px rgba(0,0,0,.1);
`

type EditTextProps = React.ComponentProps<typeof TextInput> & {
  onKeyUp ?: ({value,name} : {value:string,name:string}) => void;
  name : string;
};

const EditText = forwardRef<TextInput,EditTextProps>((props,ref) => {
  const { colors : { vgBlack } } = useTheme();
  const handlerOnKeyPress = (text: string) => {
      props.onKeyUp && props.onKeyUp({
          value : text,
          name : props.name
      });
  }
  return(
    <EditTextWrapper>
      <EditTextInput {...props} ref={ref} placeholderTextColor={vgBlack} onChangeText={handlerOnKeyPress} />
    </EditTextWrapper>
  );
});

export default EditText;
