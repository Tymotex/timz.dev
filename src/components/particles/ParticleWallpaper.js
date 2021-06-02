import React, { useEffect } from 'react';
import Particles from 'react-particles-js';
import themes from './themes';

const ParticleWallpaper = () => {
    const selectedTheme = themes[Math.floor(Math.random() * themes.length)];

    // Forcefully set gradient to a selected theme
    useEffect(() => {
        const particleCanvas = document.querySelector('.tsparticles-canvas-el');
        if (particleCanvas) particleCanvas.style.background = selectedTheme.css;
    });

    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 1000,
                        },
                    },
                    line_linked: {
                        enable: true,
                        opacity: 0.4,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    size: {
                        value: 3,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1.2,
                            opacity_min: 0.15,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 5,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 1,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default ParticleWallpaper;
