import {
  faCheck,
  faTimesCircle,
  faCalendar,
  faArrowAltCircleLeft,
  faExpand,
  faSpinner,
  faPlus,
  faSave,
  faArrowAltCircleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconColor, IconSize } from "./index";
import withTheme from "../theme/withTheme";

const icons = {
  add: faPlus,
  check: faCheck,
  calendar: faCalendar,
  backArrow: faArrowAltCircleLeft,
  expand: faExpand,
  loading: faSpinner,
  save: faSave,
  frontArrow: faArrowAltCircleRight,
  approved: faCheckCircle,
  rejected: faTimesCircle,
} as any;

export type Props = {
  theme: any;
  icon: string;
  color?: IconColor;
  size?: IconSize;
  spin?: boolean;
  className?: string;
};
const Icon: React.FC<Props> = ({
  theme,
  icon,
  color,
  size = IconSize.xs,
  spin = false,
  className = "",
}) => {
  const classes = [className];
  if (color) classes.push(theme.text[color]);
  classes.push(theme.size[size]);
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      className={`${classes.join(" ").trim()}`}
      spin={spin}
    />
  );
};

export default withTheme(Icon);
