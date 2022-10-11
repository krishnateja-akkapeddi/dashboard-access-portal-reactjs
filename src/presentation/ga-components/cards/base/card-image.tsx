import React, { useState } from "react";
import withTheme from "../../theme/withTheme";

type Props = {
  theme: any;
  className?: string;
  image?: string;
};
const CardImage: React.FC<Props> = ({ theme, className = "", image }) => {
  const [cssClass, setCssClass] = useState<string>(
    [theme.card.image, className].join(" ")
  );
  return (
    <div
      className={`${cssClass}`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default withTheme(CardImage);
