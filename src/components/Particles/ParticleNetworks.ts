import { IOptions, RecursivePartial } from "tsparticles";

const networkOptions: RecursivePartial<IOptions> = {
    fpsLimit: 20,
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
            distance: 175,
            opacity: 0.2,
        },
        move: {
            enable: true,
            speed: 0.2,
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
                max: 0.5,
            },
        },
    },
    retina_detect: true,
};

export default networkOptions;
