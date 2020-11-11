import Icon from "./Icon";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function TwitterIcon({ size, ...rest }) {
  return <Icon {...rest} size={size} icon={faTwitter} />;
}

export default TwitterIcon;
