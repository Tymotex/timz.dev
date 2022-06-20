import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback } from "react";
import Breadcrumbs from "src/components/Breadcrumbs";
import ChipGroup from "src/components/ChipGroup";
import ContentContainer from "src/components/Container/ContentContainer";
import SectionDivider from "src/components/Divider/SectionDivider";
import { Window } from "src/components/Window";

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
                        <ContentContainer maxWidth={1200}>
                            <Link href="/">Home</Link>
                            <ChipGroup
                                technologies={["python", "javascript", "ruby"]}
                            />
                        </ContentContainer>

                        <SectionDivider text="Other Projects" />
                        <ContentContainer maxWidth={1200}>
                            <Link href="/">Home</Link>
                            <ChipGroup
                                technologies={["python", "javascript", "ruby"]}
                            />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
