import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ReactUiLink } from "react-ui";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const Link = React.forwardRef(
  ({ children, href, as = undefined, ...rest }: LinkProps, ref) => {
    const component = (
      <ReactUiLink ref={ref} href={as || href} {...rest}>
        {children}
      </ReactUiLink>
    );

    if (href.startsWith("http")) {
      return component;
    }

    return <NextLink {...{ href, as }}>{component}</NextLink>;
  }
);

export default Link;
