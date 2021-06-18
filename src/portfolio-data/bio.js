import interests from './interests-images';
import utils from './utils';
import workExperience from './work-experience';
import aboutMe from './about-me.md';

const bio = {
    name: 'Tim Zhang',
    frontPageSummary: `
        3rd year software engineering student at UNSW.
    `,
    resumeURL: 'https://tymotex.github.io/timz.dev/public/resume/resume.pdf',
    transcriptURL: 'https://tymotex.github.io/timz.dev/public/resume/transcript.pdf',
    aboutDescription: utils.renderMarkdown(aboutMe),
    typewriterLines: [
        '<FullstackEngineer />',
        '<AspiringDataScientist />',
        '<HobbyistGameDev />',
        '<COMPTutor />',
    ],
    interests: [
        {
            name: 'Game Development',
            description: `
                Sci-fi, strategy, RPGs and retro
            `,
            image: interests.gameDev,
        },
        // {
        //     name: 'Deep learning',
        //     description: `
        //         Reinforcement learning, NLP, OCR
        //     `,
        //     image: interests.deepLearning,
        // },
        {
            name: 'Reading',
            description: `
                Science books, biographies
            `,
            image: interests.reading,
        },
        {
            name: 'Fingerstyle Guitar',
            description: `
                Alternative/Indie songs and Game OSTs
            `,
            image: interests.guitar,
        },
        {
            name: 'Weightlifting',
            description: `
                Clean & jerks, snatches and powerlifting exercises
            `,
            image: interests.powerlifting,
        },
        {
            name: 'Electronics',
            description: `
                Raspberry pi, Arduino projects, home automation
            `,
            image: interests.electronics,
        },
        {
            name: 'Listening to Podcasts',
            description: `
                Lex Fridman, Jocko Willink, Sam Harris, Jordan Peterson
            `,
            image: interests.podcasts,
        },
        {
            name: 'Teaching',
            description: `
                Coding, physics and maths
            `,
            image: interests.teaching,
        },
        {
            name: 'Gardening',
            description: `
                
            `,
            image: interests.gardening,
        },
        {
            name: 'Origami',
            description: `
                
            `,
            image: interests.origami,
        },
    ],
    workExperience: [
        {
            name: 'UNSW — Academic Tutor (Data Structures and Algorithms)',
            time: 'June 2020 - May 2021 (1 year)',
            description: utils.renderMarkdown(workExperience.academicTutorDesc),
        },
        {
            name: 'Accenture — Technical Architect',
            time: 'May 2021 - August 2021 (3 months)',
            description: utils.renderMarkdown(workExperience.accentureInternDesc),
        },
        // {
        //     name: 'WiseTech — Software Engineer Intern',
        //     // time: 'July 2021 - August 2021',
        //     description: utils.renderMarkdown(workExperience.wiseTechInternDesc),
        // },
    ],
    awards: [
        {
            name: "Faculty of Engineering Dean's Award",
            time: '2020',
            description:
                "For being among the top 25 highest performing students across all 1st/2nd year students in UNSW's School of Engineering.",
        },
        {
            name: 'Atlassian 1st Place Prize for Data Structures and Algorithms',
            time: '2020',
            description: 'For the best performance in COMP2521 (S0382E)',
        },
        {
            name: 'Macquarie Bank Prize for 1st Place in SENG2021',
            time: '2021',
            description:
                'Led a team of 5 in developing an automated job application tracking system and achieved 1st place out of 30 other teams.',
        },
        {
            name: "Accenture 'Hack for Good' Hackathon 1st Place",
            time: '2020',
            description:
                'Worked in a team of 4 to develop a prototype for an education platform driven by deep learning that automatically tailors a curriculum for young children with ASD. Achieved 1st place out of 37 other participating teams from across Australia.',
        },
        {
            name: 'Google Chronicle Hackathon 2nd Place',
            time: '2020',
            description:
                'Worked in a team of 4 to build a proof-of-concept application for an automated time scheduler system. This project won 2nd place out of around 40 other teams.',
        },
        {
            name: 'Academic Awards Achievement (Scholarship)',
            time: '2019',
        },
    ],
};

export default bio;
