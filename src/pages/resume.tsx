import Head from "next/head";
import NextLink from "next/link";
import styled, { createGlobalStyle } from "styled-components";

function Link(props: any) {
  const { href, ...rest } = props;

  return (
    <NextLink href={href}>
      <a href={href} {...rest} />
    </NextLink>
  );
}

const GlobalStyle = createGlobalStyle`
table,
html {
  font-size: .9rem;
  font-family: "Helvetica Neue", Arial;
}`;

const Wrapper = styled.div`
  @media print, (min-width: 800px) {
    width: 8in;
  }

  a {
    color: #343a40;

    :hover,
    :focus {
      color: #121416;
    }
  }

  p,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-left: 1.4rem;
    text-align: left;
    white-space: normal;
  }

  br {
    clear: both;
  }
`;

const Name = styled.h1`
  font-size: 3em;
  font-weight: bold;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const Address = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 799px) {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  @media print, (min-width: 800px) {
    font-size: 1rem;
    margin-top: 0;
    display: inline-block;
    float: right;
    text-align: right;
  }
`;

const Company = styled.h3`
  margin: 0;
  padding: 0;
  display: inline-block;

  @media (max-width: 799px) {
    font-size: 1.3rem;
    margin-top: 0.3rem;
  }

  @media print, (min-width: 800px) {
    font-size: 1rem;
    margin: 0;
  }
`;

const Position = styled.h3`
  margin: 0;
  padding: 0;
  display: inline-block;
  font-style: italic;

  @media (max-width: 799px) {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    margin-left: 0.6rem;
  }

  @media print, (min-width: 800px) {
    font-size: 1rem;
    margin: 0;
  }
`;

const LabelCol = styled.h2`
  @media (max-width: 799px) {
    margin-top: 0.7rem;
    padding-top: 0.7rem;
    font-size: 1.8rem;
    margin-bottom: 0;

    border-top: 1px solid #dee2e6;

    float: none;
  }

  @media print, (min-width: 800px) {
    padding-top: 0;
    margin-bottom: 0;

    border-top: none;

    float: left;
    clear: left;

    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    width: 1.5in;
  }
`;

const ContentCol = styled.div`
  margin-top: 10px;
  float: left;
  clear: right;

  @media (max-width: 799px) {
    float: none;
    clear: none;
  }

  @media print, (min-width: 800px) {
    width: 6.5in;
    float: left;
    clear: right;
  }
`;

const Location = styled.span`
  @media (max-width: 799px) {
    display: inline;

    &:before {
      content: ", ";
    }
  }

  @media print, (min-width: 800px) {
    float: right;

    &:before {
      content: "";
    }
  }
`;

const Dates = styled.span`
  @media (max-width: 799px) {
    display: inline;

    &:before {
      content: ", ";
    }
  }

  @media print, (min-width: 800px) {
    float: right;

    &:before {
      content: "";
    }
  }
`;

const Details = styled.ul`
  &&& {
    padding-bottom: 0.6em;
  }
`;

interface EducationProps {
  degree: string | JSX.Element;
  major: string | JSX.Element;
  school: string | JSX.Element;
  dates: string | JSX.Element;
  location: string | JSX.Element;
}

function Education({ degree, major, school, dates, location }: EducationProps) {
  return (
    <>
      <div
        css={`
          padding-bottom: 0.25em;
        `}
      >
        <strong>{school}</strong>
        <Location>{location}</Location>
        <Dates>{dates}</Dates>
        <br />
        <span
          css={`
            padding-left: 1.5em;
          `}
        >
          {degree}, <em>{major}</em>
        </span>
      </div>
    </>
  );
}

interface EmploymentProps {
  position: string | JSX.Element;
  dates: string | JSX.Element;
  company: string | JSX.Element;
  location: string | JSX.Element;
  details: (string | JSX.Element)[];
}

function Employment({
  position,
  dates,
  company,
  location,
  details = []
}: EmploymentProps) {
  return (
    <>
      <div
        css={`
          padding-bottom: 0.25em;
        `}
      >
        <Company>{company}</Company>
        <Location>{location}</Location>
        <br />
        <Position>{position}</Position>
        <Dates>{dates}</Dates>
      </div>

      <Details>
        {details.map(detail => (
          <li>{detail}</li>
        ))}
      </Details>
    </>
  );
}

