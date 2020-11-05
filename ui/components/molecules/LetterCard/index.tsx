import React from "react";
import BaseCardSquare from "../../atoms/Cards/BaseCardSquare";
import BaseLabel from "../../atoms/Labels/BaseLabel";

type LetterCardProps = {
  letter: string;
  dimension ?: string;
};
const LetterCard = ({ letter, dimension }: LetterCardProps) => {
  return (
    <BaseCardSquare dimension={dimension || "120px"}>
      <BaseLabel weight color="vgSecondary" textSize="40px">{letter}</BaseLabel>
    </BaseCardSquare>
  );
};

export default LetterCard;
