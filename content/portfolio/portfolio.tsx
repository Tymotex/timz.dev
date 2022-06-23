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
                    <ImageGallery
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
                technologies: ["python", "javascript", "arduino"],
                githubUrl: "https://github.com/Tymotex/Tactile-DS",
                demoUrl: "https://data-structures.xyz/",
            },
        },
        other: {},
    },
    work: [
        {
            jobTitle: "Software Engineering Intern",
            company: "Google",
            employmentType: "Internship",
            team: "Data Acquisition (Site Reliability Engineering)",
            from: "November 2021",
            to: "February 2022",
            technologies: ["c++", "spanner", "bash", "SQL", "googleTest"],
            description: (
                <>
                    <UnorderedList>
                        <li>Item 1</li>
                    </UnorderedList>
                    <p>
                        Laboris aliquip occaecat aliqua dolore ea aliquip
                        commodo eu. Ut aliqua exercitation laborum culpa.
                        Voluptate velit quis elit est minim deserunt tempor
                        sint. Incididunt eiusmod fugiat laboris proident eu aute
                        eu cillum non officia duis deserunt in irure. Ipsum
                        pariatur cupidatat culpa qui aute sunt aute.
                    </p>
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
                "c#",
                "ASP.NET",
                "SQL Server",
                "NUnit",
                "SCSS",
                "SQL",
            ],
            description: (
                <>
                    <p>
                        Qui excepteur commodo deserunt magna amet incididunt
                        pariatur ex. Ipsum pariatur dolor reprehenderit qui et
                        voluptate adipisicing exercitation ut ipsum. Ut dolore
                        consectetur adipisicing id. Proident esse occaecat duis
                        elit. Ullamco id sint anim dolor minim Lorem voluptate
                        in cupidatat officia voluptate qui nostrud.
                    </p>
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
                "typescript",
                "node",
                "mongodb",
                "graphql",
                "express",
                "docker",
            ],
            description: (
                <>
                    <p>
                        Et consectetur non irure nulla non sint. In incididunt
                        aute pariatur laborum sunt ea velit officia. Enim anim
                        sint anim cupidatat do enim in. Qui commodo velit aute
                        ullamco eu ipsum duis ut incididunt laborum aliqua
                        exercitation aute proident.
                    </p>
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
            technologies: ["c", "bash", "perl", "ruby", "nginx", "AWS"],
            description: (
                <>
                    <p>
                        Duis incididunt ipsum non eu. Ullamco magna laboris
                        pariatur in tempor dolore proident. Mollit aute id
                        aliqua veniam eu elit. Reprehenderit Lorem veniam
                        reprehenderit esse proident irure elit do non. Laborum
                        consectetur deserunt dolore ut non laboris quis mollit
                        ipsum. Veniam commodo ea dolor mollit exercitation.
                        Lorem minim aliquip incididunt nisi consequat.
                    </p>
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
                    <li>High disctinction average mark.</li>
                    <li>
                        Project team lead in the Computer Science & Engineering
                        Society (CSESoc).
                    </li>
                    <li>
                        Academic Awards:
                        <UnorderedList>
                            <li>
                                Atlassian 1st place prize for achieving the
                                highest mark in COMP2521 (Data Structures and
                                algorithms) out of 400+ engineering students.
                            </li>
                            <li>
                                Macquarie bank 1st place prize for achieving the
                                highest mark in SENG2021 (Software Engineering
                                Design Workshop) out of 159 software engineering
                                students.
                            </li>
                            <li>Faculty of Engineering Dean’s Award</li>
                        </UnorderedList>
                    </li>
                </UnorderedList>
            </>
        ),
    },
};

export default portfolio;
