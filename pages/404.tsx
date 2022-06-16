import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LinkButton } from "src/components/Button";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import styles from "./404.module.scss";

const NotFoundPage: NextPage = () => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CentralContainer>
                <ContentContainer centerContents>
                    <div className={styles.centered}>
                        <h1>404</h1>
                        <p>
                            Couldn't find &apos;{router && router.asPath}
                            &apos;
                        </p>
                        <LinkButton href="/" text="Go Home" />
                    </div>
                </ContentContainer>
            </CentralContainer>
        </motion.div>
    );
};

export default NotFoundPage;
