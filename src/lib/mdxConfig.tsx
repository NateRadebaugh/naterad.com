import clsx from "clsx";
import Code from "components/Code";
import Link from "components/Link";
import Image from "next/image";

const mdxConfig = {
  components: {
    pre: function PreTag(props) {
      return <div {...props} />;
    },
    code: Code,
    a: Link,
    img: Image,
    p: function PTag(props) {
      return <p className="mb-3" {...props} />;
    },
    ol: function OlTag(props) {
      return <ul className="pl-3 mb-3 list-decimal list-outside" {...props} />;
    },
    ul: function UlTag(props) {
      return <ul className="pl-3 mb-3 list-disc list-outside" {...props} />;
    },
    blockquote: function BlockquoteTag({ style, ...props }) {
      return (
        <blockquote
          className={clsx("pl-3 pt-1 border-l-4 border-gray-500")}
          {...props}
        />
      );
    },
  },
};

export default mdxConfig;
