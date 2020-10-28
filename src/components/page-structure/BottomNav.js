import React from 'react';
import navLinks from './config/NavLinks.js';

const BottomNav = (props) => {
    return (
        <nav>
            <ul>
                {navLinks.map((eachItem, i) => (
                    <li key={i}>
                        <button
                            onClick={() => {
                                props.onOpenArticle(eachItem.nameID)
                            }}
                        >
                            {eachItem.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default BottomNav;
