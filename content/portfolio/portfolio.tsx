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
import Highlight, { defaultProps } from "prism-react-renderer";
import AboutMe from "./AboutMe";
import GoogleSoftwareEngineeringIntern from "./work-experience/google-software-engineering-intern";
import WiseTechAssociateSoftwareDeveloper from "./work-experience/wisetech-associate-software-developer";
import AccentureTechnicalArchitect from "./work-experience/accenture-technical-architect";
import UnswCasualAcademicTutor from "./work-experience/unsw-casual-academic-tutor";
import Education from "./Education";
import GoogleSoftwareEngineer from "./work-experience/google-software-engineer";
import ElevatorPitch from "./ElevatorPitch";

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
        elevatorPitch: React.ComponentType;
        // Social icons and links.
        socials: SocialLinkData[];
        AboutMe: React.ComponentType;
    };
    projects: {
        featured: Project[];
        other: Project[];
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
    Description: React.ComponentType;
    technologies: Technology[];
}

export interface Project {
    title: string;
    headline?: string;
    // This must be the same as the name (without extension) as the .mdx file
    // you want the project to be associated with.
    blogSlug?: string;
    description: string;
    technologies: Technology[];
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    videoUrl?: string;
    playUrl?: string;
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
    Description: React.ComponentType;
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
        elevatorPitch: ElevatorPitch,
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
        AboutMe: AboutMe,
    },
    projects: {
        featured: [
            {
                title: "Tactile-DS",
                headline:
                    "An interactive data structure and algorithm visualiser.",
                description: `Some words describing what the project is, what I built it with, how it was made, its purpose, etc.
                I might then prompt the viewer to read more and see a project blog, if it exists.
                Lorem ipsum, more text here, but keep it concise. Invite the reader to read more.`,
                technologies: ["C", "Ruby", "Perl", "Bash", "Nginx", "AWS"],
                githubUrl: "https://github.com/Tymotex/Tactile-DS",
                demoUrl: "https://data-structures.xyz/",
                imageUrl: "/images/projects/tactile-ds.png",
                videoUrl: "https://www.youtube.com/watch?v=iSJL-9pe-PY",
                blogSlug: "Tactile-DS",
            },
            {
                title: "Techsuite",
                blogSlug: "Techsuite",
                headline: `A collaboration and social networking app for developers. Built with React, Flask and PostgreSQL.`,
                imageUrl: "/images/projects/techsuite.png",
                description: `Some words describing what the project is, what I built it with, how it was made, its purpose, etc.
                I might then prompt the viewer to read more and see a project blog, if it exists.
                Lorem ipsum, more text here, but keep it concise. Invite the reader to read more.`,
                demoUrl: "https://techsuite.dev",
                videoUrl: "https://www.youtube.com/watch?v=C4o2fOCq2cI",
                githubUrl: "https://github.com/Tymotex/Techsuite/",
                technologies: [
                    "React",
                    "Flask",
                    "PostgreSQL",
                    "Python",
                    "JavaScript",
                    "Sass",
                    "SocketIO",
                    "Nginx",
                ],
            },
            {
                title: "Cosmica",
                blogSlug: "Cosmica",
                headline: `A cross-platform sci-fi strategy game built with C# and Unity.`,
                description:
                    "Cosmica is a cross-platform sci-fi strategy game developed from scratch using the Unity game engine and C#, available on Google Play and playable online. This game was sold to a small indie game publisher in 2021.",
                imageUrl: "/images/projects/cosmica.png",
                demoUrl: "https://tymotex.github.io/Cosmica/",
                githubUrl: "https://github.com/Tymotex/Cosmica",
                videoUrl: "https://www.youtube.com/watch?v=D7K1GOqns1w",
                playUrl:
                    "https://play.google.com/store/apps/details?id=com.Cosmica.Cosmica",
                technologies: ["C#", "Unity"],
            },
            {
                title: "Galactic Ed",
                blogSlug: "Galactic-Ed",
                headline: `An educational platform that tailors lessons for children with ASD`,
                description: `An educational platform that tailors lessons for children with ASD`,
                imageUrl: "/images/projects/galactic-ed.png",
                // demoUrl: "https://galactic-ed.xyz/",
                technologies: [
                    "JavaScript",
                    "Next",
                    "React",
                    "Express",
                    "Mongodb",
                    "GraphQL",
                    "Docker",
                    "AWS",
                ],
            },
            {
                title: "Employ.me",
                blogSlug: "Employ.Me",
                headline: `A job application management automation service and web scraper.`,
                description: `Employ.me is a web application that scrapes together job postings from major job-hunting platforms and provides automation services for the user to track their application for postings they are interested in.`,
                imageUrl: "/images/projects/employ.me.png",
                videoUrl: "https://youtu.be/VoWjZLe-DFs",
                githubUrl: "https://github.com/Tymotex/Employ.me",
                demoUrl: "https://employ-me.netlify.app/",
                technologies: [
                    "JavaScript",
                    "React",
                    "Python",
                    "Flask",
                    "Mongodb",
                    "MaterialUI",
                    "Sass",
                    "Nginx",
                ],
            },
            {
                title: "Structs.sh",
                blogSlug: "Structs.sh",
                headline: `A data structures and algorithms learning platform with an integrated visualiser.`,
                description: `Structs.sh is an interactive data structure and algorithm visualiser and educational platform for computer science students.`,
                imageUrl: "/images/projects/structs.sh.png",
                demoUrl: "https://structs.sh",
                githubUrl: "https://github.com/csesoc/Structs.sh/",
                technologies: [
                    "JavaScript",
                    "React",
                    "TypeScript",
                    "Mongodb",
                    "Express",
                    "Docker",
                    "Kubernetes",
                    "Rancher",
                ],
            },
        ],
        other: [
            {
                title: "Hydroponix",
                blogSlug: "Hydroponix",
                imageUrl:
                    "https://raw.githubusercontent.com/Tymotex/Hydroponix/master/static/thumbnail.png",
                description: `An IoT automated plant propagation system built with Python on the Raspberry Pi Zero W.`,
                githubUrl: "https://github.com/Tymotex/Hydroponix",
                technologies: [
                    "Raspberry Pi",
                    "Flask",
                    "InfluxDB",
                    "Python",
                    "JavaScript",
                    "Bootstrap",
                ],
            },
            {
                title: "Autonomous Deliv-O-Bot",
                blogSlug: "Deliv-O-Bot",
                imageUrl: "/images/projects/deliv-o-bot.png",
                description: `An autonomous container delivery vehicle, built using the Arduino Rev3 MCU development board.`,
                videoUrl: "https://www.youtube.com/watch?v=ogIqlcZ1EoI",
                technologies: ["Arduino"],
            },
            {
                title: "Shell to Perl Transpiler",
                blogSlug: "Shell-to-Perl-Transpiler",
                imageUrl: "/images/projects/shell-perl-transpiler.png",
                description: `An experimental transpiler that maps POSIX-compatible shell scripts to their equivalent Perl 5 scripts.`,
                technologies: ["Shell", "Perl"],
                githubUrl: "https://github.com/Tymotex/ShellPerlTranspiler",
            },
            {
                title: "timz.dev",
                blogSlug: "Hydroponix",
                imageUrl: "/images/projects/timz.dev.png",
                description: `A developer portfolio and blog site built with React, Next.js, TypeScript and MDX.`,
                demoUrl: "https://timz.dev",
                githubUrl: "https://github.com/Tymotex/timz.dev",
                technologies: ["React", "Next", "JavaScript", "TypeScript"],
            },
        ],
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
            Description: GoogleSoftwareEngineer,
        },
        {
            jobTitle: "Software Engineering Intern",
            company: "Google",
            employmentType: "Internship",
            team: "Data Acquisition (Site Reliability Engineering)",
            from: "November 2021",
            to: "February 2022",
            technologies: ["C++", "Spanner", "Bash", "SQL", "GoogleTest"],
            Description: GoogleSoftwareEngineeringIntern,
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
            Description: WiseTechAssociateSoftwareDeveloper,
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
            Description: AccentureTechnicalArchitect,
        },
        {
            jobTitle: "Academic Tutor",
            company: "UNSW",
            employmentType: "Casual",
            team: "Data Structures & Algorithms (COMP2521)",
            from: "June 2020",
            to: "May 2021",
            technologies: ["C", "Bash", "Perl", "Ruby", "Nginx", "AWS"],
            Description: UnswCasualAcademicTutor,
        },
    ],
    education: {
        degree: "Bachelor of Computer Science",
        university: "University of New South Wales",
        from: "Jan 2019",
        to: "Dec 2022",
        Description: Education,
    },
};

export default portfolio;
