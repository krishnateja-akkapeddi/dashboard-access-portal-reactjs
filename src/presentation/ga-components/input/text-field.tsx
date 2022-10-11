import React from "react";
import withTheme from "../theme/withTheme";
import InputField, { Props } from "./input-field";

const TextField: React.FC<Props> = (props) => {
  return <InputField {...props} type="text" />;
};

export default withTheme(TextField);
