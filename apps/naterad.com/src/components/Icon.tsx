import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

import styles from "./Icon.module.scss";

export interface IconProps {
  size?: number;
  icon: IconProp;
  className?: string;
  style?: any;
}

function Icon({ size = 1, icon, ...rest }: IconProps) {
  const { style, className } = rest;

  const [height, width, _, fontGlyphKey, path] = (icon as any).icon as [
    number,
    number,
    [number, number],
    string,
    string
  ];

  return (
    <svg
      style={{ ...style, fontSize: `${size}rem` }}
      className={clsx(styles.icon, className)}
      viewBox={`0 0 ${height} ${width}`}
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}

export default Icon;
