import Icon, { IconProps } from "./Icon";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function ResumeIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faFileAlt} {...props} />;
}

export default ResumeIcon;
