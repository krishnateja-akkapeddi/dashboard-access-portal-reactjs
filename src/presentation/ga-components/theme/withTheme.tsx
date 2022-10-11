import React from "react";

import GaTheme from "./GaTheme";

export interface InjectedThemeProps {
  theme: any;
}

const withTheme = <P extends InjectedThemeProps>(
  Component: React.ComponentType<P>
) => {
  const WithTheme: React.FC<Omit<P, keyof InjectedThemeProps>> = (props) => (
    <GaTheme.Consumer>
      {(theme) => <Component {...(props as P)} theme={theme} />}
    </GaTheme.Consumer>
  );

  WithTheme.displayName = `WithTheme(${Component.displayName})`;
  return WithTheme;
};

export default withTheme;
