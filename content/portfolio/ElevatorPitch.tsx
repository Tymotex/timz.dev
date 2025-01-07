import React from "react";

interface Props {}

const ElevatorPitch: React.FC<Props> = () => {
    return (
        <p>
            I'm a software engineer at Google on the Open Source Security team,
            working on
            <a href="https://deps.dev" target="_blank" rel="noopener noreferrer">
                deps.dev
            </a>.
            I love
            <a
                href="https://usability.typepad.com/confusability/2008/04/knuths-advice-f.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                learning something about everything 📚
            </a>
            !
        </p>
    );
};

export default ElevatorPitch;
