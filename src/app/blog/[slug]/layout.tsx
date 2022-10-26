import React from "react";
import styles from "../BlogLayout.module.scss";
import BlogHeader from "../components/BlogHeader";
import { SkipNavContent } from "components/SkipNav";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-0 container-fluid">
      <BlogHeader isPost={true} />

      <SkipNavContent />

      <div className={styles.pageContent}>{children}</div>
    </div>
  );
}
