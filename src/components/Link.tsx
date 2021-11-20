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

    const component = (
        <a ref={ref} href={href} {...rest}>
            {children}
        </a>
    );

    if (isExternal) {
        return component;
    }

    return <NextLink href={href}>{component}</NextLink>;
});

export default Link;
