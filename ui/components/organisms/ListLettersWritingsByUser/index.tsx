import React from "react";
import { FlatList } from "react-native";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import EditText from "../../atoms/Inputs/EditText";
import AccountWithAvatarGrapes from "../../molecules/AccountWithAvatarGrapes";

type ListLettersWritingsByUserProps = {
  data: {
    key: string;
    value: string;
  }[];
  user?: {
    avatar?: string;
    username?: string;
  };
};
const ListLettersWritingsByUser = (props: ListLettersWritingsByUserProps) => {
  return (
    <FlatList
      data={props.data}
      ListHeaderComponent={<AccountWithAvatarGrapes {...props.user} />}
      renderItem={({ item: { key, value } }) => (
        <DividerContainer pv="10px">
          <EditText name="" placeholder={key}  suptitle={key} value={value} editable={false} />
        </DividerContainer>
      )}
    />
  );
};

export default ListLettersWritingsByUser;
