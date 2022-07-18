import portfolio from "content/portfolio/portfolio";
import { getRandomQuote } from "content/portfolio/quotes";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { AsideLinkGroup } from "src/components/AsideLinkGroup";
import { LinkButton } from "src/components/Button";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import { MiniDivider } from "src/components/Divider";
import { Quote } from "src/components/Quote";
import { Socials } from "src/components/Socials";
import { Stack } from "src/components/Stack";
import { Typewriter } from "src/components/Typewriter";
import { useBreakpointTrigger } from "src/hooks/windowHooks";
import styles from "./Landing.module.scss";

const Home: NextPage = () => {
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            suppressHydrationWarning
        >
            <CentralContainer
                height={isSmallScreen && "420px"}
                fontSize={isSmallScreen ? "small" : "medium"}
            >
                <ContentContainer
                    centerContents
                    maxWidth={"800px"}
                    width={"100%"}
                    disableHighlight
                >
                    <aside className={styles.greeting}>
                        Hi there, I&apos;m
                    </aside>
                    <h1 className={styles.name}>Tim Zhang.</h1>
                    <div className={styles.headline}>
                        I&apos;m{" "}
                        <Typewriter messages={portfolio.profile.headlines} />
                    </div>
                    <MiniDivider
                        margin={isSmallScreen ? "18px 0 10px 0" : "10px 0px"}
                    />

                    <div className={styles.description} role="presentation">
                        <portfolio.profile.elevatorPitch />
                    </div>
                    <Stack
                        direction="horizontal"
                        columnGap={10}
                        rowGap={10}
                        className={styles.buttonStack}
                    >
                        <LinkButton colour="primary" text="Work" href="/work" />
                        <LinkButton
                            colour="primary"
                            text="Projects"
                            href="/projects"
                        />
                        <LinkButton
                            colour="primary"
                            text="Blog"
                            href="/blogs"
                        />
                    </Stack>
                </ContentContainer>
            </CentralContainer>
            <Socials socials={portfolio.profile.socials} />
            <AsideLinkGroup
                links={[
                    { text: "Resume", url: "/documents/resume.pdf" },
                    { text: "About", url: "/about" },
                    { text: "Contact", url: "/contact" },
                ]}
            />
            <Quote quote={getRandomQuote()} />
        </motion.div>
    );
};

export default Home;
