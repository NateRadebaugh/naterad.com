import Head from "next/head";
import NextLink from "next/link";
import styled, { createGlobalStyle } from "styled-components";

function Link(props: any) {
  const { href, prefetch, ...rest } = props;

  return (
    <NextLink href={href} prefetch={prefetch}>
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
    margin-left: 20px;
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

  @media (max-width: 800px) {
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

const Position = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 1.3rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  @media print, (min-width: 800px) {
    font-size: 1rem;
    margin: 0;
  }
`;

const LabelCol = styled.h2`
  @media (max-width: 800px) {
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

  @media (max-width: 800px) {
    float: none;
    clear: none;
  }

  @media print, (min-width: 800px) {
    width: 6.5in;
    float: left;
    clear: right;
  }
`;

interface EducationProps {
  degree: string;
  major: string;
  school: string;
  dates: string;
  location: string;
}

function Education({ degree, major, school, dates, location }: EducationProps) {
  return (
    <>
      <div
        css={`
          padding-bottom: 0.25em;
        `}
      >
        <strong>{school}</strong>, {location}
        <span
          css={`
            float: right;
          `}
        >
          {dates}
        </span>
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
  position: string;
  dates: string;
  company: string;
  location: string;
  details: string[];
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
        <span
          css={`
            float: right;
          `}
        >
          {dates}
        </span>
        <div>
          <Position>{position}</Position>
          <br />
          <strong>{company}</strong>, {location}
        </div>
      </div>

      <ul
        css={`
          padding-bottom: 0.5em !important;
        `}
      >
        {details.map(detail => (
          <li>{detail}</li>
        ))}
      </ul>
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
          <Link href="/" prefetch>
            <a href="/">www.naterad.com</a>
          </Link>
        </Address>
      </div>

      <LabelCol>Software Skills:</LabelCol>
      <ContentCol>
        React, HTML, CSS, Angular, PHP, and SQL. C#, Java, and C/C++/CX. Git,
        and SVN.
      </ContentCol>

      <LabelCol>Education:</LabelCol>
      <ContentCol>
        <Education
          degree="B.S."
          major="Computer Science, focus on Software Engineering and Programming Languages"
          dates="May 2013"
          location="West Lafayette, IN"
          school="Purdue University"
        />
      </ContentCol>

      <LabelCol>Work Experience:</LabelCol>
      <ContentCol>
        <Employment
          position="Senior Consultant"
          dates="December 2018 - Present"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Technical lead on multiple client projects at a time.",
            "Project planning and delegation for a variety of enterprise web products using .NET MVC, Java Spring, MSSQL/Oracle.",
            "Writing front ends using a mixture of JQuery and React."
          ]}
        />
        <Employment
          position="Staff Consultant"
          dates="May 2017 - December 2018"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Worked with clients on large scale enterprise web products in a variety of technologies including .NET MVC and Java Spring Boot."
          ]}
        />
        <Employment
          position="Software Development Engineer 2"
          dates="December 2015 - May 2017"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Worked with a team of about 20 developers to rearchitect how Windows UI is created for different products (Phone, Desktop, etc.) Led architectural decisions for componentization of Windows for future shells, mentoring new team members.",
            "Became subject matter expert at XAML UI markup and efficient data binding through the MVVM pattern. Led team through decisions about performance and memory optimizations and improvements in back end and front end."
          ]}
        />
        <Employment
          position="Software Development Engineer"
          dates="August 2013 - December 2015"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Implemented home page of Cortana app including personalized welcome text and help tips UI.",
            'Owned the first-run experience, configuration, and virtual touchpad application for a new "Desktop-like" experience on Windows Phones.'
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
            "Wrote tools using Batch, Perl, Visual C++, and the MFC framework to automate running tests, generating regression reports, and sending email reports."
          ]}
        />
        <Employment
          position="Senior Software Developer"
          dates="Fall 2010 - Spring 2013"
          company="Purdue University ResNet"
          location="West Lafayette, IN"
          details={[
            "Led a team of 8 student developers in the development and maintenance of a PHP/MySQL driven management tool using the open source PHP MVC framework FuelPHP and open source Bootstrap, including Perl scripts to help monitor data usage across the network.",
            "Administered multiple Linux web and database servers used for development, test, and production environments.",
            "Active role in interviewing, hiring, and training of new  employees."
          ]}
        />
      </ContentCol>
    </Wrapper>
  );
}
