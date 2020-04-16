import dayjs from "dayjs";
import marked from "marked";
import { ThemeProvider, Heading, Text, Stack } from "react-ui";
import { tokens, components } from "react-ui/themes/light";
import styles from "./BlogLayout.module.scss";
import BlogHeader from "../components/BlogHeader";
import Head from "../components/Head";
import Divider from "../components/Divider";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";

tokens.colors.text = {
  subtle: "grays.800",
  body: "grays.900",
  link: "blues.700",
  linkHover: "blues.800",
};

function BlogLayout(props) {
  const { isPost, title, description, date = undefined, children } = props;

  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Head>
        <title>{title} - Nate Radebaugh's Blog</title>
        <meta name="Description" content={description || title} />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <SkipNavLink />
      <Stack direction="vertical" className={styles.base}>
        <BlogHeader isPost={isPost} title={title} />

        <SkipNavContent />

        <Stack direction="horizontal" justify="center" marginTop={2}>
          <Stack
            direction="vertical"
            gap={1}
            css={{
              width: "600px",
              maxWidth: "90vw",
            }}
          >
            <Heading size="page">{title}</Heading>

            {date && (
              <Text variant="subtle" size={3}>
                {dayjs(date).format("MMMM D, YYYY h:mm A")}
              </Text>
            )}

            <Stack
              direction="vertical"
              justify="stretch"
              css={{ width: "100%" }}
            >
              <Divider marginTop={3} marginBottom={3} />

              {description && (
                <>
                  <Text variant="subtle">
                    <em
                      dangerouslySetInnerHTML={{ __html: marked(description) }}
                    />
                  </Text>
                  <Divider marginTop={3} marginBottom={3} />
                </>
              )}

              {children}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default BlogLayout;
