import React, { useEffect, useState } from "react";
import styles from "./CentralContainer.module.scss";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const CentralContainer: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className={styles.centralContainer}
            initial={{
                opacity: 0,
                height: 250,
            }}
            animate={{
                opacity: 1,
                height: 500,
            }}
            transition={{
                duration: 1.4,
            }}
        >
            {children}
        </motion.div>
    );
};

export default CentralContainer;
