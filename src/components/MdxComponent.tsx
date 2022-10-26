"use client";

import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import mdxConfig from "lib/mdxConfig";

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={mdxConfig.components as any} />;
}
