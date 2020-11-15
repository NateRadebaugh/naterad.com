import Icon, { IconProps } from "./Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function GitHubIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faGithub} {...props} />;
}

export default GitHubIcon;
