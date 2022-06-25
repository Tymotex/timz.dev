import React, { useEffect, useState } from "react";
import styles from "./CentralContainer.module.scss";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const CentralContainer: React.FC<Props> = ({ children, className }) => {
    return (
        <motion.div
            className={`${styles.centralContainer} ${className}`}
            initial={{
                opacity: 0,
                height: 400,
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
