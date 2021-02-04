import React from 'react';
import navLinks from './config/NavLinks.js';
import { Link } from 'gatsby';

const BottomNav = (props) => {
    return (
        <nav>
            <ul>
                {navLinks.map((eachItem, i) => (
                    <li key={i}>
                        {(eachItem.nameID.toLowerCase() === "blogs") ? (
                            <Link to={`${process.env.BASE_URL}/blogs`}>
                                <button className="transparent-button">
                                    {eachItem.text}   
                                </button>
                            </Link>
                        ) : (
                            <button className="transparent-button" onClick={() => {
                                props.onOpenArticle(eachItem.nameID);
                            }}>
                                {eachItem.text}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BottomNav;
