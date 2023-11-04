import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const Link = forwardRef(function Link(
  { children, href, ...rest }: LinkProps,
  ref,
) {
  const isExternal = href?.startsWith("http");

  if (isExternal) {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink ref={ref} href={href} {...rest}>
      {children}
    </NextLink>
  );
});

export default Link;
