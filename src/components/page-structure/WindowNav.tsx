import React, { FC } from 'react';
import navLinks from './config/nav-links';
import { Link } from 'gatsby';

interface Props {
    onOpenArticle: (article: string) => void;
}

const WindowMenu: FC<Props> = ({ onOpenArticle }) => {
    return (
        <nav>
            <ul>
                {navLinks.map((eachItem, i) => (
                    <li key={i}>
                        {eachItem.nameID.toLowerCase() === 'blogs' ? (
                            <Link to={`${process.env.BASE_URL}/blogs`}>
                                <button className="transparent-button">{eachItem.text}</button>
                            </Link>
                        ) : (
                            <button
                                className="transparent-button"
                                onClick={() => {
                                    onOpenArticle(eachItem.nameID);
                                }}
                            >
                                {eachItem.text}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default WindowMenu;
