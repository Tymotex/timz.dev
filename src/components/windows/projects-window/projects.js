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
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/techsuite-thumbnail.png",
        description: `
            Techsuite is a collaborative social app built with React, Flask and PostgreSQL.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://techsuite.dev"
    },
    {
        title: "Tactile DS",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/tactile-ds-thumbnail.png",
        description: `
            Tactile DS is a web-based terminal interface that allows you to experiment with a suite of interactive 
            data structures and algorithms written in C.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://data-structures.xyz"
    },
    {
        title: "Cosmica",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/cosmica-title.png",
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
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/deliv-o-bot-thumbnail.png",
        description: `
            An autonomous object delivery vehicle, built with the Arduino Uno Rev3. 
            The vehicle determines where the delivery and pick-up points are using a sound sensor.
            The reel and wheels of the vehicle use 5V stepper motors and the claw is operated by
            a 6V metal gear servo motor. 
        `,
        demoPromptText: "View demo video",
        demoLink: "https://www.youtube.com/watch?v=ogIqlcZ1EoI"
    },
    {
        title: "POSIX Shell to Perl 5 Transpiler",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png",
        description: `
            A regex-based transpiler for mapping POSIX shell scripts to an equivalent Perl 5 script.  
        `,
        demoPromptText: "View demo [unavailable]",
        demoLink: ""
    },
    {
        title: "Darkshade Crypt",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/darkshade-crypt-thumbnail.png",
        description: `
            A 2D dungeon crawler game, written in Java. This uni project involved implementing
            several design patterns such as strategy, composite, observer and template from scratch. This game
            also involved implementing dynamic pathfinding algorithms, unit testing with JUnit 5 and building
            a GUI with JavaFX.     
        `,
        demoPromptText: "View demo",
        demoLink: "https://www.youtube.com/watch?v=MPnFIEm2_oM"
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
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/astral-assault-thumbnail.png",
        description: `
            Astral Assault is a more dynamic, intensive take on the classic Space Invaders with flashier 
            visuals and a different game progression. Built with C# on the Unity game engine.
        `,
        demoPromptText: "Play online",
        demoLink: "https://tymoteus.itch.io/astral-assault"
    },
    {
        title: "Blitz Breach",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/blitz-breach-thumbnail.png",
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
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/fallout-4-nuka-cola.png",
        description: `
            A collection of Fallout 4 mods I made which has collectively achieved over 80000+ downloads and
            4000+ endorsements in total on Nexusmods.
        `,
        demoPromptText: "View",
        demoLink: "https://www.nexusmods.com/fallout4/users/29182470?tab=user+files"
    },
    {
        title: "Quote scraper",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/quote-scraper-thumbnail.png",
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
