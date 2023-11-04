import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
} & any;

const ButtonLink = forwardRef(function ButtonLink(
  { children, href, ...rest }: LinkProps,
  ref,
) {
  const isExternal = href?.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink type="button" ref={ref} href={href} {...rest}>
      {children}
    </NextLink>
  );
});

export default ButtonLink;
