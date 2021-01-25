import React from 'react';
import TechnologyItem from './TechnologyItem.js';
import images from './icons';
import listStyles from './TechnologyList.module.scss';

// Given the name of a technology, returns the corresponding image object.
// Additionally maps other common names to their more conventional names
const stringToIcon = (techName) => {
    // Transform to lowercase and strip all space characters
    techName = techName.toLowerCase();
    techName = techName.replace(/\s/g, '');
    switch (techName) {
        case "c#":
            techName = "csharp";
            break;
        case "nodejs":
            techName = "node";
            break;
        default:
            break;
    }
    return images[techName];
}

const TechnologyList = ({ technologies }) => {
    return (
        <div className={listStyles.techList}>
            {technologies.map((techItem) => {
                return (
                    <TechnologyItem 
                        icon={stringToIcon(techItem)}
                        name={techItem}
                    />
                );
            })} 
        </div>
    );
}

export default TechnologyList;
