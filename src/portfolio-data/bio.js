import interests from './interests-images';
import utils from './utils';
import workExperience from './work-experience';

const bio = {
    name: 'Tim Zhang',
    frontPageSummary: `
        3rd year software engineering student at UNSW.
    `,
    resumeURL: 'https://tymotex.github.io/timz.dev/public/resume/resume.pdf',
    transcriptURL: 'https://tymotex.github.io/timz.dev/public/resume/transcript.pdf',
    aboutDescription: `
        Hi! I'm Tim, a 3rd year student studying software engineering at UNSW. 
        As a determined learner, I take pleasure in diving deep into complex problems
        and becoming proficient in software technologies.
        I love the creative freedom in software engineering and building
        meaningful projects that benefit the world at large.
    `,
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
            name: 'Science Books',
            description: `
                Neuroscience, physics and biology
            `,
            image: interests.reading,
        },
        {
            name: 'Fingerstyle Guitar',
            description: `
                Game OSTs and other embarrassing songs 
            `,
            image: interests.guitar,
        },
        {
            name: 'Weightlifting',
            description: `
                Powerlifting, clean & jerks and snatches
            `,
            image: interests.powerlifting,
        },
        {
            name: 'Gardening',
            description: `
                Fruit trees, flowers, succulents and radishes (lol)
            `,
            image: interests.gardening,
        },
        {
            name: 'Origami',
            description: `
                Modular origami, roses and animals
            `,
            image: interests.origami,
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
        {
            name: 'WiseTech — Software Engineer Intern',
            // time: 'July 2021 - August 2021',
            description: utils.renderMarkdown(workExperience.wiseTechInternDesc),
        },
    ],
};

export default bio;
