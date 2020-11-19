import Icon, { IconProps } from "./Icon";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

function TwitterIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faTwitter} {...props} />;
}

export default TwitterIcon;
