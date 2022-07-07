import React, { useEffect, useState } from "react";
import styles from "./CentralContainer.module.scss";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
    height?: string;
    fontSize?: string;
}

const CentralContainer: React.FC<Props> = ({ children, className, height, fontSize }) => {
    return (
        <motion.div
            className={`${styles.centralContainer} ${className}`}
            initial={{
                opacity: 0,
                height: 400,
            }}
            animate={{
                opacity: 1,
                height: height || 500,
                fontSize
            }}
            transition={{
                duration: 1.4,
            }}
            style={{ height }}
        >
            {children}
        </motion.div>
    );
};

export default CentralContainer;
