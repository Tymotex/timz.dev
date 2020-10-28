import React from 'react';

const NavItem = ({ onOpenArticle, nameID, text }) => {
    return (
        <li>
            <button
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
