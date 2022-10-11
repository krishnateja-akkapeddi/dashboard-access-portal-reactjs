import React from "react";
import withTheme from "../../theme/withTheme";
import CardColor from "../card-color";

type Props = {
  theme: any;
  children?: React.ReactNode;
  className?: string;
  color?: CardColor;
};
const CardHeadline: React.FC<Props> = ({
  theme,
  children,
  color = CardColor.WHITE,
  className = "",
}) => {
  const cssClass = [theme.card.headline, theme.bg[color], className];
  return <div className={cssClass.join(" ")}>{children}</div>;
};

export default withTheme(CardHeadline);
