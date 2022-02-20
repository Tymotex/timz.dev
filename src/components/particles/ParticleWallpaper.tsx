import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { ParticleType, getParticleOptions } from '.';
import themes from './themes';

const ParticleWallpaper = () => {
    const [particleType, setParticleType] = useState<ParticleType>(ParticleType.Networks);

    // Forcefully set gradient to a selected theme
    useEffect(() => {
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        const body = document.getElementById('header-container');
        if (!body) return;
        body.style.background = selectedTheme.css;
    }, []);

    return <Particles id="tsparticles" options={getParticleOptions(particleType)} />;
};

export default ParticleWallpaper;
