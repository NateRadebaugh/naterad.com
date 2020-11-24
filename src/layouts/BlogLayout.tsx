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
          {banner ? (
            <>
              <div className="position-relative mb-3" style={{ height: 300 }}>
                <>
                  <div
                    className="position-absolute"
                    style={{ top: 0, left: 0 }}
                  >
                    <Image
                      src={banner}
                      width={600}
                      height={300}
                      className="border rounded"
                    />
                  </div>
                  <div
                    style={{
                      top: 0,
                      left: 0,
                      backgroundColor: "black",
                      opacity: 0.85,
                    }}
                    className="position-absolute w-100 h-100"
                  ></div>
                </>
                <div
                  className="position-absolute px-3 pt-3 d-flex flex-column"
                  style={{ minHeight: 300 }}
                >
                  <h2 className="text-white">{title}</h2>
                  <p className="font-weight-bold text-muted">{date}</p>

                  {description && <div>{description}</div>}

                  <div className="text-muted align-self-start mt-auto">
                    <em>{bannerCredit}</em>
                  </div>
                </div>
              </div>

              <Divider />
            </>
          ) : (
            <>
              <h2 className="text-white">{title}</h2>
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
