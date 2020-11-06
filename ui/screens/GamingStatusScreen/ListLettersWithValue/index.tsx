import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { resultStatusGameActions } from "../../../../features/resultStatusGame";
import { firebaseServiceGetDataFromGame } from "../../../../services/FirebaseService";
import ListLettersWritingsByUser from "../../../components/organisms/ListLettersWritingsByUser";
import { GridColumnWrapper, GridWrapper } from "./elements";

const ListLettersWithValue = () => {
  const dispach = useDispatch();
  useEffect(() => {
    const subscriber = firebaseServiceGetDataFromGame("575477413374042041604622784035",(data) => {
        dispach(resultStatusGameActions.fillData({ data }));
      }
    );
    return () => subscriber();
  });

  return (
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
    </GridWrapper>
  );
};

export default ListLettersWithValue;
