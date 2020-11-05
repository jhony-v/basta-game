import React, { MutableRefObject, useRef, useState } from "react";
import { Button, TextInput } from "react-native";
import EditText from "../../components/atoms/Inputs/EditText";
import FlexWrapper from "../../components/atoms/Wrappers/FlexWrapper";
import useAuthentication from "../../hooks/useAuthentication";
import usePersistStorageAuth from "../../hooks/usePersistStorageAuth";

const AuthScreen = () => {
  useAuthentication();
  const { setPersist } = usePersistStorageAuth();
  const [ username , setUsername ] = useState("");

  const onPress = () => {
    setPersist({
       isAuth : true,
       user : {
        username
      }
    })
  }

  return (
    <FlexWrapper>
      <EditText onKeyUp={e => setUsername(e.value)} name="username" placeholder="Hola, puedes ingresar un nombre" />
      <Button onPress={onPress} title="registrarme" />
    </FlexWrapper>
  );
};

export default AuthScreen;
