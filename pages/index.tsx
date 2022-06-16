import { motion } from "framer-motion";
import type { NextPage } from "next";
import { LinkButton } from "src/components/Button";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import { MiniDivider } from "src/components/Divider";
import { HStack } from "src/components/Stack";
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
                >
                    <aside className={styles.greeting}>Hi there, I'm</aside>
                    <h1 className={styles.name}>Tim Zhang.</h1>
                    <h2 className={styles.description}>
                        I'm <Typewriter />
                    </h2>
                    <MiniDivider />

                    <p className={styles.description}>
                        Do et irure sint velit consequat officia. Irure cillum
                        ex in culpa ullamco proident deserunt enim eiusmod. Ut
                        id laborum occaecat cupidatat ad dolore mollit occaecat
                        sunt cillum.
                    </p>
                    <HStack columnGap={10} className={styles.buttonStack}>
                        <LinkButton type="primary" text="Work" href="/work" />
                        <LinkButton
                            type="primary"
                            text="Projects"
                            href="/projects"
                        />
                        <LinkButton type="primary" text="Blog" href="/blogs" />
                    </HStack>
                </ContentContainer>
            </CentralContainer>
        </motion.div>
    );
};

export default Home;
