import { useState } from "react";
import ButtonColor from "./button-color";
import withTheme from "../theme/withTheme";
import { Icon, IconSize } from "../Icon";

type ButtonProps = {
  theme: any;
  text: string | React.ReactNode;
  color?: ButtonColor;
  onClick: () => void;
  className?: string;
  icon?: string;
  iconSpin?: boolean;
  iconSize?: IconSize;
};

const Button = ({
  text,
  color = ButtonColor.PRIMARY,
  onClick,
  icon,
  theme,
  iconSpin = false,
  iconSize = IconSize.sm,
  className = "",
}: ButtonProps) => {
  const [cssClass] = useState<string>(
    [theme.button.colors[color], theme.button.base, className].join(" ")
  );

  return (
    <button className={cssClass} onClick={() => onClick()}>
      <span className={theme.button.name}>
        {icon && <Icon icon={icon} size={iconSize} spin={iconSpin} />}
        <strong className="text-sm ml-2">{text}</strong>
      </span>
    </button>
  );
};

export default withTheme(Button);
