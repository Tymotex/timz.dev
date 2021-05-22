import interests from './interests-images';
import utils from './utils';
import workExperience from './work-experience';

const bio = {
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
            name: 'Coding',
            description: `
                
            `,
            image: interests.coding,
        },
        {
            name: 'Deep learning',
            description: `

            `,
            image: interests.deepLearning,
        },
        {
            name: 'Electronics',
            description: `
            
            `,
            image: interests.electronics,
        },
        {
            name: 'Game development',
            description: `
            
            `,
            image: interests.gameDev,
        },
        {
            name: 'Science books & biographies',
            description: `
            
            `,
            image: interests.reading,
        },
        {
            name: 'Fingerstyle guitar',
            description: `
            
            `,
            image: interests.guitar,
        },
        {
            name: 'Powerlifting',
            description: `
            
            `,
            image: interests.powerlifting,
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
        {
            name: 'WiseTech — Software Engineer Intern',
            // time: 'July 2021 - August 2021',
            description: utils.renderMarkdown(workExperience.wiseTechInternDesc),
        },
    ],
};

export default bio;
