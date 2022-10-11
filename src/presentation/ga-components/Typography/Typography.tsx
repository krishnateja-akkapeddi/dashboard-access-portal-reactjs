import React from "react";
import { TypographyColor, TypographySize, TypographyVariant } from ".";
import withTheme from "../theme/withTheme";

type Props = {
  theme: any;
  size?: TypographySize;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
};
const Typography: React.FC<Props> = ({
  theme,
  size = TypographySize.SM,
  color = TypographyColor.TEXT_COLOR,
  children = "",
  className = "",
}) => {
  const cssClass = [
    theme.typography.variants.display[size],
    theme.typography.colors[color],
    className,
  ]
    .join(" ")
    .trim();

  return <p className={cssClass}>{children}</p>;
};

export default withTheme(Typography);
