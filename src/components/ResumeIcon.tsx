import Icon from "./Icon";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function ResumeIcon({ size, ...rest }) {
  return <Icon {...rest} size={size} icon={faFileAlt} />;
}

export default ResumeIcon;
