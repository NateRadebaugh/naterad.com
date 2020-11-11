import Icon from "./Icon";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function ReactDateTimeIcon({ size, ...rest }) {
  return <Icon {...rest} size={size} icon={faCalendarAlt} />;
}

export default ReactDateTimeIcon;
