import React from 'react';

const NavItem = ({ onOpenArticle, nameID, text }) => {
    return (
        <li>
            <button
                className="transparent-button"
                onClick={() => {
                    onOpenArticle(nameID)
                }}
            >
                {text}
            </button>
        </li>
    );
}

export default NavItem;
