import React from "react";

interface Props {}

const ElevatorPitch: React.FC<Props> = () => {
    return (
        <p>
            I'm a software engineer at Google and a computer science graduate
            from the University of New South Wales, Sydney. I love working on
            software projects and{" "}
            <a
                href="https://usability.typepad.com/confusability/2008/04/knuths-advice-f.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                learning something about everything 📚
            </a>
            .
        </p>
    );
};

export default ElevatorPitch;
