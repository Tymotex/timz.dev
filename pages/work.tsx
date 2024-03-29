import portfolio from "content/portfolio/portfolio";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import ContentContainer from "src/components/Container/ContentContainer";
import { SectionDivider } from "src/components/Divider";
import { EducationItem } from "src/components/Education";
import { Window } from "src/components/Window";
import { WorkExperienceTabs } from "src/components/WorkExperienceTabs";
import { useRedirectHome } from "src/hooks/router";
import { useBreakpointTrigger } from "src/hooks/window";

const Work: NextPage = () => {
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "Work", url: "/work" },
                        ]}
                    >
                        <SectionDivider text="Work Experience" />
                        <ContentContainer maxWidth={1200}>
                            <WorkExperienceTabs
                                workExperiences={portfolio.work}
                            />
                        </ContentContainer>
                        <SectionDivider text="Education" />
                        <ContentContainer
                            maxWidth={1200}
                            padding={isSmallScreen && "12px 18px 0px 0px"}
                        >
                            <EducationItem education={portfolio.education} />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Work;
