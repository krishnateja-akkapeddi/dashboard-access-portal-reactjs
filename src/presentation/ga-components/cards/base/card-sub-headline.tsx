import React from "react";
import withTheme from "../../theme/withTheme";

type Props = {
  theme: any;
  children?: React.ReactNode;
  className?: string;
};
const CardSubHeadline: React.FC<Props> = ({
  theme,
  children,
  className = "",
}) => {
  const cssClass = [className, theme.card.subHeadline];
  return <div className={cssClass.join(" ")}>{children}</div>;
};

export default withTheme(CardSubHeadline);
