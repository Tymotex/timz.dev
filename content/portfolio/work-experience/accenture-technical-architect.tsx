import React from "react";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const AccentureTechnicalArchitect: React.FC<Props> = () => {
    return (
        <>
            Developing an educational platform that tailors lessons for young
            children with ASD for the <strong>Autism Awareness</strong> charity
            organisation.
            <UnorderedList>
                <li>
                    Built a prototype of the product, achieving 1st place in
                    Accenture's 2021 hackathon out of 37 teams, and later
                    pitched the project to Accenture to acquire funding for
                    continued development.
                </li>
                <li>
                    Implemented a lesson builder interface for developing
                    reusable therapy sessions, reducing work that previously
                    would take hours to just minutes.
                </li>
                <li>
                    Implemented a content management GraphQL API using Node.js
                    with TypeScript, Express and MongoDB.
                </li>
                <li>
                    Formed core requirements and designed a concept for a neural
                    network backing the platform's learning recommendation
                    engine.
                </li>
            </UnorderedList>
        </>
    );
};

export default AccentureTechnicalArchitect;
