import Image from "next/image";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import BlogHeader from "../components/BlogHeader";
import Divider from "../components/Divider";
import Head from "../components/Head";
import styles from "./BlogLayout.module.scss";

function BlogLayout(props) {
  const {
    isPost,
    title,
    description,
    banner,
    bannerCredit,
    date = undefined,
    children,
  } = props;

  return (
    <>
      <Head>
        <title>{title} - Nate Radebaugh's Blog</title>
        <meta name="Description" content={description || title} />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <SkipNavLink />
      <div className="container-fluid p-0">
        <BlogHeader isPost={isPost} title={title} />

        <SkipNavContent />

        <div className={styles.pageContent}>
          <h1>{title}</h1>

          {date && <p className="font-weight-bold text-muted">{date}</p>}

          <Divider />

          {description && (
            <>
              <div className="text-muted">
                <em>{description}</em>
              </div>
              <Divider />
            </>
          )}

          {banner && (
            <>
              <Image
                src={banner}
                width={600}
                height={300}
                className="border rounded"
              />
              <div className="text-muted">
                <em>{bannerCredit}</em>
              </div>
            </>
          )}

          {children}
        </div>
      </div>
    </>
  );
}

export default BlogLayout;
