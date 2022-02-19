import companyLogos from './logos';
import workExperience from './index';

export interface WorkExperience {
    name: string;
    team?: string;
    time: string;
    logoUrl?: string;
    descriptionMd: string;
}

const workExperiences: WorkExperience[] = [
    {
        name: 'Google — Software Engineering Intern (Full-Time)',
        team: 'Data Acquisition (Site Reliability Engineering)',
        time: 'November 2021 - February 2022 (3 months)',
        logoUrl: companyLogos.google,
        descriptionMd: workExperience.googleInternDesc,
    },
    {
        name: 'WiseTech Global — Associate Software Developer (Full-Time)',
        team: 'WiseTech Academy',
        time: 'July 2021 - October 2021 (3 months)',
        logoUrl: companyLogos.wisetech,
        descriptionMd: workExperience.wiseTechInternDesc,
    },
    {
        name: 'Accenture — Technical Architect (Casual)',
        time: 'May 2021 - Present',
        logoUrl: companyLogos.accenture,
        descriptionMd: workExperience.accentureInternDesc,
    },
    {
        name: 'UNSW — Academic Tutor (Casual)',
        team: 'Data Structures & Algorithms (COMP2521)',
        time: 'June 2020 - May 2021 (1 year)',
        logoUrl: companyLogos.unsw,
        descriptionMd: workExperience.academicTutorDesc,
    },
];

export default workExperiences;
