import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Word } from "../../../../features/gaming/gaming";
import { RootState } from "../../../../store";
import EditTextGaming from "./EditTextGaming";

const ListEditTextWord = () => {
  const words = useSelector<RootState>((state) => state.gaming.words) as Word[];
  return (
    <ScrollView>
      {words.map((props, i) => (
        <EditTextGaming key={i} word={props} />
      ))}
    </ScrollView>
  );
};

export default ListEditTextWord;
