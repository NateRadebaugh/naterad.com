import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
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

const Tile = styled.a`
  display: inline-block;
  padding: 5px;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  width: 125px;
  margin-right: 1vw;
  padding-top: 16px;
  padding-bottom: 16px;
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

const Resume = styled(Tile)`
  background-color: #e15227;

  :hover {
    background-color: #df4b1f;
  }
`;

const LinkedIn = styled(Tile)`
  background-color: #0e76a8;

  :hover {
    background-color: #0d6f9f;
  }
`;

const GitHub = styled(Tile)`
  background-color: #4183c4;

  :hover {
    background-color: #3b7ebf;
  }
`;

const Twitter = styled(Tile)`
  background-color: #00a0d1;

  :hover {
    background-color: #0098c7;
  }
`;

export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>nate radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Software Consultant at SWC Technology Partners in the western Chicago Suburbs. Graduate of Purdue University. Past employee at Microsoft. Past intern at Qualcomm."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <header>
        <Title>nate radebaugh</Title>
        <IntroText>
          <strong>Senior Software Consultant</strong> at SWC Technology Partners
          in the western Chicago Suburbs. Graduate of Purdue University.
        </IntroText>
      </header>

      <SubTitle>contact me</SubTitle>
      <Link href="/resume">
        <Resume href="/resume">
          <FontAwesomeIcon size="6x" icon={faFileAlt} />
          <TileText>my resume</TileText>
        </Resume>
      </Link>
      <LinkedIn href="https://www.linkedin.com/in/nateradebaugh/">
        <FontAwesomeIcon size="6x" icon={faLinkedin} />
        <TileText>linkedin</TileText>
      </LinkedIn>
      <GitHub href="https://github.com/NateRadebaugh">
        <FontAwesomeIcon size="6x" icon={faGithub} />
        <TileText>github</TileText>
      </GitHub>
      <Twitter href="https://twitter.com/nateradebaugh">
        <FontAwesomeIcon size="6x" icon={faTwitter} />
        <TileText>twitter</TileText>
      </Twitter>
    </Wrapper>
  );
}
