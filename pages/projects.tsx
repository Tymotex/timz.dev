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

const Projects: NextPage = () => {
    const router = useRouter();

    const redirectToHome = useCallback(() => {
        router.push(
            {
                pathname: "/",
            },
            undefined,
            // By default, Next.js will force scroll to the top. This can be
            // disabled. See: https://stackoverflow.com/questions/65902664/next-js-router-push-without-scrolling-to-the-top.
            { scroll: false },
        );
    }, [router]);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        onClickOutside={() => redirectToHome()}
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
                        <ContentContainer maxWidth={1200}>
                            {[...Array(5)].map((_, i) => (
                                <FeaturedProject
                                    key={i}
                                    position={i % 2 === 0 ? "left" : "right"}
                                    project={
                                        portfolio.projects.featured.tactileDs
                                    }
                                />
                            ))}
                        </ContentContainer>
                        <SectionDivider text="Other Projects" />
                        <ContentContainer maxWidth={1200}>
                            <p className={styles.description}>
                                Some other projects that I&apos;ve worked on.
                            </p>
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
