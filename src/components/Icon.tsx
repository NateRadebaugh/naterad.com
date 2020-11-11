import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from "./Icon.module.scss";

function Icon({ size = 1, icon, ...rest }) {
  const { style, className } = rest;

  return (
    <FontAwesomeIcon
      style={{ ...style, fontSize: `${size}em` }}
      icon={icon}
      className={clsx(styles.icon, className)}
    />
  );
}

export default Icon;
