import React from 'react';
import interests from './interests-images';
import utils from './utils';
import workExperience from './work-experience';
import aboutMe from './about-me.md';
import companyLogos from './work-experience/logos';

const bio = {
    name: 'Tim Zhang',
    frontPageSummary: `
        3rd year software engineering student at UNSW.
    `,
    resumeURL: 'https://tymotex.github.io/timz.dev/public/resume/resume.pdf',
    transcriptURL: 'https://tymotex.github.io/timz.dev/public/resume/transcript.pdf',
    aboutDescription: utils.renderMarkdown(aboutMe),
    typewriterLines: [
        '<FullstackDev />',
        '<AspiringSRE />',
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
            name: 'UNSW — Casual Academic Tutor (Data Structures and Algorithms)',
            time: 'June 2020 - May 2021 (1 year)',
            logo: companyLogos.unsw,
            description: utils.renderMarkdown(workExperience.academicTutorDesc),
        },
        {
            name: 'Accenture — Technical Architect',
            time: 'May 2021 - September 2021 (5 months)',
            logo: companyLogos.accenture,
            description: utils.renderMarkdown(workExperience.accentureInternDesc),
        },
        {
            name: 'WiseTech Global — Associate Software Developer',
            time: 'July 2021 - October 2021 (3 months)',
            logo: companyLogos.wisetech,
            description: utils.renderMarkdown(workExperience.wiseTechInternDesc),
        },
        {
            name: 'Google — Software Engineering Intern (SRE)',
            time: 'November 2021 - February 2022 (3 months)',
            logo: companyLogos.google,
            description: utils.renderMarkdown(workExperience.googleInternDesc)
        }
    ],
    awards: [
        {
            name: "Faculty of Engineering Dean's Award",
            time: '2020',
            description:
                <>For being among the top 25 highest performing students across all 1st/2nd year students in UNSW's School of Engineering.</>,
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
            time: '2021',
            description:
                'Worked in a team of 4 to develop a prototype for an education platform driven by deep learning that automatically tailors a curriculum for young children with ASD. Achieved 1st place out of 37 other participating teams from across Australia.',
        },
        {
            name: <a href="https://raw.githubusercontent.com/Tymotex/timz.dev/master/src/portfolio-data/awards/chronicle-certificate.png">Google Chronicle Hackathon 2nd Place</a>,
            time: '2021',
            description:
                <>
                    <p>Worked in a team of 4 to build a proof-of-concept application for an automated time scheduler system. This project won 2nd place out of around 40 other teams.</p>
                    <p>Prototype viewable <a href="https://get-2-gether.netlify.app/">here</a>.</p>
                </>,
        },
        {
            name: "CSESoc Annual Flagship Hackathon 2nd Place",
            time: '2021',
            description:
                <>
                    <p>Worked in a team of 4 to develop a prototype for an educational content delivery web app that recommends lessons to students with learning disabilities. We achieved 2nd place out of more than 60 participating teams.</p>
                    <p>Prototype viewable <a href="https://educatory.netlify.app/">here</a> and pitch viewable <a href="https://youtu.be/wUZMYPQURrw">here</a></p>
                </>,
        },
        {
            name: 'Academic Awards Achievement (Scholarship)',
            time: '2019',
        },
    ],
};

export default bio;
