import Icon, { IconProps } from "./Icon";
import { faCube } from "@fortawesome/free-solid-svg-icons";

function BundlephobiaInlineIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faCube} {...props} />;
}

export default BundlephobiaInlineIcon;
