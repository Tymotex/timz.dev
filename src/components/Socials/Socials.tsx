import React, { useEffect, useState } from "react";
import styles from "./Socials.module.scss";
import { motion } from "framer-motion";

export interface SocialLinkData {
    icon: React.ReactNode;
    url: string;
}

interface Props {
    socials: SocialLinkData[];
    position?: "fixed" | "absolute";
}

const useBreakpointTrigger = (breakpoint: number): boolean => {
    const [width, setWidth] = useState<number>(0);

    // Initialise the width. Note: we must do this in `useEffect` since window
    // is undefined on the server side.
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    //
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return width <= breakpoint;
};

const Socials: React.FC<Props> = ({ socials, position = "fixed" }) => {
    // Responsive re-positioning across the standard 'lg' breakpoint (992px).
    const isSmallScreen = useBreakpointTrigger(992);

    // When the screen width is below 'lg', dock the icons to the bottom.
    const positionClass = isSmallScreen
        ? styles.anchoredToBottom
        : styles.anchoredToLeft;

    return (
        <motion.div
            role="region"
            className={`${styles.socialLinkContainer} ${positionClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ position }}
        >
            {socials &&
                socials.map((social) => (
                    <div className={styles.socialLink} key={social.url}>
                        <a href={social.url} target="_blank" rel="noreferrer">
                            {social.icon}
                        </a>
                    </div>
                ))}
        </motion.div>
    );
};

export default Socials;
