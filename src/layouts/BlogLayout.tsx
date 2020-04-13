import dayjs from "dayjs";
import {
  ThemeProvider,
  Element,
  Heading,
  Text,
  Breadcrumb,
  Stack,
  Avatar,
  Button,
} from "react-ui";
import { tokens, components } from "react-ui/themes/light";
import styles from "./base.module.scss";
import Head from "../components/Head";
import Link from "../components/Link";
import Divider from "../components/Divider";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";

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
        <Stack
          direction="horizontal"
          justify="space-between"
          align="center"
          as="header"
          marginBottom={2}
        >
          <Stack direction="horizontal" align="center" gap={2}>
            <Avatar
              size="large"
              src="https://www.gravatar.com/avatar/80d317a74bc928d8520879fdeefc6303"
              alt="Nate Radebaugh"
            />
            <Stack direction="vertical">
              <Text>Nate Radebaugh</Text>
              {isPost ? (
                <Breadcrumb className={styles.breadcrumb}>
                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                  <Text variant="subtle">{title}</Text>
                </Breadcrumb>
              ) : (
                <Breadcrumb className={styles.breadcrumb}>
                  <Link href="/">Home</Link>
                  <Text variant="subtle">Blog</Text>
                </Breadcrumb>
              )}
            </Stack>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Button as={Link} href="/" variant="secondary">
              Home
            </Button>
            <Button
              as={Link}
              href="https://github.com/NateRadebaugh"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://twitter.com/nateradebaugh"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Twitter
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/nateradebaugh/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              LinkedIn
            </Button>
            <Button as={Link} href="/resume" variant="secondary">
              Resume
            </Button>
          </Stack>
        </Stack>

        <Element
          css={{
            height: "1px",
            backgroundColor: "grays.400",
          }}
        />

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
                    <em dangerouslySetInnerHTML={{ __html: description }} />
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
