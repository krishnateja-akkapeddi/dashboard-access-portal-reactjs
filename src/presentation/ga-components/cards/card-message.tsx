import React from "react";
import withTheme from "../theme/withTheme";
// import Icon from "../typography/icon/icon";
// import { IconSize } from "../typography/icon/icon-size";

export enum MessageType {
  info = "info",
  warning = "warning",
  error = "error",
}

type Props = {
  theme: any;
  message: string;
  type: MessageType;
  className?: string;
};
const CardMessage: React.FC<Props> = ({
  theme,
  message,
  type,
  className = "",
}) => {
  const cssClass = [
    className,
    theme.message[type].bg,
    theme.message[type].text,
  ];
  return (
    <div className={cssClass.join(" ")}>
      {/* <span className="mr-2">
                <Icon icon={type} size={IconSize.sm} />
            </span>
            {message} */}
    </div>
  );
};

export default withTheme(CardMessage);
