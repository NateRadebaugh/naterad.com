import "twin.macro";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

export interface LinkProps extends Omit<NextLinkProps, "href"> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, href, className, ...rest }: LinkProps,
  ref
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <a
      ref={ref}
      className={className}
      tw="text-blue-400 hover:text-blue-500 transition ease-out duration-200"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );

  if (isExternal) {
    return component;
  }

  return <NextLink href={href}>{component}</NextLink>;
});

export default Link;
