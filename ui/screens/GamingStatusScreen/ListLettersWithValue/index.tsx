import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import { resultStatusGameActions, resultStatusGameSelectors } from "../../../../features/resultStatusGame";
import { firebaseServiceGetDataFromGame } from "../../../../services/FirebaseService";
import ListLettersWritingsByUser from "../../../components/organisms/ListLettersWritingsByUser";
import { GridColumnWrapper } from "./elements";

const ListLettersWithValue = () => {
  const dispach = useDispatch();
  const listUserWords = useSelector(resultStatusGameSelectors.getListUserWords);
  const gameId = useSelector(gamingSelectors.getGameId);
  useEffect(() => {
    const subscriber = firebaseServiceGetDataFromGame(gameId,(data) => {
        dispach(resultStatusGameActions.fillData({ data }));
      }
    );
    return () => subscriber();
  },[]);

  return (
    <ScrollView horizontal>
      {listUserWords.map(({user,words},i)=>(
      <GridColumnWrapper key={i}>
        <ListLettersWritingsByUser
          data={words}
          user={{
            ...user,
            avatar : user.avatar || "https://www.flaticon.com/svg/static/icons/svg/2922/2922468.svg"
          }}
        />
      </GridColumnWrapper>
      ))}
    </ScrollView>
  );
};

export default ListLettersWithValue;
