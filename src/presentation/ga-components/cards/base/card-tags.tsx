import React, { useState } from "react";
import withTheme from "../../theme/withTheme";

type Props = {
  theme: any;
  children: React.ReactNode;
  className?: string;
  image?: string;
};
const CardTags: React.FC<Props> = ({
  theme,
  children,
  className = "",
  image,
}) => {
  const [cssClass, setCssClass] = useState<string>(
    [theme.card.tags, className].join(" ")
  );
  return (
    <div className={`${cssClass}`} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

export default withTheme(CardTags);
