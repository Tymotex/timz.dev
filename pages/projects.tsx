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
                            A few software engineering projects that I&apos;ve
                            tinkered with in my spare time.
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
                                Some other projects that I&apos;ve worked on.
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
