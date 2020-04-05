import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ReactUiLink } from "react-ui";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const Link = React.forwardRef(
  ({ children, href, as = undefined, ...rest }: LinkProps, ref) => {
    return (
      <NextLink {...{ href, as }}>
        <ReactUiLink ref={ref} href={as || href} {...rest}>
          {children}
        </ReactUiLink>
      </NextLink>
    );
  }
);

export default Link;
