import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import ChipGroup from "src/components/ChipGroup";
import ContentContainer from "src/components/Container/ContentContainer";
import SectionDivider from "src/components/Divider/SectionDivider";
import { Window } from "src/components/Window";
import styles from "./Projects.module.scss";
import { FeaturedProject } from "src/components/FeaturedProject";
import portfolio from "content/portfolio/portfolio";
import { useRedirectHome } from "src/hooks/routerHooks";
import { ProjectCard, ProjectCardDeck } from "src/components/ProjectCard";
import FeaturedProjectList from "src/components/FeaturedProject/FeaturedProjectList";

const Projects: NextPage = () => {
    const redirectToHome = useRedirectHome();

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
                        <ContentContainer maxWidth={1200} padding={"48px"}>
                            <FeaturedProjectList
                                projects={portfolio.projects.featured}
                            />
                        </ContentContainer>
                        <SectionDivider text="Other Projects" />
                        <ContentContainer
                            maxWidth={1200}
                            padding={"0 48px 48px 48px"}
                        >
                            <p className={styles.description}>
                                Some other projects that I&apos;ve worked on.
                            </p>
                            <ProjectCardDeck
                                projects={portfolio.projects.other}
                            />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
