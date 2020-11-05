import { useTheme } from "styled-components/native";
import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import BaseLabel from "../Labels/BaseLabel";

const EditTextInput = styled.TextInput`
  font-weight:bold;
  color:${props => props.theme.colors.vgBlack};
  box-shadow:none;
  font-size:18px;
`;

const EditTextWrapper = styled.View`
  border-radius: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  box-shadow:0 5px 10px rgba(0,0,0,.1);
`


const TextLabelSuptitle = styled(BaseLabel)`
  padding-bottom:10px;
  color:${props => props.theme.colors.vgBlackAlpha40};
`

type EditTextProps = React.ComponentProps<typeof TextInput> & {
  onKeyUp ?: ({value,name} : {value:string,name:string}) => void;
  name : string;
  suptitle ?: string;
  editable ?: boolean;
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
      {props.suptitle && (
      <TextLabelSuptitle>{props.suptitle}</TextLabelSuptitle>
      )}
      <EditTextInput {...props} ref={ref} placeholderTextColor={vgBlack} onChangeText={handlerOnKeyPress} />
    </EditTextWrapper>
  );
});

export default EditText;
