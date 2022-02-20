import React from 'react';

export interface Award {
    name: string;
    time: string;
    description: React.ReactNode;
}

const awards: Award[] = [
    {
        name: "Faculty of Engineering Dean's Award",
        time: '2020',
        description: (
            <p>
                For being among the top 25 highest performing students across all 1st/2nd year
                students in UNSW's School of Engineering.
            </p>
        ),
    },
    {
        name: 'Atlassian 1st Place Prize for Data Structures and Algorithms',
        time: '2020',
        description: 'For the best performance in COMP2521 (S0382E)',
    },
    {
        name: 'Macquarie Bank Prize for 1st Place in SENG2021',
        time: '2021',
        description: `Led a team of 5 in developing an automated job application
            tracking system and achieved 1st place out of 30 other teams.`,
    },
    {
        name: "Accenture 'Hack for Good' Hackathon 1st Place",
        time: '2021',
        description: `Worked in a team of 4 to develop a prototype for an education
            platform driven by deep learning that automatically tailors a
            curriculum for young children with ASD. Achieved 1st place out of 37
            other participating teams from across Australia.`,
    },
    {
        name: 'Google Chronicle Hackathon 2nd Place',
        time: '2021',
        description: (
            <section>
                <p>
                    Worked in a team of 4 to build a proof-of-concept application for an automated
                    time scheduler system. This project won 2nd place out of around 40 other teams.
                </p>
                <p>
                    Prototype viewable <a href="https://get-2-gether.netlify.app/">here</a>.
                    <a href="https://raw.githubusercontent.com/Tymotex/timz.dev/master/src/portfolio-data/awards/chronicle-certificate.png">
                        Google Chronicle Hackathon 2nd Place
                    </a>
                </p>
            </section>
        ),
    },
    {
        name: 'CSESoc Annual Flagship Hackathon 2nd Place',
        time: '2021',
        description: (
            <section>
                <p>
                    Worked in a team of 4 to develop a prototype for an educational content delivery
                    web app that recommends lessons to students with learning disabilities. We
                    achieved 2nd place out of more than 60 participating teams.
                </p>
                <p>
                    Prototype viewable <a href="https://educatory.netlify.app/">here</a> and pitch
                    viewable <a href="https://youtu.be/wUZMYPQURrw">here</a>
                </p>
            </section>
        ),
    },
    {
        name: 'Academic Awards Achievement (Scholarship)',
        time: '2019',
        description: '',
    },
];

export default awards;
