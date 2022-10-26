import NextLink from "next/link";
import styles from "./resume.module.scss";

function Link(props: any) {
  const { href, ...rest } = props;

  return <NextLink href={href} className={styles.link} {...rest} />;
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

      <ContentGroup label="Skills:">
        <strong>Front Ends</strong> &ndash; React, Angular, JQuery, HTML, CSS.
        Bootstrap.
        <br />
        <strong>Back Ends</strong> &ndash; C# (MVC, API), Java (Spring Boot),
        SQL, PHP, C/C++.
        <br />
        <strong>Cloud Services</strong> &ndash; Azure, GitHub, AWS, Atlassin,
        Vercel.
        <br />
        <strong>Methodologies</strong> &ndash; Agile, Waterfall, or anywhere
        between &ndash; I&rsquo;m flexible!
      </ContentGroup>

      <ContentGroup label="Experience:">
        <Employment
          position={
            <>
              <strong>Manager</strong>, Software Development
            </>
          }
          dates="August 2021 - Present"
          company="BDO Digital"
          location="(Remote) Oak Brook, IL"
          details={[
            "App Frameworks focus area leader.",
            "Front End Technologies community leader.",
            "Solution architect/lead on multiple projects, writing technical docs, delegating tasks, and solving hard problems in variety of frameworks including Angular, React, .NET Core 3/5/6 and more.",
          ]}
        />
        <Employment
          position={
            <>
              <strong>Experienced Senior Associate</strong>, Software
              Development
            </>
          }
          dates="November 2020 - August 2021"
          company="BDO Digital"
          location="Oak Brook, IL"
          details={[
            "Scope management, budget estimation, release planning and scheduling, and delegation for multiple concurrent custom large-scale enterprise web applications for clients.",
          ]}
        />
        <Employment
          position={
            <>
              <strong>Senior Associate</strong>, Software Development
            </>
          }
          dates="December 2018 - November 2020"
          company="SWC Technology Partners (Aquired by BDO USA as BDO Digital)"
          location="Oak Brook, IL"
          details={[
            "Technical lead on C# .NET projects, coordinating technical implementations with more junior developers to successfully deliver quality applications.",
          ]}
        />
        <Employment
          position={
            <>
              <strong>Staff Consultant</strong>, Software Development
            </>
          }
          dates="May 2017 - December 2018"
          company="SWC Technology Partners"
          location="Oak Brook, IL"
          details={[
            "Individual contributor using C#, Java, and JQuery/Bootstrap to create enterprise web applications for clients companies.",
          ]}
        />
        <Employment
          position={
            <>
              <strong>Software Development Engineer 2</strong>, Windows System
              UI
            </>
          }
          dates="December 2015 - May 2017"
          company="Microsoft"
          location="Redmond, WA"
        />
        <Employment
          position={
            <>
              <strong>Software Development Engineer</strong>, Windows Phone
            </>
          }
          dates="August 2013 - December 2015"
          company="Microsoft"
          location="Redmond, WA"
        />
        <Employment
          position={
            <>
              <strong>Intern</strong>, Windows Phone
            </>
          }
          dates="Summer 2012"
          company="Microsoft"
          location="Redmond, WA"
        />
        <Employment
          position={
            <>
              <strong>Intern</strong>
            </>
          }
          dates="Summer 2011"
          company="Qualcomm"
          location="San Diego, CA"
        />
        <Employment
          position={
            <>
              <strong>Senior Software Developer</strong>
            </>
          }
          dates="Fall 2010 - Spring 2013"
          company="Purdue University ResNet (Internet Provider)"
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
