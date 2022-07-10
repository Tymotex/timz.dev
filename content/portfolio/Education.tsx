import React from "react";
import AwardList from "src/components/Education/AwardList";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const Education: React.FC<Props> = () => {
    return (
        <>
            <UnorderedList>
                <li>High distinction average WAM (GPA).</li>
                <li>
                    Project team lead in the Computer Science & Engineering
                    Society (CSESoc).
                </li>
            </UnorderedList>
            <h3 style={{ marginTop: "48px" }}>Academic Awards & Hackathons</h3>
            <AwardList
                awards={[
                    {
                        title: "Faculty of Engineering Dean’s Award (x2)",
                        description: `For ranking in the top 25 academic performance across
                        all 1st & 2nd year students in UNSW's School of
                        Engineering.`,
                        date: "2020, 2021",
                    },
                    {
                        title: "Atlassian COMP2521 1st place prize",
                        description: `For achieving the highest mark in COMP2521 (Data Structures
                        and algorithms) out of 400+ engineering students.`,
                        date: "2020",
                    },
                    {
                        title: "Macquarie Bank SENG2021 1st place prize",
                        description: `For achieving the highest mark in SENG2021 (Software
                        Engineering Design Workshop) out of 159 software
                        engineering students.`,
                        date: "2021",
                    },
                    {
                        title: "Accenture 'Hack for Good' Hackathon 1st Place",
                        description: `Worked in a team of 4 to develop a prototype for
                        an education platform driven by deep learning that
                        automatically tailors a curriculum for young children
                        with ASD. Achieved 1st place out of 37 other
                        participating teams from across Australia.`,
                        date: "2021",
                    },
                    {
                        title: "Google Chronicle Hackathon 2nd Place",
                        description: `Worked in a team of 4 to build a
                        proof-of-concept application for an automated time
                        scheduler system. This project won 2nd place out of
                        around 40 other teams.`,
                        date: "2021",
                    },
                    {
                        title: "CSESoc Annual Flagship Hackathon 2nd Place",
                        description: `Worked in a team of 4 to develop a prototype for
                        an educational content delivery web app that recommends
                        lessons to students with learning disabilities. We
                        achieved 2nd place out of more than 60 participating
                        teams.`,
                        date: "2021",
                    },
                    {
                        title: "Academic Awards Achievement Scholarship",
                        date: "2019",
                    },
                ]}
            />
        </>
    );
};

export default Education;
