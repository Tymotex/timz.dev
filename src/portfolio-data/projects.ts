// Collection of my personal projects in a javascript object

import assetImages from 'src/assets/images';
import descriptions from './project-descriptions';
import { renderMarkdown } from './utils';
import { Project } from 'src/typedefs/Project';
import projectImages from './project-images';

interface ProjectCollection {
    // A collection of personal projects that I spent significant amounts of time and effort on
    mainProjects: Project[];
    // A collection of projects that were either university projects or smaller personal projects
    miniProjects: Project[];
    // A collection of projects that aren't too impressive but which gave rise to my interest in serious software engineering
    babyProjects: Project[];
}

// Note: Each project contains a rating field which is a value from 0-10 that is a subjective
// representation of impressiveness
const projects: ProjectCollection = {
    mainProjects: [
        {
            title: 'Techsuite',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/techsuite-thumbnail.png',
            description: renderMarkdown(descriptions.techsuite),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://techsuite.dev',
                },
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=C4o2fOCq2cI',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Techsuite/',
                },
            ],
            technologies: [
                'react',
                'flask',
                'postgreSQL',
                'python',
                'javaScript',
                'sass',
                'socketio',
            ],
            overlay: {
                icon: assetImages.overlayImages.github, // Importing the image to display in the hover overlay
                label: 'View on GitHub', // Text to be displayed on hovering over the project image
                link: 'https://github.com/Tymotex/Techsuite', // Hyperlink to open in a new tab when image is clicked
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/techsuite-showcase.gif?raw=true',
            rating: 8,
        },
        {
            title: 'Tactile DS',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/Tactile-DS/master/Images/thumbnail.png',
            description: renderMarkdown(descriptions.tactileds),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://data-structures.xyz',
                },
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=iSJL-9pe-PY',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Tactile-DS',
                },
            ],
            technologies: ['c', 'ruby', 'perl', 'shell'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Tactile-DS',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/tactile-ds-showcase.gif?raw=true',
            rating: 10,
        },
        {
            title: 'Cosmica',
            thumbnail: 'https://tymotex.github.io/timz.dev/public/project-images/cosmica-title.png',
            description: renderMarkdown(descriptions.cosmica),
            furtherLinks: [
                {
                    label: 'Play Now',
                    link: 'https://tymotex.github.io/Cosmica/',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Cosmica',
                },
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=D7K1GOqns1w',
                },
                {
                    label: 'Google Play',
                    link: 'https://play.google.com/store/apps/details?id=com.Cosmica.Cosmica',
                },
            ],
            technologies: ['c#', 'unity'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Cosmica',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/cosmica-showcase.gif?raw=true',
            rating: 7,
        },
        {
            title: 'Galactic Ed',
            thumbnail: projectImages.galacticEd,
            description: renderMarkdown(descriptions.galacticed),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://galactic-ed.xyz/',
                },
                // {
                //     label: 'GitHub',
                //     link: 'https://github.com/galacticEd/platform',
                // },
            ],
            technologies: [
                'javascript',
                'nextJs',
                'react',
                'python',
                'express',
                'mongodb',
                'graphql',
            ],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'Visit',
                link: 'https://galactic-ed.xyz',
            },
            tags: ['team', 'ongoing'],
            rating: 9,
        },
        {
            title: 'Employ.me',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/Employ.me/master/images/screenshots/dashboard-index.png',
            description: renderMarkdown(descriptions.employMe),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://youtu.be/VoWjZLe-DFs',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Employ.me',
                },
                {
                    label: 'Visit',
                    link: 'https://employ-me.netlify.app/',
                },
            ],
            technologies: [
                'javascript',
                'react',
                'python',
                'flask',
                'mongodb',
                'materialUI',
                'sass',
            ],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Employ.me',
            },
            tags: ['team', 'uni', 'ongoing'],
            rating: 8,
        },
        {
            title: 'Structs.sh',
            thumbnail: projectImages.structs,
            description: renderMarkdown(descriptions.structs),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/csesoc/Structs.sh/',
                },
            ],
            technologies: ['javascript', 'react', 'typescript', 'mongodb', 'express'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/csesoc/Structs.sh/',
            },
            tags: ['team', 'ongoing'],
            rating: 9,
        },
    ],
    miniProjects: [
        {
            title: 'Hydroponix',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/Hydroponix/master/static/thumbnail.png',
            description: renderMarkdown(descriptions.hydroponix),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Hydroponix',
                },
            ],
            technologies: ['flask', 'influxdb', 'python', 'javaScript', 'bootstrap'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Hydroponix',
            },
            rating: 5,
        },
        {
            title: 'Autonomous Deliv-O-Bot',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/deliv-o-bot-thumbnail.png',
            description: renderMarkdown(descriptions.delivobot),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=ogIqlcZ1EoI',
                },
            ],
            technologies: ['arduino'],
            overlay: {
                icon: assetImages.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=ogIqlcZ1EoI',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/deliv-o-bot-showcase.gif?raw=true',
            tags: ['team', 'uni'],
            rating: 5,
        },
        {
            title: 'Get2Gether',
            thumbnail: 'https://raw.githubusercontent.com/Wal-eed/get2gether/dev/get2gether.png',
            description: renderMarkdown(descriptions.get2gether),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/wal-eed/get2gether/tree/dev',
                },
            ],
            technologies: ['javascript', 'react', 'python', 'flask', 'mongodb'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/wal-eed/get2gether/tree/dev',
            },
            tags: ['team', 'ongoing'],
            rating: 4,
        },
        {
            title: 'Educatory',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/educatory/main/public/showcase/visual.png',
            description: renderMarkdown(descriptions.educatory),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/wal-eed/get2gether/tree/dev',
                },
            ],
            technologies: ['typescript', 'javascript', 'react', 'nextJs', 'chakra', 'three'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/wal-eed/get2gether/tree/dev',
            },
            tags: ['team'],
            rating: 4,
        },
        {
            title: 'POSIX Shell to Perl 5 Transpiler',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png',
            description: renderMarkdown(descriptions.shellPerlTranspiler),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/ShellPerlTranspiler',
                },
            ],
            technologies: ['shell', 'perl'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/ShellPerlTranspiler',
            },
            tags: ['uni'],
            rating: 4,
        },
        {
            title: 'CS Nexus',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/CS-Nexus/master/public/thumbnail.png',
            description: renderMarkdown(descriptions.csnexus),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/CS-Nexus',
                },
            ],
            technologies: ['mongodb', 'express', 'nodejs', 'bootstrap', 'jQuery'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/CS-Nexus',
            },
            gif:
                'https://github.com/Tymotex/CS-Nexus/blob/master/public/cs-nexus-preview.gif?raw=true',
            rating: 4,
        },
        {
            title: 'Darkshade Crypt',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/darkshade-crypt-thumbnail.png',
            description: renderMarkdown(descriptions.darkshadeCrypt),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=MPnFIEm2_oM',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/DarkShadeCrypt',
                },
            ],
            technologies: ['java', 'javafx'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/DarkshadeCrypt',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/darkshade-crypt-showcase.gif?raw=true',
            tags: ['team', 'uni'],
            rating: 4,
        },
        {
            title: 'timz.dev',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/timz.dev/master/public/project-images/timz.dev.png',
            description: renderMarkdown(descriptions.timzdev),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://timz.dev',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/timz.dev',
                },
            ],
            technologies: ['react', 'gatsby', 'javaScript', 'materialUI', 'graphql'],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/timz.dev',
            },
            rating: 8,
        },
        {
            title: 'Ephemerald',
            thumbnail:
                'https://raw.githubusercontent.com/Wal-eed/ephemerald/main/client/public/ephemerald-thumbnail.png',
            description: renderMarkdown(descriptions.ephemerald),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://ephemerald.netlify.app/emulator/',
                },
                {
                    label: 'Pitch',
                    link: 'https://www.youtube.com/watch?v=7cMTyCDymE8',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Wal-eed/ephemerald',
                },
            ],
            overlay: {
                icon: assetImages.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Wal-eed/ephemerald',
            },
            technologies: ['react', 'typescript', 'chakra', 'nodejs', 'socketio'],
            tags: ['team', 'ongoing'],
            rating: 4,
        },
        // {
        //     title: "PyTorch Language Models",
        //     thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        //     description: `
        //         Kuzushiji character recognition, document classification and sentiment analysis.
        //     `,
        //     demoPromptText: "Try it out [unavailable]",
        //     demoLink: "",
        //     technologies: [
        //         "pytorch",
        //         "python"
        //     ],
        //     overlayIcon: images.overlayImages.github,
        //     overlayLabel: "View on GitHub",
        //     overlayLink: "https://github.com/Tymotex/DarkshadeCrypt"
        // }
    ],
    babyProjects: [
        {
            title: 'Astral Assault',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/astral-assault-thumbnail.png',
            description: renderMarkdown(descriptions.astralAssault),
            furtherLinks: [
                {
                    label: 'Play Now',
                    link: 'https://tymoteus.itch.io/astral-assault',
                },
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=L5HmrpmQbec',
                },
            ],
            technologies: ['c#', 'unity'],
            overlay: {
                icon: assetImages.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=L5HmrpmQbec',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/astral-assault-showcase.gif?raw=true',
            rating: 3,
        },
        {
            title: 'Blitz Breach',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/blitz-breach-thumbnail.png',
            description: renderMarkdown(descriptions.blitzBreach),
            furtherLinks: [
                {
                    label: 'Play Now',
                    link: 'https://tymoteus.itch.io/blitz-breach',
                },
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=RtHD5X44K0M',
                },
            ],
            technologies: ['c#', 'unity'],
            overlay: {
                icon: assetImages.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=RtHD5X44K0M',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/blitz-breach-showcase.gif?raw=true',
            rating: 1,
        },
        {
            title: 'Fallout 4 Mods',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/fallout-4-mod-thumbnail.png',
            description: renderMarkdown(descriptions.fallout4Mods),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://www.nexusmods.com/fallout4/users/29182470?tab=user+files',
                },
            ],
            technologies: [],
            overlay: {
                icon: assetImages.overlayImages.nexusmods,
                label: 'View on NexusMods',
                link: 'https://www.nexusmods.com/fallout4/users/29182470?tab=user+files',
            },
            rating: 1,
        },
        {
            title: 'Quote scraper',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/quote-scraper-thumbnail.png',
            description: renderMarkdown(descriptions.quoteScraper),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=5dCThWMT50o',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Quote-Scraper',
                },
            ],
            technologies: ['python', 'selenium'],
            overlay: {
                icon: assetImages.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=RtHD5X44K0M',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/quote-extractor-showcase.gif?raw=true',
            rating: 2,
        },
    ],
};

export default projects;
