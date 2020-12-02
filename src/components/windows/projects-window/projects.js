// Collection of projects in JSON format

// TODO: Add a technologies section to each project. Make it styled with pretty icons
// TODO: Improve the GitHub hover text, or just get rid of it
// TODO: Not all projects have a github link... What can I do instead?
// TODO: Organise these todos better. Put them on your notion page
// TODO: Make it so that clicking out of the window doesn't close it
// TODO: Chore: go through each project, 
/*
    Make it presentable -- Add demos where possible
    Add screenshots
    Improve the description
    On hover, play animation? 
*/

// A collection of personal projects that I spent significant amounts of time and effort on
const mainProjects = [
    {
        title: "Techsuite",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg",
        description: `
            Techsuite is a collaborative social app built with React, Flask and PostgreSQL.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://techsuite.dev"
    },
    {
        title: "Interactive Data Structures",
        thumbnail: "https://helpdeskgeek.com/wp-content/pictures/2019/10/code-1.jpg.optimal.jpg",
        description: `
            Interactive-DS is a suite of interactive data structures and algorithms written in C.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://data-structures.xyz"
    },
    {
        title: "Cosmica",
        thumbnail: "https://tymotex.github.io/timz.dev/public/cosmica-title.png",
        description: `
            A cross-platform sci-fi strategy game written in C# and built with the Unity game engine.
        `,
        demoPromptText: "Play online",
        demoLink: "https://tymotex.github.io/Cosmica/"
    }
];

// A collection of ongoing projects
const ongoingProjects = [

]

// A collection of projects that were either university projects or smaller personal projects
const miniProjects = [
    {
        title: "Hydroponix",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A Raspberry Pi project.
        `,
        demoPromptText: "View demo [Unavailable]",
        demoLink: ""
    },
    {
        title: "Autonomous Deliv-O-Bot",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            An autonomous delivery vehicle
        `,
        demoPromptText: "View demo video",
        demoLink: "https://www.youtube.com/watch?v=ogIqlcZ1EoI"
    },
    {
        title: "POSIX Shell to Perl 5 Transpiler",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A regex-based transpiler for mapping POSIX shell scripts to an equivalent Perl 5 script.  
        `,
        demoPromptText: "View demo [unavailable]",
        demoLink: ""
    },
    {
        title: "Darkshade Crypt",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A game built with Java and JavaFX.
        `,
        demoPromptText: "View demo",
        demoLink: "https://www.youtube.com/watch?v=MPnFIEm2_oM"
    },
    {
        title: "GitLite",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A lite version of the Git VCS, implemented entirely with POSIX shell scripts.
        `,
        demoPromptText: "View demo [unavailable]",
        demoLink: ""
    },
    {
        title: "Fractal Percussion",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A patatap clone using vector graphics and satisfying sound effects. Built with paper.js and howler.js.
        `,
        demoPromptText: "Try it out [unavailable]",
        demoLink: ""
    },
    {
        title: "PyTorch Language Models",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            Kuzushiji character recognition, document classification and sentiment analysis.
        `,
        demoPromptText: "Try it out [unavailable]",
        demoLink: ""
    }
];

// A collection of projects that aren't too impressive but which gave rise to my interest in 
// serious software engineering
const babyProjects = [
    {
        title: "Astral Assault",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            Astral Assault is a more dynamic, intensive take on the classic Space Invaders with flashier 
            visuals and a different game progression. Built with C# on the Unity game engine.
        `,
        demoPromptText: "Play online",
        demoLink: "https://tymoteus.itch.io/astral-assault"
    },
    {
        title: "Blitz Breach",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            Blitz Breach is an extended version of an old classic, Arkanoid. The player controls a paddle 
            and must maneouver a ball to smash all the presented blocks without missing a return. Built 
            with C# on the Unity game engine.
        `,
        demoPromptText: "Play online",
        demoLink: "https://tymoteus.itch.io/blitz-breach"
    },
    {
        title: "Fallout 4 Mods",
        thumbnail: "https://tymotex.github.io/timz.dev/public/fallout-4-nuka-cola.png",
        description: `
            A collection of mods I made which has collectively achieved over 80000+ downloads and
            4000+ endorsements in total.
        `,
        demoPromptText: "View",
        demoLink: "https://www.nexusmods.com/fallout4/users/29182470?tab=user+files"
    },
    {
        title: "Quote scraper",
        thumbnail: "https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ",
        description: `
            A Python web scraper, built with the Selenium browser automation library.
        `,
        demoPromptText: "View demo video",
        demoLink: "https://www.youtube.com/watch?v=5dCThWMT50o"
    }
];

export {
    mainProjects,
    ongoingProjects,
    miniProjects,
    babyProjects
};
