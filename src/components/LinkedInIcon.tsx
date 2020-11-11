import Icon from "./Icon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function LinkedInIcon({ size, ...rest }) {
  return <Icon {...rest} size={size} icon={faLinkedin} />;
}

export default LinkedInIcon;
