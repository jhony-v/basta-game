import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import ListLettersWritingsByUser from "../../../components/organisms/ListLettersWritingsByUser";
import useGetLettersWithValue from "../../../hooks/useGetLettersWithValue";
import { GridColumnWrapper } from "./elements";

const ListLettersWithValue = () => {
  const { listUserWords, loading } = useGetLettersWithValue();

  if(loading) {
    return(
    <DividerContainer pv="150px">
      <ActivityIndicator color="white" size="large" />
    </DividerContainer>
    )
  }
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
