import React from "react";
import withTheme from "../../theme/withTheme";

type Props = {
  theme: any;
  children?: React.ReactNode;
  className?: string;
};
const CardSupportingText: React.FC<Props> = ({
  theme,
  children,
  className = "",
}) => {
  const cssClass = [theme.card.supportingText, className];
  return <div className={cssClass.join(" ")}>{children}</div>;
};

export default withTheme(CardSupportingText);
