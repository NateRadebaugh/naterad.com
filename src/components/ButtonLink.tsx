import tw from "twin.macro";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

export interface LinkProps extends Omit<NextLinkProps, "href"> {
  children: React.ReactNode;
  variant: "primary" | "default";
  href: string;
  className?: string;
}

const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(function ButtonLink(
  { children, variant = "default", href, className, ...rest },
  ref
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <a
      ref={ref}
      className={className}
      tw="py-2 px-3 rounded-md no-underline hover:no-underline text-white hover:text-white transition ease-out duration-200"
      css={[
        variant === "primary" && tw`bg-green-700 hover:bg-green-800`,
        variant === "default" && tw`bg-gray-700 hover:bg-gray-800`,
      ]}
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

export default ButtonLink;
