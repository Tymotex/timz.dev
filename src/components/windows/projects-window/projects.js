// Collection of projects in JSON format

// TODO: Improve the GitHub hover text, or just get rid of it
// TODO: Not all projects have a github link... What can I do instead?
// TODO: Organise these todos better. Put them on your notion page
// TODO: update notion project page for timz.dev
// TODO: serve project images and gifs 'locally' rather than hotlinking 

// TODO: Add a read more hyperlink that takes the user to a separate blog suburl. Use React Router and see if you can make it work here. Search up Gatsby React Router

// Importing a set of images to be displayed in the hover overlay
import images from '../../../images';
import descriptions from './project-descriptions';

const projects = {
    mainProjects: [       // A collection of personal projects that I spent significant amounts of time and effort on
        {
            title: "Techsuite",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/techsuite-thumbnail.png",
            description: descriptions.techsuite,
            furtherLinks: [
                {
                    label: "Try it out",
                    link: "https://techsuite.dev",
                },
                {
                    label: "Demo video",
                    link: "https://www.google.com"
                }
            ],
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
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/techsuite-showcase.gif?raw=true"
        },
        {
            title: "Tactile DS",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/tactile-ds-thumbnail.png",
            description: descriptions.tactileds,
            furtherLinks: [
                {
                    label: "Try it out",
                    link: "https://data-structures.xyz",
                }
            ],
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
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/tactile-ds-showcase.gif?raw=true"
        },
        {
            title: "Cosmica",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/cosmica-title.png",
            description: descriptions.cosmica,
            furtherLinks: [
                {
                    label: "Play online",
                    link: "https://tymotex.github.io/Cosmica/",
                }
            ],
            technologies: [
                "c#",
                "unity"   
            ],
            overlay: {
                icon: images.overlayImages.github,                    
                label: "View on GitHub",
                link: "https://github.com/Tymotex/Cosmica"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/cosmica-showcase.gif?raw=true"
        }
    ],
    miniProjects: [     // A collection of projects that were either university projects or smaller personal projects
        {
            title: "Galactic Education",
            thumbnail: "https://raw.githubusercontent.com/kishek2000/accentureHackathon/master/galactic-education/public/showcaseThumbnail.PNG",
            description: descriptions.galacticed,
            furtherLinks: [],
            technologies: [
                "javascript",
                "nextJs",
                "react"
            ],
            overlay: {
                icon: images.overlayImages.github,                    
                label: "View on GitHub",
                link: "https://github.com/kishek2000/accentureHackathon"   
            }
        },
        {
            title: "Hydroponix",
            thumbnail: "https://raw.githubusercontent.com/Tymotex/Hydroponix/master/static/thumbnail.png",
            description: descriptions.hydroponix,
            furtherLinks: [],
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
            description: descriptions.delivobot,
            furtherLinks: [
                {
                    label: "View demo video",
                    link: "https://www.youtube.com/watch?v=ogIqlcZ1EoI"
                }
            ],
            technologies: [
                "arduino"
            ],
            overlay: {
                icon: images.overlayImages.youtube,                    
                label: "View on YouTube",
                link: "https://www.youtube.com/watch?v=ogIqlcZ1EoI"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/deliv-o-bot-showcase.gif?raw=true"
        },
        {
            title: "POSIX Shell to Perl 5 Transpiler",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png",
            description: descriptions.shellPerlTranspiler,
            furtherLinks: [],
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
            title: "CS Nexus",
            thumbnail: "https://raw.githubusercontent.com/Tymotex/CS-Nexus/master/public/thumbnail.png",
            description: descriptions.csnexus,
            furtherLinks: [],
            technologies: [
                "mongodb",
                "express",
                "nodejs",
                "bootstrap",
                "jQuery"
            ],
            overlay: {
                icon: images.overlayImages.github,
                label: "View on GitHub",
                link: "https://github.com/Tymotex/CS-Nexus"
            },
            gif: "https://github.com/Tymotex/CS-Nexus/blob/master/public/cs-nexus-preview.gif?raw=true"
        },
        {
            title: "Darkshade Crypt",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/darkshade-crypt-thumbnail.png",
            description: descriptions.darkshadeCrypt,
            furtherLinks: [
                {
                    label: "View demo",
                    link: "https://www.youtube.com/watch?v=MPnFIEm2_oM"
                }
            ],
            technologies: [
                "java",
                "javafx"
            ],
            overlay: {
                icon: images.overlayImages.github,                    
                label: "View on GitHub",
                link: "https://github.com/Tymotex/DarkshadeCrypt"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/darkshade-crypt-showcase.gif?raw=true"
        },
        {
            title: "timz.dev",
            thumbnail: "https://raw.githubusercontent.com/Tymotex/timz.dev/master/public/frontpage.png",
            description: descriptions.timzdev,
            furtherLinks: [],
            technologies: [
                "react",
                "gatsby",
                "javaScript"
            ],
            overlay: {
                icon: images.overlayImages.github,                    
                label: "View on GitHub",
                link: "https://github.com/Tymotex/timz.dev"   
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
    ],
    ongoingProjects: [    // A collection of ongoing projects

    ],
    babyProjects: [     // A collection of projects that aren't too impressive but which gave rise to my interest in serious software engineering
        {
            title: "Astral Assault",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/astral-assault-thumbnail.png",
            description: descriptions.astralAssault,
            furtherLinks: [
                {
                    label: "Play online",
                    link: "https://tymoteus.itch.io/astral-assault"
                }
            ],
            technologies: [
                "c#",
                "unity"   
            ],
            overlay: {
                icon: images.overlayImages.youtube,                    
                label: "View on YouTube",
                link: "https://www.youtube.com/watch?v=L5HmrpmQbec"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/astral-assault-showcase.gif?raw=true"
        },
        {
            title: "Blitz Breach",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/blitz-breach-thumbnail.png",
            description: descriptions.blitzBreach,
            furtherLinks: [
                {
                    label: "Play online",
                    link: "https://tymoteus.itch.io/blitz-breach"
                }
            ],
            technologies: [
                "c#",
                "unity"   
            ],
            overlay: {
                icon: images.overlayImages.youtube,                    
                label: "View on YouTube",
                link: "https://www.youtube.com/watch?v=RtHD5X44K0M"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/blitz-breach-showcase.gif?raw=true"
        },
        {
            title: "Fallout 4 Mods",
            thumbnail: "https://tymotex.github.io/timz.dev/public/project-images/fallout-4-mod-thumbnail.png",
            description: descriptions.fallout4Mods,
            furtherLinks: [
                {
                    label: "View",
                    link: "https://www.nexusmods.com/fallout4/users/29182470?tab=user+files"
                }
            ],
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
            description: descriptions.quoteScraper,
            furtherLinks: [
                {
                    label: "View demo",
                    link: "https://www.youtube.com/watch?v=5dCThWMT50o"
                }
            ],
            technologies: [
                "python",
                "selenium"
            ],
            overlay: {
                icon: images.overlayImages.youtube,                    
                label: "View on YouTube",
                link: "https://www.youtube.com/watch?v=RtHD5X44K0M"   
            },
            gif: "https://github.com/Tymotex/timz.dev/blob/master/public/project-images/quote-extractor-showcase.gif?raw=true"
        }
    ]
}

export default projects;
