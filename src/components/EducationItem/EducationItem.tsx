import { Education } from "content/portfolio/portfolio";
import React from "react";

interface Props {
    education: Education;
}

const Education: React.FC<Props> = ({ education }) => {
    return (
        <>
            <h2>
                {education.degree} at {education.university}
            </h2>
            <p>
                {education.from} - {education.to}
            </p>
            {education.description}
        </>
    );
};

export default Education;
