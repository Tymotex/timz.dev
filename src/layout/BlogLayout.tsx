import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogLayout.module.scss";

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
            {children}
        </motion.div>
    );
};

export default BlogLayout;
