import Icon from "./Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function GitHubIcon({ size, ...rest }) {
  return <Icon {...rest} size={size} icon={faGithub} />;
}

export default GitHubIcon;
