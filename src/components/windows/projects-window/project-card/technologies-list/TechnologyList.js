import React from 'react';
import TechnologyItem from './TechnologyItem.js';
import images from './icons';

// Given the name of a technology, returns the corresponding image object
const stringToIcon = (techName) => {
    // Transform to lowercase and strip all non-alphanumeric characters
    techName = techName.toLowerCase();
    techName = techName.replace(/\W/g, '');
    let icon;
    switch (techName) {
        case "c":
            icon = images.cIcon;
            break;
        case "csharp":
            icon = images.cSharpIcon;
            break;
        case "flask":
            icon = images.flaskIcon;
            break;
        case "javascript":
            icon = images.javascriptIcon;
            break;
        case "node":
            icon = images.nodeIcon;
            break;
        case "perl":
            icon = images.perlIcon;
            break;
        case "postgresql":
            icon = images.postgresqlIcon;
            break;
        case "python":
            icon = images.pythonIcon;
            break;
        case "react":
            icon = images.reactIcon;
            break;
        case "ruby":
            icon = images.rubyIcon;
            break;
        case "sass":
            icon = images.sassIcon;
            break;
        case "shell":
            icon = images.shellIcon;
            break;
    }
    return icon;
}

const TechnologyList = ({ technologies }) => {
    console.log(typeof(technologies));
    return (
        <>
            {technologies.map((techItem) => {
                return (
                    <TechnologyItem 
                        icon={stringToIcon(techItem)}
                        name={techItem}
                    />
                );
            })} 
        </>
    );
}

export default TechnologyList;
