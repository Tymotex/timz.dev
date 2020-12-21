// Collection of projects in JSON format

// TODO: Improve the GitHub hover text, or just get rid of it
// TODO: Not all projects have a github link... What can I do instead?
// TODO: Organise these todos better. Put them on your notion page

// TODO: Chore: go through each project, 
/*
    Make it presentable -- Add demos where possible
    Add screenshots
    Improve the description
    On hover, play animation? 
*/

// TODO: restyle the project technology chips
// TODO: Fill out remaining project technologies 
// TODO: update notion project page for timz.dev
// TODO: make the on-hover image link customisable - make it take in an image, a link and a label text
// TODO: add CS Nexus to this list, maybe on the resume as well even
// TODO: investigate play on hover effect: https://codepen.io/QDeltaE/pen/VWGYOB

// Importing a set of images to be displayed in the hover overlay
import images from '../../../images';

// A collection of personal projects that I spent significant amounts of time and effort on
const mainProjects = [
    {
        title: "Techsuite",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/techsuite-thumbnail.png",
        description: `
            Techsuite is a collaborative social app built with React, Flask and PostgreSQL.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://techsuite.dev",
        technologies: [
            "react",
            "flask",
            "postgreSQL",
            "python",
            "javaScript",
            "sass"
        ],
        overlay: {
            icon: images.overlayImages.github,             // Importing the image to display in the hover overlay
            label: "View on GitHub",                       // Text to be displayed on hovering over the project image 
            link: "https://github.com/Tymotex/Techsuite"   // Hyperlink to open in a new tab when image is clicked
        }
    },
    {
        title: "Tactile DS",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/tactile-ds-thumbnail.png",
        description: `
            Tactile DS is a web-based terminal interface that allows you to experiment with a suite of interactive 
            data structures and algorithms written in C.
        `,
        demoPromptText: "Try it out",
        demoLink: "https://data-structures.xyz",
        technologies: [
            "c",
            "ruby",
            "perl",
            "shell"
        ],
        overlay: {
            icon: images.overlayImages.github,                    
            label: "View on GitHub",
            link: "https://github.com/Tymotex/DataStructures"   
        }
    },
    {
        title: "Cosmica",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/cosmica-title.png",
        description: `
            A cross-platform sci-fi strategy game written in C# and built with the Unity game engine.
        `,
        demoPromptText: "Play online",
        demoLink: "https://tymotex.github.io/Cosmica/",
        technologies: [
            "c#",
            "unity"   
        ],
        overlay: {
            icon: images.overlayImages.github,                    
            label: "View on GitHub",
            link: "https://github.com/Tymotex/Cosmica"   
        }
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
            An IoT automated plant propagation system built with Python on the Raspberry Pi Zero W 
            with InfluxDB, Flask and other libraries.
        `,
        demoPromptText: "View demo [Unavailable]",
        demoLink: "",
        technologies: [
            "flask",
            "influxdb",
            "python",
            "javaScript",
            "bootstrap"
        ],
        overlay: {
            icon: images.overlayImages.github,                    
            label: "View on GitHub",
            link: "https://github.com/Tymotex/Hydroponix"   
        }
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
        demoLink: "https://www.youtube.com/watch?v=ogIqlcZ1EoI",
        technologies: [
            "arduino"
        ],
        overlay: {
            icon: images.overlayImages.youtube,                    
            label: "View on YouTube",
            link: "https://www.youtube.com/watch?v=ogIqlcZ1EoI"   
        }
    },
    {
        title: "POSIX Shell to Perl 5 Transpiler",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png",
        description: `
            A regex-based transpiler for mapping POSIX shell scripts to an equivalent Perl 5 script.  
        `,
        demoPromptText: "View demo [unavailable]",
        demoLink: "",
        technologies: [
            "shell",
            "perl"
        ],
        overlay: {
            icon: images.overlayImages.github,                    
            label: "View on GitHub",
            link: "https://github.com/Tymotex/ShellPerlTranspiler"   
        }
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
        demoLink: "https://www.youtube.com/watch?v=MPnFIEm2_oM",
        technologies: [
            "java"
        ],
        overlay: {
            icon: images.overlayImages.github,                    
            label: "View on GitHub",
            link: "https://github.com/Tymotex/DarkshadeCrypt"   
        }
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
        demoLink: "https://tymoteus.itch.io/astral-assault",
        technologies: [
            "c#",
            "unity"   
        ],
        overlay: {
            icon: images.overlayImages.youtube,                    
            label: "View on YouTube",
            link: "https://www.youtube.com/watch?v=L5HmrpmQbec"   
        }
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
        demoLink: "https://tymoteus.itch.io/blitz-breach",
        technologies: [
            "c#",
            "unity"   
        ],
        overlay: {
            icon: images.overlayImages.youtube,                    
            label: "View on YouTube",
            link: "https://www.youtube.com/watch?v=RtHD5X44K0M"   
        }
    },
    {
        title: "Fallout 4 Mods",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/fallout-4-nuka-cola.png",
        description: `
            A collection of Fallout 4 mods I made which has collectively achieved over 80000+ downloads and
            4000+ endorsements in total on Nexusmods.
        `,
        demoPromptText: "View",
        demoLink: "https://www.nexusmods.com/fallout4/users/29182470?tab=user+files",
        technologies: [],
        overlay: {
            icon: images.overlayImages.nexusmods,                    
            label: "View on NexusMods",
            link: "https://www.nexusmods.com/fallout4/users/29182470?tab=user+files"   
        }
    },
    {
        title: "Quote scraper",
        thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/quote-scraper-thumbnail.png",
        description: `
            A Python web scraper, built with the Selenium browser automation library.
        `,
        demoPromptText: "View demo video",
        demoLink: "https://www.youtube.com/watch?v=5dCThWMT50o",
        technologies: [
            "python",
            "selenium"
        ],
        overlay: {
            icon: images.overlayImages.youtube,                    
            label: "View on YouTube",
            link: "https://www.youtube.com/watch?v=RtHD5X44K0M"   
        }
    }
];

export {
    mainProjects,
    ongoingProjects,
    miniProjects,
    babyProjects
};
