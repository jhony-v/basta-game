import { useTheme } from "styled-components/native";
import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import BaseLabel from "../Labels/BaseLabel";
import { AntDesign } from "@expo/vector-icons"
import DividerContainer from "../Dividers/DividerContainer";

const EditTextInput = styled.TextInput`
  font-weight:bold;
  color:${props => props.theme.colors.vgBlack};
  box-shadow:none;
  font-size:18px;
`;

const EditTextWrapper = styled.View`
  border-radius: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  box-shadow:0 5px 10px rgba(0,0,0,.1);
  flex-direction:row;
  align-items:center;
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
  withIcon ?: boolean;
};

const EditText = forwardRef<TextInput,EditTextProps>((props,ref) => {
  const { colors : { vgBlack, vgPrimary } } = useTheme();
  const handlerOnKeyPress = (text: string) => {
      props.onKeyUp && props.onKeyUp({
          value : text,
          name : props.name
      });
  }
  return(
    <EditTextWrapper>
      {props.withIcon && (
        <AntDesign name="heart" size={20} color={vgPrimary} />
      )}
      <DividerContainer p="0 0 0 10px" w="100%">
        {props.suptitle && (
        <TextLabelSuptitle>{props.suptitle}</TextLabelSuptitle>
        )}
        <EditTextInput {...props} ref={ref} placeholderTextColor={vgBlack} onChangeText={handlerOnKeyPress} />
      </DividerContainer>
    </EditTextWrapper>
  );
});

export default EditText;
