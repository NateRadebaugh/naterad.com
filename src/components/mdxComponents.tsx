import Image from "next/image";
import Link from "../components/Link";
import Code from "../components/Code";

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: Code,
  a: Link,
  img: Image,
  blockquote: ({ style, ...props }) => (
    <blockquote
      className="pl-3 pt-1"
      style={{ borderLeft: "3px solid #f8f9fa", ...style }}
      {...props}
    />
  ),
};

export default mdxComponents;
