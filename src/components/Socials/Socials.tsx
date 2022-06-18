import React, { useEffect, useState } from "react";
import styles from "./Socials.module.scss";

interface SocialLinkData {
    icon: React.ReactNode;
    url: string;
}

interface Props {
    socials: SocialLinkData[];
}

const useBreakpointTrigger = (breakpoint: number): boolean => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return width <= breakpoint;
};

const Socials: React.FC<Props> = ({ socials }) => {
    // Responsive re-positioning across the standard 'lg' breakpoint (992px).
    const isSmallScreen = useBreakpointTrigger(992);

    // When the screen width is below 'lg', dock the icons to the bottom.
    const positionClass = isSmallScreen
        ? styles.anchoredToBottom
        : styles.anchoredToLeft;

    return (
        <div
            role="region"
            className={`${styles.socialLinkContainer} ${positionClass}`}
        >
            {socials &&
                socials.map((social) => (
                    <div className={styles.socialLink}>
                        <a href={social.url} target="_blank">
                            {social.icon}
                        </a>
                    </div>
                ))}
        </div>
    );
};

export default Socials;