export default function Resume() {
  return (
    <Wrapper>
      <Head>
        <title>Resume for Nate Radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Software Consultant at SWC Technology Partners in the western Chicago Suburbs. Graduate of Purdue University. Past employee at Microsoft. Past intern at Qualcomm."
        />
        <meta name="theme-color" content="#e15227" />
      </Head>
      <GlobalStyle />

      <div>
        <Name>Nate Radebaugh</Name>
        <Address>
          530-628-3723 (mobile)
          <br />
          nate.radebaugh@outlook.com
          <br />
          <Link href="/">
            <a href="/">www.naterad.com</a>
          </Link>
        </Address>
      </div>

      <LabelCol>Software Skills:</LabelCol>
      <ContentCol>
        <strong>Front</strong> JavaScript/TypeScript, React, HTML, CSS, Angular.
        <br />
        <strong>Back</strong> C# (MVC), Java (Spring Boot), SQL, PHP, C/C++.
        <br />
        <strong>Cloud</strong> Azure (App Service, DB, Blob Storage, Functions),
        AWS (Lambda, Connect), Now.
        <br />
        <strong>Manage</strong> Azure DevOps, Atlassian Suite.
      </ContentCol>

      <LabelCol>Work Experience:</LabelCol>
      <ContentCol>
        <Employment
          position="Senior Consultant"
          dates="December 2018 - Present"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Shaping the company's strategy for front-end solutions and architecting internal React design systems.",
            "Technical lead on multiple client projects at a time, mentoring and teaching junior team members.",
            "Project planning, delegation of tasks, and code reviews for teams with smooth handoff for a variety of enterprise web products using .NET MVC, Java Spring, MSSQL/Oracle."
          ]}
        />
        <Employment
          position="Staff Consultant"
          dates="May 2017 - December 2018"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Delivered large scale enterprise web projects to numerous clients full stack using .NET MVC, Spring Boot, SQL, JQuery, and React.",
            "Active presenter of technical presentations in .NET and Front End internal communities."
          ]}
        />
        <Employment
          position="Software Development Engineer 2"
          dates="December 2015 - May 2017"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Led architectural decisions for the windows team and its direction for building windows phone, desktop, and surface UIs.",
            "Mentored new team members.",
            "Became subject matter expert at XAML UI markup and efficient data binding through the MVVM pattern. Led team through decisions about performance and memory optimizations and improvements in back end and front end in C++/CX."
          ]}
        />
        <Employment
          position="Software Development Engineer"
          dates="August 2013 - December 2015"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Owned a variety of UX features on Windows Phone including Cortana, Wallet, and Continuum apps, collaborating with designers, PMs, and senior developers to ensure quality product and experiences using C++."
          ]}
        />
        <Employment
          position="Intern"
          dates="Summer 2012"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Worked the Microsoft Wallet team, within Windows Phone division. Ported barcode generation functionality from Microsoft Office apps to be available to apps on Windows Phone."
          ]}
        />
        <Employment
          position="Intern"
          dates="Summer 2011"
          company="Qualcomm"
          location="San Diego, CA"
          details={[
            "Drastically improved team productivity and tool performance using Batch, Perl, C++, and the MFC framework to automate running tests, generating regression reports, and sending email reports."
          ]}
        />
        <Employment
          position="Senior Software Developer"
          dates="Fall 2010 - Spring 2013"
          company="Purdue University ResNet"
          location="West Lafayette, IN"
          details={[
            "Led a team of 8 student developers in the development and maintenance of a PHP/MySQL driven management tool using the open source PHP MVC framework FuelPHP and Bootstrap, including Perl scripts to help monitor data usage across the network.",
            "Administered multiple Linux web and database servers used for development, test, and production environments.",
            "Active role in interviewing, hiring, and training of new employees."
          ]}
        />
      </ContentCol>

      <LabelCol>Education:</LabelCol>
      <ContentCol>
        <Education
          degree="B.S."
          major={
            <>
              <strong>Computer Science</strong>, focus on Software Engineering
              and Programming Languages
            </>
          }
          dates="May 2013"
          location="West Lafayette, IN"
          school="Purdue University"
        />
      </ContentCol>
    </Wrapper>
  );
}
