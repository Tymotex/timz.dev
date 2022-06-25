import {
    FiGithub as GitHubIcon,
    FiYoutube as YoutubeIcon,
} from "react-icons/fi";
import { RiLinkedinLine as LinkedInIcon } from "react-icons/ri";
import { SocialLinkData } from "src/components/Socials/Socials";
import { Technology } from "src/components/ChipGroup/technologies";
import OgImage from "public/og-image.avif";
import UnorderedList from "src/components/UnorderedList";
import Image from "next/image";
import { ImageGallery } from "src/components/ImageGallery";
import { SectionDivider } from "src/components/Divider";
import ContentContainer from "src/components/Container/ContentContainer";
import AwardList from "src/components/Education/AwardList";

interface PortfolioData {
    meta: {
        // The contents of <title> for the root page / and all child pages unless
        // overridden.
        mainTitle: string;
        // The contents of <meta name="description"> for the root and all children
        // unless overridden.
        mainDescription: string;
        // Open graph protocol title.
        ogTitle: string;
        // Open graph protocol description.
        ogDescription: string;
        // Open graph protocol image.
        ogImage: string;
    };
    profile: {
        // A list of few-word descriptions about you as a continuation from
        // "I'm". Eg. "a software engineer", "a lost soul".
        headlines: string[];
        // Concise sentences to display on the landing page and leave an
        // impression on the reader.
        elevatorPitch: React.ReactNode;
        // Social icons and links.
        socials: SocialLinkData[];
        aboutMe: React.ReactNode;
    };
    projects: {
        featured: {
            [k: string]: Project;
        };
        other: {
            [k: string]: Project;
        };
    };
    work: WorkExperience[];
    education: Education;
}

export interface WorkExperience {
    jobTitle: string;
    company: string;
    employmentType: "Full-Time" | "Part-Time" | "Casual" | "Internship";
    team?: string;
    from: string;
    to: string;
    description: React.ReactNode;
    technologies: Technology[];
}

export interface Project {
    title: string;
    headline: string;
    description: string;
    technologies: Technology[];
    githubUrl?: string;
    demoUrl?: string;
}

export interface Education {
    // Eg. 'Bachelor of Computer Science'.
    degree: string;
    // Eg. 'University of New South Wales'.
    university: string;
    // Eg. 'Jan 2019'
    from: string;
    // Eg. 'Present' or 'Dec 2022'.
    to: string;
    description: React.ReactNode;
}

export interface Award {
    title: string;
    description?: string;
    date?: string;
}

