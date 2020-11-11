import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import dayjs from "dayjs";
import BlogHeader from "../components/BlogHeader";
import Divider from "../components/Divider";
import Head from "../components/Head";

function BlogLayout(props) {
  const { isPost, title, description, date = undefined, children } = props;

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

        <div
          style={{
            width: "600px",
            maxWidth: "90vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>{title}</h1>

          {date && (
            <p className="font-weight-bold text-muted">
              {dayjs(date).format("MMMM D, YYYY h:mm A")}
            </p>
          )}

          <Divider />

          {description && (
            <>
              <div className="text-muted">
                <em>{description}</em>
              </div>
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
