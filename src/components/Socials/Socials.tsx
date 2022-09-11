import React, { useEffect, useState } from "react";
import styles from "./Socials.module.scss";
import { motion } from "framer-motion";
import { useBreakpointTrigger } from "src/hooks/window";

export interface SocialLinkData {
    icon: React.ReactNode;
    url: string;
    label: string;
}

interface Props {
    socials: SocialLinkData[];
    position?: "fixed" | "absolute";
    anchorPosition?: "bottom";
    style?: React.CSSProperties;
}

const Socials: React.FC<Props> = ({
    socials,
    position = "fixed",
    anchorPosition,
    style,
}) => {
    // Responsive re-positioning across the standard 'lg' breakpoint (992px).
    const isSmallScreen = useBreakpointTrigger(992);

    // When the screen width is below 'lg', dock the icons to the bottom.
    const positionClass =
        anchorPosition || isSmallScreen
            ? styles.anchoredToBottom
            : styles.anchoredToLeft;

    return (
        <motion.div
            role="region"
            className={`${styles.socialLinkContainer} ${positionClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ ...style, position }}
        >
            {socials &&
                socials.map((social) => (
                    <a
                        className={styles.socialLink}
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
        </motion.div>
    );
};

export default Socials;
