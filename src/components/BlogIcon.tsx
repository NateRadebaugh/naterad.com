import Icon, { IconProps } from "./Icon";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons/faCommentAlt";

function BlogIcon(props: Omit<IconProps, "icon">) {
  return <Icon icon={faCommentAlt} {...props} />;
}

export default BlogIcon;
