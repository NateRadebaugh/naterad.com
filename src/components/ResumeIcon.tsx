import { faFileAlt } from "@fortawesome/free-solid-svg-icons/faFileAlt";
import Icon, { IconProps } from "./Icon";

function ResumeIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faFileAlt} {...props} />;
}

export default ResumeIcon;
