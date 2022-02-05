import React from 'react';
import interests from './interests-images';
import { renderMarkdown } from './utils';
import workExperience from './work-experience';
import aboutMe from './about-me.md';
import companyLogos from './work-experience/logos';

const bio = {
    name: 'Tim Zhang',
    frontPageSummary: `
        Final year computer science student at UNSW.
    `,
    resumeURL: 'https://tymotex.github.io/timz.dev/public/resume/resume.pdf',
    transcriptURL: 'https://tymotex.github.io/timz.dev/public/resume/transcript.pdf',
    aboutDescription: renderMarkdown(aboutMe),
    typewriterLines: [
        '<FullstackDev />',
        '<GoogleIntern />',
        '<HobbyistGameDev />',
        '<COMPTutor />',
    ],
    interests: [
        {
            name: 'Game Development',
            description: `
                Sci-fi, strategy, RPGs and retro.
            `,
            image: interests.gameDev,
        },
        {
            name: 'Reading',
            description: `
                Programmer blogs, science books, biographies.
            `,
            image: interests.reading,
        },
        {
            name: 'Acoustic & Electric Guitar',
            description: `
                Alternative/Indie music.
            `,
            image: interests.guitar,
        },
        {
            name: 'Lifting',
            description: `
                Clean & jerks, snatches and powerlifting.
            `,
            image: interests.powerlifting,
        },
        {
            name: 'Electronics',
            description: `
                Raspberry pi, home automation.
            `,
            image: interests.electronics,
        },
        {
            name: 'Listening to Podcasts',
            description: `
                Lex Fridman, Andrew Huberman, Jocko Willink, Sam Harris.
            `,
            image: interests.podcasts,
        },
        {
            name: 'Tutoring',
            description: `
                Programming, physics and maths.
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
                Modular origami.
            `,
            image: interests.origami,
        },
    ],
    workExperience: [
        {
            name: 'Google — Software Engineering Intern, SRE (Full-Time)',
            time: 'November 2021 - February 2022 (3 months)',
            logo: companyLogos.google,
            description: renderMarkdown(workExperience.googleInternDesc)
        },
        {
            name: 'WiseTech Global — Associate Software Developer (Full-Time)',
            time: 'July 2021 - October 2021 (3 months)',
            logo: companyLogos.wisetech,
            description: renderMarkdown(workExperience.wiseTechInternDesc),
        },
        {
            name: 'Accenture — Technical Architect (Casual)',
            time: 'May 2021 - Present',
            logo: companyLogos.accenture,
            description: renderMarkdown(workExperience.accentureInternDesc),
        },
        {
            name: 'UNSW — Academic Tutor, Data Structures and Algorithms (Casual)',
            time: 'June 2020 - May 2021 (1 year)',
            logo: companyLogos.unsw,
            description: renderMarkdown(workExperience.academicTutorDesc),
        },
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
