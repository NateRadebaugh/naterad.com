import Icon, { IconProps } from "./Icon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

function LinkedInIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faLinkedin} {...props} />;
}

export default LinkedInIcon;
