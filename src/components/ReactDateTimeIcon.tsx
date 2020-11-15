import Icon, { IconProps } from "./Icon";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function ReactDateTimeIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faCalendarAlt} {...props} />;
}

export default ReactDateTimeIcon;
