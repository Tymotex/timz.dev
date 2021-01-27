import React from 'react';

// TODO: documentation for 'interests' shape. What's the standard way to do this in react?
const InterestsList = ({ interests }) => {
    return (
        <ul>
            {interests.map((eachInterest) => (
                <li>
                    {eachInterest.name}
                </li>
            ))}
        </ul>
    );
}

export default InterestsList;