const portfolio: PortfolioData = {
    meta: {
        mainTitle: "Tim Zhang - Developer Portfolio and Blog",
        mainDescription:
            "Welcome to my developer portfolio and blog, where I try to explore and demystify the intracacies of software engineering.",
        ogTitle: "Tim Zhang's Developer Portfolio and Blog",
        ogDescription:
            "A curious developer's portfolio and blog on all things software engineering.",
        ogImage: OgImage.src,
    },
    profile: {
        headlines: [
            "a computer science student.",
            "a hobbyist fullstack developer.",
            "an aspiring software engineer.",
            "a lifelong learner.",
        ],
        elevatorPitch: (
            <p>
                I'm currently a final year computer science student at the
                University of New South Wales. I love working on software
                projects and learning something about everything.
            </p>
        ),
        socials: [
            {
                icon: <GitHubIcon size={20} aria-hidden />,
                url: "https://github.com/Tymotex/",
            },
            {
                icon: <LinkedInIcon size={20} aria-hidden />,
                url: "https://www.linkedin.com/in/timz-seng",
            },
            {
                icon: <YoutubeIcon size={20} aria-hidden />,
                url: "https://www.youtube.com/channel/UCIuefX9zQPux3lGCkDOdlIQ",
            },
        ],
        aboutMe: (
            <>
                <ContentContainer maxWidth={1200} padding={"0 32px 32px 32px"}>
                    <p>
                        A brief description about me. Lorem ipsum. Nunc eu nulla
                        in nisl tincidunt porta. Etiam sed justo feugiat,
                        tincidunt ante non, faucibus lacus. Vestibulum bibendum
                        lacinia ligula vitae vulputate.
                    </p>
                    <p>
                        Rem ipsum. Nunc eu nulla in nisl tincidunt porta. Etiam
                        sed justo feugiat, tincidunt ante non, faucibus lacus.
                        Vestibulum bibendum lacinia ligula vitae.
                    </p>
                </ContentContainer>
                <SectionDivider text="Hobbies & Interests" />
                <ContentContainer maxWidth={1200} padding={"0 32px 32px 32px"}>
                    <p>What I enjoy outside of programming.</p>
                    <UnorderedList>
                        <li>Game development & modding.</li>
                        <li>Guitar &ndash; mainly fingerstyle on acoustic.</li>
                        <li>
                            Powerlifting, even with my frail programmer arms.
                        </li>
                        <li>
                            Gardening (I have a secret fantasy of becoming a
                            nomadic radish farmer).
                        </li>
                        <li>Origami.</li>
                    </UnorderedList>
                    {/* <ImageGallery
                        images={[
                            {
                                src: "/images/profile/origami-1.png",
                                alt: "Origami rose",
                            },
                            {
                                src: "/images/profile/plants-1.jpg",
                                alt: "Succulents",
                            },
                        ]}
                        width={250}
                        height={150}
                    /> */}
                    <h2>My Programming Battlestation</h2>
                    <p>Where I churn out buggy software:</p>
                    <ImageGallery
                        images={[
                            {
                                src: "/images/profile/battlestation-1.jpg",
                                alt: "Blue battlestation",
                            },
                            {
                                src: "/images/profile/battlestation-2.jpg",
                                alt: "Red battlestation",
                            },
                        ]}
                        width={300}
                        height={200}
                    />
                </ContentContainer>
            </>
        ),
    },
    projects: {
        featured: {
            tactileDs: {
                title: "Tactile-DS",
                headline:
                    "An interactive data structure and algorithm visualiser.",
                description: `Some words describing what the project is, what I built it with, how it was made, its purpose, etc.
                I might then prompt the viewer to read more and see a project blog, if it exists.
                Lorem ipsum, more text here, but keep it concise. Invite the reader to read more.`,
                technologies: ["Python", "JavaScript", "Arduino"],
                githubUrl: "https://github.com/Tymotex/Tactile-DS",
                demoUrl: "https://data-structures.xyz/",
            },
        },
        other: {},
    },
    work: [
        {
            jobTitle: "Software Engineer",
            company: "Google",
            employmentType: "Full-Time",
            team: "",
            from: "January 2021",
            to: "...",
            technologies: [],
            description: <>Not started.</>,
        },
        {
            jobTitle: "Software Engineering Intern",
            company: "Google",
            employmentType: "Internship",
            team: "Data Acquisition (Site Reliability Engineering)",
            from: "November 2021",
            to: "February 2022",
            technologies: ["C++", "Spanner", "Bash", "SQL", "GoogleTest"],
            description: (
                <>
                    Improved the reliability of a URL fetching service that
                    serves billions of requests per day, used primarily by web
                    crawlers.
                    <UnorderedList>
                        <li>
                            Increased the availability of a 'hostname to shard
                            number' resolver from 99.99% to 99.999%, reducing
                            its expected annual downtime from 53 minutes to 5
                            minutes.
                        </li>
                        <li>
                            Designed and unit-tested new C++ interfaces and a
                            Spanner database schema to phase out software
                            anti-patterns.
                        </li>
                        <li>
                            Implemented a scalable multithreaded cache refresher
                            in C++ which could potentially reduce data staleness
                            from minutes to milliseconds.
                        </li>
                        <li>
                            Planned production rollout and testing procedures,
                            including writing Bash scripts to automatically
                            generate traffic and extract, normalise and compare
                            contents from different storage services for
                            verifying correctness, end-to-end.
                        </li>
                    </UnorderedList>
                </>
            ),
        },
        {
            jobTitle: "Associate Software Developer",
            company: "WiseTech",
            employmentType: "Internship",
            team: "WiseTech Academy",
            from: "July 2021",
            to: "October 2021",
            technologies: [
                "C#",
                "ASP.NET",
                "SQL Server",
                "NUnit",
                "SCSS",
                "SQL",
            ],
            description: (
                <>
                    Developed API and UI for a learning management system,{" "}
                    <a href="https://wisetechacademy.com/">WiseTech Academy</a>.
                    <UnorderedList>
                        <li>
                            Applied test-driven development with NUnit to
                            implement REST APIs for a user and content
                            management system using C#, ASP.NET Core and SQL
                            Server.
                        </li>
                        <li>
                            Implemented a bulk enrolment time-saving feature,
                            allowing .CSV and .XLSX files to be uploaded to
                            create users and new course enrolments with dry-run
                            results preview and error reporting.
                        </li>
                        <li>
                            Developed content management interfaces using
                            ASP.NET Razor pages, jQuery and SCSS.
                        </li>
                    </UnorderedList>
                </>
            ),
        },
        {
            jobTitle: "Technical Architect",
            company: "Accenture",
            employmentType: "Casual",
            from: "May 2021",
            to: "Jan 2022",
            technologies: [
                "TypeScript",
                "Node",
                "Mongodb",
                "GraphQL",
                "Express",
                "Docker",
            ],
            description: (
                <>
                    Developing an educational platform that tailors lessons for
                    young children with ASD for the{" "}
                    <strong>Autism Awareness</strong> charity organisation.
                    <UnorderedList>
                        <li>
                            Built a prototype of the product, achieving 1st
                            place in Accenture's 2021 hackathon out of 37 teams,
                            and later pitched the project to Accenture to
                            acquire funding for continued development.
                        </li>
                        <li>
                            Implemented a lesson builder interface for
                            developing reusable therapy sessions, reducing work
                            that previously would take hours to just minutes.
                        </li>
                        <li>
                            Implemented a content management GraphQL API using
                            Node.js with TypeScript, Express and MongoDB.
                        </li>
                        <li>
                            Formed core requirements and designed a concept for
                            a neural network backing the platform's learning
                            recommendation engine.
                        </li>
                    </UnorderedList>
                </>
            ),
        },
        {
            jobTitle: "Academic Tutor",
            company: "UNSW",
            employmentType: "Casual",
            team: "Data Structures & Algorithms (COMP2521)",
            from: "June 2020",
            to: "May 2021",
            technologies: ["C", "Bash", "Perl", "Ruby", "Nginx", "AWS"],
            description: (
                <>
                    Taught Data Structures and Algorithms (COMP2521) in
                    trimester 2 and 3 in 2020 and trimester 1 in 2021.
                    <UnorderedList>
                        <li>
                            Delivered two 1-hour online tutorials to 26 students
                            each week.
                        </li>
                        <li>
                            Delivered 6 hours of lab demonstrations to over 70
                            students each week.
                        </li>
                        <li>
                            Volunteered for additional help sessions and
                            answering online course forum questions.
                        </li>
                        <li>
                            Achieved a student satisfaction rating of 5.74/6.00
                            in the first term of teaching, with the average
                            rating being 5.21/6.00 in the School of Engineering.
                        </li>
                        <li>
                            Achieved a student satisfaction rating of 5.89/6.00
                            in the second term of teaching, with the average
                            rating being 5.14/6.00 in the School of Engineering.
                        </li>
                        <li>
                            Achieved a student satisfaction rating of 5.89/6.00
                            in the third term of teaching, with the average
                            rating being 5.30/6.00 in the School of Engineering.
                        </li>
                    </UnorderedList>
                </>
            ),
        },
    ],
    education: {
        degree: "Bachelor of Computer Science",
        university: "University of New South Wales",
        from: "Jan 2019",
        to: "Dec 2022",
        description: (
            <>
                <UnorderedList>
                    <li>High distinction average WAM (GPA).</li>
                    <li>
                        Project team lead in the Computer Science & Engineering
                        Society (CSESoc).
                    </li>
                </UnorderedList>
                <h3>Academic Awards & Hackathons</h3>
                <AwardList
                    awards={[
                        {
                            title: "Atlassian 1st place prize",
                            description: `For achieving the highest mark in COMP2521 (Data Structures
                        and algorithms) out of 400+ engineering students.`,
                            date: "2020",
                        },
                        {
                            title: "Macquarie Bank 1st place prize",
                            description: `For achieving the highest mark in SENG2021 (Software
                        Engineering Design Workshop) out of 159 software
                        engineering students.`,
                            date: "2021",
                        },
                        {
                            title: "Faculty of Engineering Dean’s Award",
                            description: `For ranking in the top 25 academic performance across
                        all 1st & 2nd year students in UNSW's School of
                        Engineering.`,
                            date: "2020, 2021",
                        },
                        {
                            title: "Accenture 'Hack for Good' Hackathon 1st Place",
                            description: `Worked in a team of 4 to develop a prototype for
                        an education platform driven by deep learning that
                        automatically tailors a curriculum for young children
                        with ASD. Achieved 1st place out of 37 other
                        participating teams from across Australia.`,
                            date: "2021",
                        },
                        {
                            title: "Google Chronicle Hackathon 2nd Place",
                            description: `Worked in a team of 4 to build a
                        proof-of-concept application for an automated time
                        scheduler system. This project won 2nd place out of
                        around 40 other teams.`,
                            date: "2021",
                        },
                        {
                            title: "CSESoc Annual Flagship Hackathon 2nd Place",
                            description: `Worked in a team of 4 to develop a prototype for
                        an educational content delivery web app that recommends
                        lessons to students with learning disabilities. We
                        achieved 2nd place out of more than 60 participating
                        teams.`,
                            date: "2021",
                        },
                        {
                            title: "Academic Awards Achievement Scholarship",
                            date: "2019",
                        },
                    ]}
                />
            </>
        ),
    },
};

export default portfolio;
