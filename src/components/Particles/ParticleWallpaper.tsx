import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { ParticleType, getParticleOptions } from ".";
import themes from "./themes";
import styles from "./ParticleWallpaper.module.scss";
import { motion } from "framer-motion";

const ParticleWallpaper = () => {
    const [particleType, setParticleType] = useState<ParticleType>(
        ParticleType.Networks,
    );

    // Forcefully set gradient to a selected theme
    useEffect(() => {
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        const body = document.getElementById("header-container");
        if (!body) return;
        body.style.background = selectedTheme.css;
    }, []);
    return (
        <>
            <div className={styles.overlay}></div>
            <div id="header-container" className={styles.particleContainer}>
                <Particles
                    id="tsparticles"
                    options={getParticleOptions(particleType)}
                />
            </div>
        </>
    );
};

export default ParticleWallpaper;
