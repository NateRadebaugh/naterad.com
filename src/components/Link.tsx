import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ReactUiLink } from "react-ui";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

function Link({ children, href, as = undefined, ...rest }: LinkProps) {
  return (
    <NextLink href={href} as={as} {...rest}>
      <ReactUiLink href={as || href} {...rest}>
        {children}
      </ReactUiLink>
    </NextLink>
  );
}

export default Link;
