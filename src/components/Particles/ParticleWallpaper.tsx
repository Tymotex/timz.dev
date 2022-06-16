import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { ParticleType, getParticleOptions } from ".";
import themes from "./themes";
import styles from "./ParticleWallpaper.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
    particleType?: ParticleType;
}

const ParticleWallpaper: React.FC<Props> = ({
    particleType = ParticleType.Networks,
}) => {
    const [targetOpacity, setOpacity] = useState<number>(0);
    const router = useRouter();

    // Forcefully set gradient to a selected theme
    useEffect(() => {
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        const body = document.getElementById("header-container");
        if (!body) return;
        body.style.background = selectedTheme.css;
    }, []);

    // When the path is anything but "/", then darken the overlay to create
    // a backdrop effect.
    useEffect(() => {
        if (router && router.pathname !== "/") setOpacity(0.55);
        else setOpacity(0);
    }, [router]);

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
