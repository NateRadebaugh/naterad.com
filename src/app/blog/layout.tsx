import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Blog Posts - Nate Radebaugh&apos;s Blog`,
  description: "Blog Posts - Nate Radebaugh's Blog",
};
const viewport = {
  themeColor: "#317EFB",
};
export { viewport };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
