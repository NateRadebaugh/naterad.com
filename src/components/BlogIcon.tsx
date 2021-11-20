import { faCommentAlt } from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import Icon, { IconProps } from "./Icon";

function BlogIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faCommentAlt} {...props} />;
}

export default BlogIcon;
