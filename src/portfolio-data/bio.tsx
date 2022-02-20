import React from 'react';
import { renderMarkdown } from './utils';
import aboutMe from './elevator-pitch.md';
import awards, { Award } from './awards/Awards';
import workExperiences, { WorkExperience } from './work-experience/work-experiences';
import interests, { Interest } from './interests/interests';

interface Bio {
    /** Your full name, eg. "Tim Zhang" */
    name: string;
    /** A brief sentence to summarise who you are to the viewer. */
    headline: string;
    /** Fields to display content on the about page */
    about: About;
    /** Some lines to display to the typewriter component */
    typewriterLines: string[];
    /** List of hobbies and career interest areas */
    interests: Interest[];
    /** Details on your work experiences. */
    workExperiences: WorkExperience[];
    /** Details about awards from university, work, etc. */
    awards: Award[];
}

interface About {
    /** URL to a viewable and downloadable resume pdf file */
    resumeUrl: string;
    /** URL to a viewable and downloadable transcript pdf file */
    transcriptUrl: string;
    /** An brief summary of who you are and why you've valuable */
    elevatorPitch: string;
}

const bio: Bio = {
    name: 'Tim Zhang',
    headline: `
        Final year computer science student at UNSW.
    `,
    about: {
        resumeUrl: 'https://tymotex.github.io/timz.dev/public/resume/resume.pdf',
        transcriptUrl: 'https://tymotex.github.io/timz.dev/public/resume/transcript.pdf',
        elevatorPitch: aboutMe,
    },
    typewriterLines: [
        '<FullstackDev />',
        '<GoogleIntern />',
        '<AspiringSRE />',
        '<HobbyistGameDev />',
        '<COMPTutor />',
    ],
    interests,
    workExperiences,
    awards,
};

export default bio;
