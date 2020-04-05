import Head from "next/head";
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
  Card
} from "react-ui";
import { tokens, components } from "react-ui/themes/light";
import styles from "./base.module.scss";
import Link from "../components/Link";

export interface BlogLayoutProps {
  slug?: string;
  title: string;
  description?: string;
  date?: string;
  children: React.ReactNode;
}

function BlogLayout(props: BlogLayoutProps) {
  const { slug, title, description, date = undefined, children } = props;

  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Head>
        <title>{title} - Nate Radebaugh's Blog</title>
        <meta name="Description" content={description || title} />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Stack direction="vertical" className={styles.base}>
        <Stack
          direction="horizontal"
          justify="space-between"
          align="center"
          as="header"
        >
          <Stack direction="horizontal" align="center" gap={2}>
            <Avatar
              size="large"
              src="https://www.gravatar.com/avatar/80d317a74bc928d8520879fdeefc6303"
            />
            <Stack direction="vertical">
              <Text>Nate Radebaugh</Text>
              {slug ? (
                <Breadcrumb>
                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                  <Text variant="subtle">{title}</Text>
                </Breadcrumb>
              ) : (
                <Breadcrumb>
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
              variant="secondary"
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://twitter.com/nateradebaugh"
              target="_blank"
              variant="secondary"
            >
              Twitter
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/nateradebaugh/"
              target="_blank"
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
          as="span"
          css={{
            width: "100%",
            height: 1,
            backgroundColor: "gray"
          }}
        />

        <Stack direction="horizontal" justify="center" marginTop={2}>
          <Stack
            direction="vertical"
            gap={1}
            css={{
              width: "600px"
            }}
          >
            <Heading size="page">{title}</Heading>

            {date && (
              <Text variant="subtle">
                {dayjs(date).format("MMMM D, YYYY h:mm A")}
              </Text>
            )}

            <Element
              as="span"
              css={{
                marginTop: 8,
                width: "100%",
                height: 1,
                backgroundColor: "lightgray"
              }}
            />

            <Stack
              direction="vertical"
              justify="stretch"
              css={{ width: "100%" }}
            >
              {description && (
                <Text variant="subtle">
                  <em dangerouslySetInnerHTML={{ __html: description }} />
                </Text>
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
