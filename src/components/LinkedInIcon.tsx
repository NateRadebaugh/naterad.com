import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Icon, { IconProps } from "./Icon";

function LinkedInIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faLinkedin} {...props} />;
}

export default LinkedInIcon;
