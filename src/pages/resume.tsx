import Head from "next/head";
import NextLink from "next/link";
import styles from "./resume.module.scss";

function Link(props: any) {
  const { href, ...rest } = props;

  return (
    <NextLink href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a className={styles.link} {...rest} />
    </NextLink>
  );
}

function ContentGroup({ label, children }) {
  return (
    <>
      <h2 className={styles.contentGroupLabel}>{label}</h2>
      <div className={styles.contentGroupContent}>{children}</div>
    </>
  );
}

interface EducationProps {
  degree: React.ReactNode;
  major: React.ReactNode;
  school: React.ReactNode;
  dates: React.ReactNode;
  location: React.ReactNode;
}

function Education({ degree, major, school, dates, location }: EducationProps) {
  return (
    <div className={styles.education}>
      <strong>{school}</strong>
      <span className={styles.location}>
        {location}, {dates}
      </span>
      <br />
      <span className={styles.educationDegrees}>
        {degree}, <em>{major}</em>
      </span>
    </div>
  );
}

interface EmploymentProps {
  position: React.ReactNode;
  dates: React.ReactNode;
  company: React.ReactNode;
  location: React.ReactNode;
  details: React.ReactNode[];
}

function Employment({
  position,
  dates,
  company,
  location,
  details = [],
}: EmploymentProps) {
  return (
    <>
      <div className={styles.employment}>
        <h3 className={styles.companyName}>{company}</h3>
        <span className={styles.location}>{location}</span>
        <br />
        <h3 className={styles.position}>{position}</h3>
        <span className={styles.dates}>{dates}</span>
      </div>

      <ul className={styles.details}>
        {details.map((detail) => (
          <li className={styles.detail}>{detail}</li>
        ))}
      </ul>
    </>
  );
}

export default function Resume() {
  return (
    <div className={styles.resume}>
      <Head>
        <title>Resume for Nate Radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Senior Associate at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University. Past employee at Microsoft."
        />
        <meta name="theme-color" content="#e15227" />
      </Head>

      <div>
        <div className={styles.name}>Nate Radebaugh</div>
        <div className={styles.contact}>
          530-628-3723 (mobile)
          <br />
          nate.radebaugh@outlook.com
          <br />
          <Link href="/">www.naterad.com</Link>
        </div>
      </div>

      <ContentGroup label="Software Skills:">
        <strong>Front</strong> React, Angular, JQuery, HTML, CSS.
        <br />
        <strong>Back</strong> C# (MVC), Java (Spring Boot), SQL, PHP, C/C++.
        <br />
        <strong>Cloud</strong> Azure (DevOps, App Service, DB, Functions), AWS
        (Lambda, Connect), Atlassin Suite, Zeit Now.
      </ContentGroup>

      <ContentGroup label="Work Experience:">
        <Employment
          position="Senior Associate, Software Solutions"
          dates="January 2020 - Present"
          company="BDO Digital"
          location="Oak Brook, IL"
          details={[
            "Technical lead on multiple client projects at a time, mentoring and teaching junior team members.",
            "Project planning, delegation of tasks, and code reviews for teams with smooth handoff for a variety of enterprise web products and technologies.",
          ]}
        />
        <Employment
          position="Senior Consultant"
          dates="December 2018 - January 2020"
          company="SWC Technology Partners (Aquired by BDO USA)"
          location="Oak Brook, IL"
          details={[
            "Technical lead on multiple client projects at a time, including project planning, delegation, technical oversight, and code reviews for teams creating a variety of enterprise products using React, Angular, .NET MVC, Java Spring, and MSSQL/Oracle.",
          ]}
        />
        <Employment
          position="Staff Consultant"
          dates="May 2017 - December 2018"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Delivered large scale enterprise web projects to numerous clients full stack using .NET MVC, Spring Boot, SQL, JQuery, and React.",
          ]}
        />
        <Employment
          position="Software Development Engineer 2"
          dates="December 2015 - May 2017"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Led architectural decisions for the Windows team and its direction for building windows phone, desktop, and surface UIs.",
            "Mentored new team members.",
            "Became subject matter expert at XAML UI markup and efficient data binding through the MVVM pattern. Led team through decisions about performance and memory optimizations and improvements in back end and front end in C++/CX.",
          ]}
        />
        <Employment
          position="Software Development Engineer"
          dates="August 2013 - December 2015"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Owned a variety of UX features on Windows Phone including Cortana, Wallet, and Continuum apps, collaborating with designers, PMs, and senior developers to ensure quality product and experiences using C++.",
          ]}
        />
        <Employment
          position="Intern"
          dates="Summer 2012"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Worked the Microsoft Wallet team, within Windows Phone division. Ported barcode generation functionality from Microsoft Office apps to be available to apps on Windows Phone.",
          ]}
        />
        <Employment
          position="Intern"
          dates="Summer 2011"
          company="Qualcomm"
          location="San Diego, CA"
          details={[
            "Drastically improved team productivity and tool performance using Batch, Perl, C++, and the MFC framework to automate running tests, generating regression reports, and sending email reports.",
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
            "Active role in interviewing, hiring, and training of new employees.",
          ]}
        />
      </ContentGroup>

      <ContentGroup label="Education:">
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
      </ContentGroup>
    </div>
  );
}
