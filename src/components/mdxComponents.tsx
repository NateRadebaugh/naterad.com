import Image from "next/image";
import Link from "../components/Link";
import Code from "../components/Code";
import blockquoteStyles from "./BlockQuote.module.scss";
import clsx from "clsx";

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: Code,
  a: Link,
  img: Image,
  blockquote: ({ style, ...props }) => (
    <blockquote
      className={clsx("pl-3 pt-1", blockquoteStyles.blockquote)}
      {...props}
    />
  ),
};

export default mdxComponents;
