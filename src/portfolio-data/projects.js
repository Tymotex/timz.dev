// Collection of my personal projects in JSON format

// Importing a set of images to be displayed in the hover overlay
import images from '../images';
import descriptions from './project-descriptions';
import utils from './utils';

export default {
    mainProjects: [
        // A collection of personal projects that I spent significant amounts of time and effort on
        {
            title: 'Techsuite',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/techsuite-thumbnail.png',
            description: utils.renderMarkdown(descriptions.techsuite),
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
            technologies: ['react', 'flask', 'postgreSQL', 'python', 'javaScript', 'sass'],
            overlay: {
                icon: images.overlayImages.github, // Importing the image to display in the hover overlay
                label: 'View on GitHub', // Text to be displayed on hovering over the project image
                link: 'https://github.com/Tymotex/Techsuite', // Hyperlink to open in a new tab when image is clicked
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/techsuite-showcase.gif?raw=true',
        },
        {
            title: 'Tactile DS',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/tactile-ds-thumbnail.png',
            description: utils.renderMarkdown(descriptions.tactileds),
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
                    link: 'https://github.com/Tymotex/DataStructures',
                },
            ],
            technologies: ['c', 'ruby', 'perl', 'shell'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/DataStructures',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/tactile-ds-showcase.gif?raw=true',
        },
        {
            title: 'Cosmica',
            thumbnail: 'https://tymotex.github.io/timz.dev/public/project-images/cosmica-title.png',
            description: utils.renderMarkdown(descriptions.cosmica),
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
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Cosmica',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/cosmica-showcase.gif?raw=true',
        },
        {
            title: 'Galactic Ed',
            thumbnail:
                'https://raw.githubusercontent.com/kishek2000/accentureHackathon/master/images/showcaseThumbnail.png',
            description: utils.renderMarkdown(descriptions.galacticed),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'http://galactic-ed.xyz/',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/kishek2000/accentureHackathon',
                },
            ],
            technologies: ['javascript', 'nextJs', 'react', 'python', 'flask', 'mongodb'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/kishek2000/accentureHackathon',
            },
            tags: ['team', 'ongoing'],
        },
        {
            title: 'Employ.me',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/JobTracker/master/SourceCode_and_Documentation/images/screenshots/dashboard-index.png',
            description: utils.renderMarkdown(descriptions.employMe),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://youtu.be/VoWjZLe-DFs',
                },
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/JobTracker',
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
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/JobTracker',
            },
            tags: ['team', 'uni', 'ongoing'],
        },
        {
            title: 'Structs.sh',
            thumbnail:
                'https://raw.githubusercontent.com/csesoc/Structs.sh/master/public/structs.png',
            description: utils.renderMarkdown(descriptions.structs),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/csesoc/Structs.sh/',
                },
            ],
            technologies: ['javascript', 'react'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/csesoc/Structs.sh/',
            },
            tags: ['team', 'ongoing'],
        },
    ],
    miniProjects: [
        // A collection of projects that were either university projects or smaller personal projects
        {
            title: 'Hydroponix',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/Hydroponix/master/static/thumbnail.png',
            description: utils.renderMarkdown(descriptions.hydroponix),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/Hydroponix',
                },
            ],
            technologies: ['flask', 'influxdb', 'python', 'javaScript', 'bootstrap'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/Hydroponix',
            },
        },
        {
            title: 'Autonomous Deliv-O-Bot',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/deliv-o-bot-thumbnail.png',
            description: utils.renderMarkdown(descriptions.delivobot),
            furtherLinks: [
                {
                    label: 'Demo',
                    link: 'https://www.youtube.com/watch?v=ogIqlcZ1EoI',
                },
            ],
            technologies: ['arduino'],
            overlay: {
                icon: images.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=ogIqlcZ1EoI',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/deliv-o-bot-showcase.gif?raw=true',
            tags: ['team', 'uni'],
        },
        {
            title: 'Get2Gether',
            thumbnail: 'https://raw.githubusercontent.com/Wal-eed/get2gether/dev/get2gether.png',
            description: utils.renderMarkdown(descriptions.get2gether),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/wal-eed/get2gether/tree/dev',
                },
            ],
            technologies: ['javascript', 'react', 'python', 'flask', 'mongodb'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/wal-eed/get2gether/tree/dev',
            },
            tags: ['team', 'ongoing'],
        },
        {
            title: 'POSIX Shell to Perl 5 Transpiler',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png',
            description: utils.renderMarkdown(descriptions.shellPerlTranspiler),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/ShellPerlTranspiler',
                },
            ],
            technologies: ['shell', 'perl'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/ShellPerlTranspiler',
            },
            tags: ['uni'],
        },
        {
            title: 'CS Nexus',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/CS-Nexus/master/public/thumbnail.png',
            description: utils.renderMarkdown(descriptions.csnexus),
            furtherLinks: [
                {
                    label: 'GitHub',
                    link: 'https://github.com/Tymotex/CS-Nexus',
                },
            ],
            technologies: ['mongodb', 'express', 'nodejs', 'bootstrap', 'jQuery'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/CS-Nexus',
            },
            gif:
                'https://github.com/Tymotex/CS-Nexus/blob/master/public/cs-nexus-preview.gif?raw=true',
        },
        {
            title: 'Darkshade Crypt',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/darkshade-crypt-thumbnail.png',
            description: utils.renderMarkdown(descriptions.darkshadeCrypt),
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
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/DarkshadeCrypt',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/darkshade-crypt-showcase.gif?raw=true',
            tags: ['team', 'uni'],
        },
        {
            title: 'timz.dev',
            thumbnail:
                'https://raw.githubusercontent.com/Tymotex/timz.dev/master/public/frontpage.png',
            description: utils.renderMarkdown(descriptions.timzdev),
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
            technologies: ['react', 'gatsby', 'javaScript', 'materialUI'],
            overlay: {
                icon: images.overlayImages.github,
                label: 'View on GitHub',
                link: 'https://github.com/Tymotex/timz.dev',
            },
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
    ongoingProjects: [
        // A collection of ongoing projects
    ],
    babyProjects: [
        // A collection of projects that aren't too impressive but which gave rise to my interest in serious software engineering
        {
            title: 'Astral Assault',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/astral-assault-thumbnail.png',
            description: utils.renderMarkdown(descriptions.astralAssault),
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
                icon: images.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=L5HmrpmQbec',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/astral-assault-showcase.gif?raw=true',
        },
        {
            title: 'Blitz Breach',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/blitz-breach-thumbnail.png',
            description: utils.renderMarkdown(descriptions.blitzBreach),
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
                icon: images.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=RtHD5X44K0M',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/blitz-breach-showcase.gif?raw=true',
        },
        {
            title: 'Fallout 4 Mods',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/fallout-4-mod-thumbnail.png',
            description: utils.renderMarkdown(descriptions.fallout4Mods),
            furtherLinks: [
                {
                    label: 'Visit',
                    link: 'https://www.nexusmods.com/fallout4/users/29182470?tab=user+files',
                },
            ],
            technologies: [],
            overlay: {
                icon: images.overlayImages.nexusmods,
                label: 'View on NexusMods',
                link: 'https://www.nexusmods.com/fallout4/users/29182470?tab=user+files',
            },
        },
        {
            title: 'Quote scraper',
            thumbnail:
                'https://tymotex.github.io/timz.dev/public/project-images/quote-scraper-thumbnail.png',
            description: utils.renderMarkdown(descriptions.quoteScraper),
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
                icon: images.overlayImages.youtube,
                label: 'View on YouTube',
                link: 'https://www.youtube.com/watch?v=RtHD5X44K0M',
            },
            gif:
                'https://github.com/Tymotex/timz.dev/blob/master/public/project-images/quote-extractor-showcase.gif?raw=true',
        },
    ],
};
