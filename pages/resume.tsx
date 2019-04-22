import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
table,
html {
  font-size: 90%;
  font-family: "Helvetica Neue", Arial;
}`;

const Wrapper = styled.div`
  width: 8in;

  table {
    width: 100%;

    td {
      vertical-align: top;
      padding: 1 0 0 0;
      width: 300px;

      :last-child {
        text-align: right;
        white-space: nowrap;
      }
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

const LabelCol = styled.div`
  margin-top: 10px;
  float: left;
  clear: left;
  font-weight: bold;
  width: 1.5in;
`;

const ContentCol = styled.div`
  margin-top: 10px;
  float: left;
  width: 6.5in;
  clear: right;
`;

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
        <strong>{company}</strong>, {location}
        <span
          css={`
            float: right;
          `}
        >
          {dates}
        </span>
        <br />
        <em>{position}</em>
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
        <div
          css={`
            font-size: 3em;
            font-weight: bold;
            display: inline-block;
          `}
        >
          Nate Radebaugh
        </div>
        <div
          css={`
            display: inline-block;
            float: right;
            text-align: right;
          `}
        >
          530-628-3723 (mobile)
          <br />
          nate.radebaugh@outlook.com
          <br />
          www.naterad.com
          <br />
        </div>
      </div>

      <LabelCol>Software Skills:</LabelCol>
      <ContentCol>
        React, HTML, CSS, Angular, PHP, and SQL. C#, Java, and C/C++/CX. Git,
        and SVN.
      </ContentCol>

      <LabelCol>Education:</LabelCol>
      <ContentCol>
        <table>
          <tbody>
            <tr>
              <td
                css={`
                  width: 90%;
                `}
              >
                <strong>Purdue University</strong>, West Lafayette, IN
              </td>
              <td>May 2013</td>
            </tr>
            <tr>
              <td
                colSpan={2}
                css={`
                  text-align: left !important;
                  padding-left: 1.5em;
                `}
              >
                B.S.,{" "}
                <i>
                  Computer Science, concentrations in Software Engineering and
                  Programming Languages
                </i>
              </td>
            </tr>
          </tbody>
        </table>
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
