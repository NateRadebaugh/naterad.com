import Image from "next/image";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import BlogHeader from "../components/BlogHeader";
import Divider from "../components/Divider";
import Head from "../components/Head";
import styles from "./BlogLayout.module.scss";
import { motion } from "framer-motion";

export interface BlogLayoutProps {
  isPost: boolean;
  slug: string;
  title: string;
  description: string;
  banner: string;
  bannerCredit: string;
  date: string;
  children: any;
}

function BlogLayout(props) {
  const {
    isPost,
    slug,
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
          <motion.h1 layoutId={`${slug}-post-title`}>{title}</motion.h1>

          {date && (
            <motion.p
              className="font-weight-bold text-muted"
              layoutId={`${slug}-post-date`}
            >
              {date}
            </motion.p>
          )}

          {banner && (
            <>
              <motion.div layoutId={`${slug}-banner-image`}>
                <Image
                  src={banner}
                  width={600}
                  height={300}
                  className="border rounded"
                />
              </motion.div>
              <div className="text-muted">
                <em>{bannerCredit}</em>
              </div>
            </>
          )}

          <Divider />

          {description && (
            <>
              <motion.div
                className="text-muted"
                layoutId={`${slug}-post-description`}
              >
                <em>{description}</em>
              </motion.div>
              <Divider />
            </>
          )}

          {children}
        </div>
      </div>
    </>
  );
}

export default BlogLayout;
