import dayjs from "dayjs";
import { ThemeProvider, Heading, Text, Stack } from "react-ui";
import {
  tokens as lightTokens,
  components as lightComponents,
} from "react-ui/themes/light";
import {
  tokens as darkTokens,
  components as darkComponents,
} from "react-ui/themes/dark";
import styles from "./BlogLayout.module.scss";
import BlogHeader from "../components/BlogHeader";
import Head from "../components/Head";
import Divider from "../components/Divider";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

lightTokens.colors.grays = {
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

darkTokens.colors.grays = lightTokens.colors.grays;

function BlogLayout(props) {
  const { isPost, title, description, date = undefined, children } = props;

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [tokens, setTokens] = useState(undefined);
  const [components, setComponents] = useState(undefined);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setTokens(darkTokens);
      setComponents(darkComponents);
    } else {
      setTokens(lightTokens);
      setComponents(lightComponents);
    }
  }, [resolvedTheme]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
