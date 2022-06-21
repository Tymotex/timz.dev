import portfolio from "content/portfolio/portfolio";
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
import styles from "./Landing.module.scss";

const Home: NextPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CentralContainer>
                <ContentContainer
                    centerContents
                    maxWidth={"800px"}
                    width={"80%"}
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
                    <MiniDivider />

                    <div className={styles.description} role="presentation">
                        {portfolio.profile.elevatorPitch}
                    </div>
                    <Stack
                        direction="horizontal"
                        columnGap={10}
                        className={styles.buttonStack}
                    >
                        <LinkButton type="primary" text="Work" href="/work" />
                        <LinkButton
                            type="primary"
                            text="Projects"
                            href="/projects"
                        />
                        <LinkButton type="primary" text="Blog" href="/blogs" />
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
            <Quote
                quote="Software and cathedrals are much the same – first we build them, then we pray."
                author="Sam Redwine"
            />
        </motion.div>
    );
};

export default Home;
