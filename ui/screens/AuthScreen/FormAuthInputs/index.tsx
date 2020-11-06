import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../features/authentication";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import EditText from "../../../components/atoms/Inputs/EditText";

const FormAuthInputs = () => {
  const dispatch = useDispatch();

  const setUsername = ({name,value}:{name:string,value:string}) => {
    dispatch(authActions.setUserField({key:name,value}))
  }

  return (
    <DividerContainer>
      <DividerContainer pv="10px">
        <EditText onKeyUp={value=>setUsername(value)} name="username" placeholder="Hola, cual es tu nombre de usuario?" />
      </DividerContainer>
      <DividerContainer pv="10px">
        <EditText onKeyUp={value=>setUsername(value)} name="fullName" placeholder="Registra tu nombre completo" />
      </DividerContainer>
    </DividerContainer>
  );
};

export default FormAuthInputs;
