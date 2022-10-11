import React from "react";
import withTheme from "../theme/withTheme";
import { InputVariant } from "./models";
import InputError from "./input-error";
import InputHelpText from "./input-help-text";

type Props = {
  theme: any;
  variant?: InputVariant;
  error?: string;
  label?: string;
  className?: string;
  children?: JSX.Element | string;
  helpText?: string;
};
const InputGroup: React.FC<Props> = ({
  theme,
  label,
  error = "",
  variant = InputVariant.FILLED,
  className = "",
  children = "",
  helpText = "",
}) => {
  const classes = [className];

  classes.push(theme.input[variant].label);
  return (
    <div className="">
      {label && <label className={classes.join(" ")}>{label}</label>}
      {children}
      {error && <InputError message={error} variant={variant} />}
      {helpText && <InputHelpText message={helpText} variant={variant} />}
    </div>
  );
};

export default withTheme(InputGroup);
