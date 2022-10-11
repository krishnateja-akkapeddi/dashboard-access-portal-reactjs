import React, { ChangeEventHandler } from "react";
import withTheme from "../theme/withTheme";
import { InputVariant } from "./models";
import InputGroup from "./input-group";

export type Props = {
  theme: any;
  value?: string | number;
  onChange: ChangeEventHandler;
  variant?: InputVariant;
  error?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  helpText?: string;
  readOnly?: boolean;
  type?: "text" | "number" | "password";
};
const InputField: React.FC<Props> = ({
  theme,
  value,
  onChange,
  label,
  error = "",
  variant = InputVariant.FILLED,
  placeholder = "",
  className = "",
  helpText = "",
  readOnly = false,
  type = "text",
}) => {
  const classes = [className];
  if (error) classes.push(theme.input[variant].errorField);
  else classes.push(theme.input[variant].field);

  return (
    <InputGroup
      label={label}
      error={error}
      variant={variant}
      helpText={helpText}
    >
      <input
        type={type}
        className={`${classes.join(" ")}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </InputGroup>
  );
};

export default withTheme(InputField);
