import React, { useContext, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { ParticleType, getParticleOptions } from ".";
import themes from "./themes";
import styles from "./ParticleWallpaper.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeContext } from "src/contexts/ThemeProvider";

interface Props {
    particleType?: ParticleType;
    darkOverlayForUrls?: Set<string>;
}

const ParticleWallpaper: React.FC<Props> = ({
    particleType = ParticleType.Networks,
    darkOverlayForUrls,
}) => {
    const [targetOpacity, setOpacity] = useState<number>(0);
    const router = useRouter();
    const themeContext = useContext(ThemeContext);

    // Forcefully set gradient to a selected theme.
    useEffect(() => {
        const selectedTheme = themes[themeContext.particleThemeIndex];
        const body = document.getElementById("header-container");
        if (!body) return;
        body.style.background = selectedTheme.css;
    }, [themeContext.particleThemeIndex]);

    // When the path is specified in `darkOverlayForUrls`, then darken the
    // overlay to create a backdrop effect.
    useEffect(() => {
        if (router && darkOverlayForUrls?.has(router.pathname))
            setOpacity(0.55);
        else setOpacity(0);
    }, [router, darkOverlayForUrls]);

    return (
        <>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 1 }}
                animate={{
                    opacity: targetOpacity,
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.55,
                    delay: 0.5,
                }}
                aria-hidden="true"
            ></motion.div>
            <div
                id="header-container"
                className={styles.particleContainer}
                aria-hidden="true"
            >
                <Particles
                    id="tsparticles"
                    options={getParticleOptions(particleType)}
                />
            </div>
        </>
    );
};

export default ParticleWallpaper;
