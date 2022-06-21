import {
    FiGithub as GitHubIcon,
    FiYoutube as YoutubeIcon,
} from "react-icons/fi";
import { RiLinkedinLine as LinkedInIcon } from "react-icons/ri";
import { SocialLinkData } from "src/components/Socials/Socials";
import OgImage from "public/og-image.avif";
import { Project } from "src/components/FeaturedProject/FeaturedProject";

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
    };
    projects: {
        featured: {
            [k: string]: Project;
        };
        other: {
            [k: string]: Project;
        };
    };
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
};

export default portfolio;
