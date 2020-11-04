import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const EditTextInput = styled.TextInput`
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha20};
`;

type EditTextProps = React.ComponentProps<typeof TextInput>;
const EditText = (props: EditTextProps) => {
  return <EditTextInput {...props} />;
};

export default EditText;
