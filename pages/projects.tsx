/* eslint-disable @next/next/no-img-element */
import portfolio from "content/portfolio/portfolio";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import ContentContainer from "src/components/Container/ContentContainer";
import SectionDivider from "src/components/Divider/SectionDivider";
import FeaturedProjectList from "src/components/FeaturedProject/FeaturedProjectList";
import { ProjectCardDeck } from "src/components/ProjectCard";
import { Window } from "src/components/Window";
import { useBreakpointTrigger } from "src/hooks/windowHooks";
import styles from "./Projects.module.scss";

const Projects: NextPage = () => {
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "Projects", url: "/projects" },
                        ]}
                    >
                        <SectionDivider text="Main Projects" />
                        <p className={styles.description}>
                            A few software engineering projects that I built out
                            in my spare time. These projects have spanned at
                            least a few months and have helped me become a more
                            competent and passionate developer 💻.
                        </p>
                        <ContentContainer
                            maxWidth={1200}
                            padding={
                                isSmallScreen
                                    ? "0px 14px"
                                    : "24px 48px 48px 48px"
                            }
                            margin={isSmallScreen && "0 0 24px 0"}
                        >
                            <FeaturedProjectList
                                projects={portfolio.projects.featured}
                            />
                        </ContentContainer>
                        <SectionDivider text="Other Projects" />
                        <ContentContainer
                            maxWidth={1200}
                            padding={
                                isSmallScreen ? "0px 14px" : "0 48px 48px 48px"
                            }
                        >
                            <p className={styles.description}>
                                Below are some other engineering projects that I&apos;ve worked on.
                                Many of them were in development for a few months
                                or several weeks, or are still in development.
                                Some of these projects were done very early on
                                in my engineering education.
                            </p>
                            <ProjectCardDeck
                                projects={portfolio.projects.other}
                            />
                            {/* GitHub Statistics. */}
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=Tymotex&theme=solarized-dark"
                                alt="GitHub statistics"
                                style={{
                                    display: "block",
                                    margin: "14px auto",
                                    width: "100%",
                                    maxWidth: "400px",
                                }}
                            />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
