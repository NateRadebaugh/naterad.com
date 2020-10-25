import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";
import { Link as ReactUiLink } from "react-ui";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const Link = forwardRef(function Link(
  { children, href, as = href, ...rest }: LinkProps,
  ref
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <ReactUiLink ref={ref} href={as} {...rest}>
      {children}
    </ReactUiLink>
  );

  if (isExternal) {
    return component;
  }

  return <NextLink {...{ href, as }}>{component}</NextLink>;
});

export default Link;
