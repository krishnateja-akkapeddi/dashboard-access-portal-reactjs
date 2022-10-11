import React from "react";
import withTheme from "../theme/withTheme";
import { InputVariant } from "./models";

type Props = {
  theme: any;
  variant: InputVariant;
  message: string;
  className?: string;
};
const InputHelpText: React.FC<Props> = ({
  theme,
  message,
  variant = InputVariant.FILLED,
  className = "",
}) => {
  const classes = [className, theme.input[variant].helpText];
  return <span className={classes.join(" ")}>{message}</span>;
};

export default withTheme(InputHelpText);
