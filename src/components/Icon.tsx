import { config, IconProp } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { CSSProperties } from "react";

import styles from "./Icon.module.scss";

export interface IconProps {
  size?: number;
  icon: IconProp;
  className?: string;
  style?: CSSProperties;
}

function Icon({ size = 1, icon, ...rest }: IconProps) {
  const { style, className } = rest;

  return (
    <FontAwesomeIcon
      style={{ ...style, fontSize: `${size}rem` }}
      icon={icon}
      className={clsx(styles.icon, className)}
    />
  );
}

export default Icon;
