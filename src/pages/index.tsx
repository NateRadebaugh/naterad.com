import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { darken } from "polished";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCalendarAlt,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", "Segoe WP", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 25px;
  color: #333;
  background-color: #fff;

  a {
    text-decoration: none;
  }

  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }

  .svg-inline--fa {
    display: inline-block;
    font-size: 6em;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  text-transform: lowercase;
  line-height: 40px;
  margin: 12.5px 0;
  font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
    sans-serif;
  font-weight: 100;
  color: inherit;
  text-rendering: optimizelegibility;
`;

const IntroText = styled.p`
  margin: 0 0 12.5px;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  margin: 0;
  text-transform: lowercase;
  line-height: 40px;
  font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
    sans-serif;
  font-weight: 100;
  color: inherit;
  text-rendering: optimizelegibility;
`;

interface TileProps {
  colspan?: number;
  color?: string;
}

const Tile = styled.a<TileProps>`
  display: inline-block;
  padding: 5px;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 16px;
  padding-bottom: 16px;

  ${(props: TileProps) => {
    const multiplier = props.colspan || 1;
    return `width: ${multiplier * 125 + (multiplier - 1) * 16}px;`;
  }}

  ${(props: TileProps) =>
    props.color
      ? `background-color: ${props.color};
  :hover {
    background-color: ${darken(0.02, props.color)};
  }`
      : null}
`;

const TileText = styled.h3`
  font-size: 1.75em;
  text-transform: lowercase;
  line-height: 40px;
  margin: 0;
  font-family: "Segoe UI Light", "Helvetica Neue", "Segoe UI", "Segoe WP",
    sans-serif;
  font-weight: 100;
  text-rendering: optimizelegibility;
`;

export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>nate radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Senior Associate, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <header>
        <Title>nate radebaugh</Title>
        <IntroText>
          <strong>Senior Senior Associate, Software Solutions</strong> at{" "}
          <strong>BDO Digital</strong> in the western Chicago Suburbs. Graduate
          of Purdue University.
        </IntroText>
      </header>

      <Link href="/blog">
        <Tile href="/blog" color="purple">
          <FontAwesomeIcon size="6x" icon={faCommentAlt} />
          <TileText>blog</TileText>
        </Tile>
      </Link>

      <Tile
        href="https://react-datetime.naterad.com"
        target="_blank"
        rel="noopener noreferrer"
        color="teal"
        colspan={3}
      >
        <FontAwesomeIcon size="6x" icon={faCalendarAlt} />
        <TileText>@nateradebaugh/react-datetime</TileText>
      </Tile>

      <SubTitle>contact me</SubTitle>
      <Link href="/resume">
        <Tile href="/resume" color="#e15227">
          <FontAwesomeIcon size="6x" icon={faFileAlt} />
          <TileText>my resume</TileText>
        </Tile>
      </Link>
      <Tile href="https://www.linkedin.com/in/nateradebaugh/" color="#0e76a8">
        <FontAwesomeIcon size="6x" icon={faLinkedin} />
        <TileText>linkedin</TileText>
      </Tile>
      <Tile href="https://github.com/NateRadebaugh" color="#4183c4">
        <FontAwesomeIcon size="6x" icon={faGithub} />
        <TileText>github</TileText>
      </Tile>
      <Tile href="https://twitter.com/nateradebaugh" color="#00a0d1">
        <FontAwesomeIcon size="6x" icon={faTwitter} />
        <TileText>twitter</TileText>
      </Tile>
    </Wrapper>
  );
}
