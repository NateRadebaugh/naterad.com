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
  details?: React.ReactNode[];
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
        {details.map((detail, i) => (
          <li key={i} className={styles.detail}>
            {detail}
          </li>
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
          content="Hi I'm Nate Radebaugh. Experienced Senior Associate at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University. Past employee at Microsoft."
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
        <strong>Front</strong> React, Angular, JQuery, HTML, CSS. Bootstrap.
        <br />
        <strong>Back</strong> C# (MVC), Java (Spring Boot), SQL, PHP, C/C++.
        <br />
        <strong>Cloud</strong> Azure (DevOps, App Service, DB, Functions), AWS
        (Lambda, Connect, Lex), Atlassin Suite, Vercel Now.
      </ContentGroup>

      <ContentGroup label="Work Experience:">
        <Employment
          position="Experienced Senior Associate, Software Solutions"
          dates="November 2020 - Present"
          company="BDO Digital, BDO USA"
          location="Oak Brook, IL"
          details={[
            "Scope and budget estimating, release planning and scheduling, and delegation for multiple concurrent custom large-scale enterprise web applications for clients.",
            "Work with clients, BAs, and PMs to set expectations and meet budgets and deadlines.",
            "Shaping firm-wide best practices for front-end development and solutions architecture for scalability and product confidence.",
          ]}
        />
        <Employment
          position="Senior Associate, Software Solutions"
          dates="January 2020 - November 2020"
          company="BDO Digital, BDO USA"
          location="Oak Brook, IL"
          details={[
            "Technical lead on multiple client projects at a time, mentoring and teaching junior team members, including project planning, delegation, and technical oversight.",
            "Project planning, task delegation, and code reviews while creating custom web applications using React, Angular, .NET MVC, Java Spring, and MSSQL/Oracle.",
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
            'Developer on multiple large scale enterprise "full stack" web projects at a time using .NET MVC, Spring Boot, SQL, JQuery, and React.',
          ]}
        />
        <Employment
          position="Software Development Engineer 2"
          dates="December 2015 - May 2017"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            'Worked on Windows system UI team for windows phone, desktop, and other devices.',
            "Mentored new team members.",
          ]}
        />
        <Employment
          position="Software Development Engineer"
          dates="August 2013 - December 2015"
          company="Microsoft"
          location="Redmond, WA"
          details={[
            "Work on Windows Phone including Cortana, Wallet, and Continuum apps using C++. Collaboration with designers, PMs, and senior developers.",
          ]}
        />
        <Employment
          position="Intern, Windows Phone"
          dates="Summer 2012"
          company="Microsoft"
          location="Redmond, WA"
        />
        <Employment
          position="Intern"
          dates="Summer 2011"
          company="Qualcomm"
          location="San Diego, CA"
        />
        <Employment
          position="Senior Software Developer"
          dates="Fall 2010 - Spring 2013"
          company="Purdue University ResNet (ISP)"
          location="West Lafayette, IN"
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
