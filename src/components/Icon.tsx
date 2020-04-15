import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.scss";

function Icon({ size = 1, icon }) {
  return (
    <FontAwesomeIcon
      style={{ fontSize: `${size}em` }}
      icon={icon}
      className={styles.icon}
    />
  );
}

export default Icon;
