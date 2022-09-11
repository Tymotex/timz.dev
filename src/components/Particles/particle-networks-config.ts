import { IOptions, RecursivePartial } from "tsparticles";

const networkOptions: RecursivePartial<IOptions> = {
    fpsLimit: 30,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 1,
            },
        },
    },
    particles: {
        // color: {
        //     value: particleTheme.particleColor,
        // },
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        links: {
            enable: true,
            distance: 180,
            opacity: 0.12,
        },
        move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
        size: {
            value: 3,
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.3,
            },
        },
    },
    retina_detect: true,
};

export default networkOptions;
