import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./BlogLayout.module.scss";
import ContentContainer from "src/components/Container/ContentContainer";
import { ParticleWallpaper } from "src/components/Particles";
import { BlogContext } from "src/contexts/BlogContext";

interface Props {
    children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className={styles.blogBody}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className={styles.slantedContainer}>
                <ContentContainer>{children}</ContentContainer>
            </div>
        </motion.div>
    );
};

export default BlogLayout;
