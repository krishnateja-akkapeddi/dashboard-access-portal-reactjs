import React, { useState } from "react";
import withTheme from "../theme/withTheme";
import CardColor from "./card-color";

type Props = {
  theme: any;
  color: CardColor;
  children?: React.ReactNode;
  className?: string;
};
const Card: React.FC<Props> = ({ theme, color, children, className }) => {
  const cssClass = [theme.bg[color], theme.card.base, className];
  return <div className={cssClass.join(" ")}>{children}</div>;
};

export default withTheme(Card);
