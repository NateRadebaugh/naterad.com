import clsx from "clsx";
import Code from "components/Code";
import Link from "components/Link";
import Image from "next/image";

const mdxConfig = {
  components: {
    pre: (props) => <div {...props} />,
    code: Code,
    a: Link,
    img: Image,
    p: (props) => <p className="mb-3" {...props} />,
    ol: (props) => (
      <ul className="pl-3 mb-3 list-decimal list-outside" {...props} />
    ),
    ul: (props) => (
      <ul className="pl-3 mb-3 list-disc list-outside" {...props} />
    ),
    blockquote: ({ style, ...props }) => (
      <blockquote
        className={clsx("pl-3 pt-1 border-l-4 border-gray-500")}
        {...props}
      />
    ),
  },
};

export default mdxConfig;
