import React from "react";
import merge from "lodash.merge";

import defaultTheme from "./defaultTheme";
import GaTheme from "./GaTheme";

type Props = {
  theme?: any;
  children: any;
};
const GaThemeProvider: React.FC<Props> = ({ theme = {}, children }) => {
  const mergedTheme = merge({}, defaultTheme, theme);

  return <GaTheme.Provider value={mergedTheme}>{children}</GaTheme.Provider>;
};

export default GaThemeProvider;
