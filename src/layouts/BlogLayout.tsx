import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import dayjs from "dayjs";
import { Heading, Stack, Text, ThemeProvider } from "react-ui";
import {
  components as darkComponents,
  tokens as darkTokens,
} from "react-ui/themes/dark";
import BlogHeader from "../components/BlogHeader";
import Divider from "../components/Divider";
import Head from "../components/Head";
import styles from "./BlogLayout.module.scss";

darkTokens.colors.grays = {
  100: "#f8f9fa",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  1000: "#000000",
};

function BlogLayout(props) {
  const { isPost, title, description, date = undefined, children } = props;

  return (
    <ThemeProvider tokens={darkTokens} components={darkComponents}>
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
                    <em>{description}</em>
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
