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
  }
  *,
  table td {
    vertical-align: top;
  }
  td {
    padding: 1 0 0 0;
    width: 300px;
  }
  td:first-child {
    text-align: left;
  }
  td:last-child {
    text-align: right;
    white-space: nowrap;
  }
  .first {
    width: 500px !important;
  }
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    margin-left: 20px;
    text-align: left;
    white-space: normal;
  }
  br {
    clear: both;
  }
  .label,
  .content {
    margin-top: 10px;
    float: left;
  }
  .label {
    clear: left;
    font-weight: bold;
    width: 1.5in;
  }
  .content {
    width: 6.5in;
    clear: right;
  }
  .gpa {
    display: inline-block;
    margin-top: 0.25em;
  }
  .degree-information {
    text-align: left !important;
    padding-left: 1.5em;
  }
  .school-name {
    width: 90%;
  }
  table.related-courses td {
    text-align: left;
  }
  .float-right {
    float: right;
  }
  .employment-header {
    padding-bottom: 0.25em;
  }
  .employment-details {
    padding-bottom: 0.5em;
  }
  table.activities td:nth-child(2) {
    text-align: right;
  }
  table.activities td:nth-child(1) {
    font-weight: bold;
  }
`;

export default function Resume() {
  return (
    <Wrapper>
      <Head>
        <title>Resume for Nate Radebaugh</title>
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

      <div className="label">Software Skills:</div>
      <div className="content">
        React, HTML, CSS, Angular, PHP, and SQL. C#, Java, and C/C++/CX. Git,
        and SVN.
      </div>

      <div className="label">Education:</div>
      <div className="content">
        <table>
          <tbody>
            <tr>
              <td className="school-name">
                <strong>Purdue University</strong>, West Lafayette, IN
              </td>
              <td>May 2013</td>
            </tr>
            <tr>
              <td colspan="2" className="degree-information">
                B.S.,{" "}
                <i>
                  Computer Science, concentrations in Software Engineering and
                  Programming Languages
                </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="label">Work Experience:</div>
      <div className="content">
        <div className="employment-header">
          <strong>SWC Technology Partners</strong>, Oak Brook, IL
          <span className="float-right">December 2018 - Present</span>
          <br />
          <em>Senior Consultant</em>
        </div>
        <ul className="employment-details">
          <li>Technical lead on multiple client projects at a time.</li>
          <li>
            Project planning and delegation for a variety of enterprise web
            products using .NET MVC, Java Spring, MSSQL/Oracle.
          </li>
          <li>Writing front ends using a mixture of JQuery and React.</li>
        </ul>
        <div className="employment-header">
          <strong>SWC Technology Partners</strong>, Oak Brook, IL
          <span className="float-right">May 2017 - December 2018</span>
          <br />
          <em>Staff Consultant</em>
        </div>
        <ul className="employment-details">
          <li>
            Worked with clients on large scale enterprise web products in a
            variety of technologies including .NET MVC and Java Spring Boot.
          </li>
        </ul>
        <div className="employment-header">
          <strong>Microsoft</strong>, Redmond, WA
          <span className="float-right">December 2015 - May 2017</span>
          <br />
          <em>Software Development Engineer II</em>
        </div>
        <ul className="employment-details">
          <li>
            Worked with a team of about 20 developers to rearchitect how Windows
            UI is created for different products (Phone, Desktop, etc.) Led
            architectural decisions for componentization of Windows for future
            shells, mentoring new team members.
          </li>
          <li>
            Became subject matter expert at XAML UI markup and efficient data
            binding through the MVVM pattern. Led team through decisions about
            performance and memory optimizations and improvements in back end
            and front end.
          </li>
        </ul>
        <div className="employment-header">
          <strong>Microsoft</strong>, Redmond, WA
          <span className="float-right">August 2013 - December 2015</span>
          <br />
          <em>Software Development Engineer</em>
        </div>
        <ul className="employment-details">
          <li>
            Implemented home page of Cortana app including personalized welcome
            text and help tips UI.
          </li>
          <li>
            Owned the first-run experience, configuration, and virtual touchpad
            application for a new "Desktop-like" experience on Windows Phones.
          </li>
        </ul>
        <div className="employment-header">
          <strong>Microsoft</strong>, Redmond, WA
          <span className="float-right">Summer 2012</span>
          <br />
          <em>Intern</em>
        </div>
        <ul className="employment-details">
          <li>
            Worked the Microsoft Wallet team, within Windows Phone division.
            Ported barcode generation functionality from Microsoft Office apps
            to be available to apps on Windows Phone.
          </li>
        </ul>
        <div className="employment-header">
          <strong>Qualcomm</strong>, San Diego, CA
          <span className="float-right">Summer 2011</span>
          <br />
          <em>Intern</em>
        </div>
        <ul className="employment-details">
          <li>
            Wrote tools using Batch, Perl, Visual C++, and the MFC framework to
            automate running tests, generating regression reports, and sending
            email reports.
          </li>
        </ul>
        <div className="employment-header">
          <strong>Purdue University ResNet</strong>, West Lafayette, IN
          <span className="float-right">Fall 2010 - Spring 2013</span>
          <br />
          <em>Senior Software Developer</em>
        </div>
        <ul className="employment-details">
          <li>
            Led a team of 8 student developers in the development and
            maintenance of a PHP/MySQL driven management tool using the open
            source PHP MVC framework FuelPHP and open source Bootstrap,
            including Perl scripts to help monitor data usage across the
            network.
          </li>
          <li>
            Administered multiple Linux web and database servers used for
            development, test, and production environments.
          </li>
          <li>
            Active role in interviewing, hiring, and training of new employees.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
