import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";
import { Button as ReactUiLink } from "react-ui";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const ButtonLink = forwardRef(function ButtonLink(
  { children, href, as = href, ...rest }: LinkProps,
  ref
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <ReactUiLink type="button" ref={ref} href={as} {...rest}>
      {children}
    </ReactUiLink>
  );

  if (isExternal) {
    return component;
  }

  return <NextLink {...{ href, as }}>{component}</NextLink>;
});

export default ButtonLink;
