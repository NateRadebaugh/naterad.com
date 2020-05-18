import { Heading, Text, Image } from "react-ui";
import Link from "../components/Link";
import Code from "../components/Code";

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: Code,
  a: Link,
  img: Image,
  h1: (props) => <Heading as="h1" size={7} {...props} />,
  h2: (props) => <Heading as="h2" size="section" {...props} />,
  h3: (props) => <Heading as="h3" size="paragraph" {...props} />,
  h4: (props) => (
    <Heading as="h4" size="paragraph">
      <Text variant="subtle" {...props} />
    </Heading>
  ),
  h5: (props) => <Heading as="h5" size={3} {...props} />,
  h6: (props) => (
    <Heading as="h6" size={3}>
      <Text variant="subtle" {...props} />
    </Heading>
  ),
  blockquote: (props) => (
    <blockquote
      css={{ margin: "0 0 1rem", marginBottom: "1rem", fontSize: "1.25rem" }}
      {...props}
    />
  ),
};

export default mdxComponents;
