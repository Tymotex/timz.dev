import React from 'react';
import TechnologyItem from './TechnologyItem.js';
import images from './icons';

// Given the name of a technology, returns the corresponding image object
const stringToIcon = (techName) => {
    // Transform to lowercase and strip all space characters
    techName = techName.toLowerCase();
    techName = techName.replace(/\s/g, '');
    switch (techName) {
        case "c#":
            techName = "csharp";
            break;
    }
    return images[techName];
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
