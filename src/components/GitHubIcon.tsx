import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Icon, { IconProps } from "./Icon";

function GitHubIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faGithub} {...props} />;
}

export default GitHubIcon;
