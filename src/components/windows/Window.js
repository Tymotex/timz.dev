import React from 'react';
import WindowCloseButton from './WindowCloseButton';

const Window = ({ nameID, text, image, article, articleTimeout, onCloseArticle, children }) => {
    return (
        <article
            id={nameID}
            className={`${article === nameID ? 'active' : ''} ${
                articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
        >
            <h2 className="major">{text}</h2>
            <span className="image main">
                {(image) && (
                    <img src={image} alt="Window banner" />
                )}
            </span>
            {children}
            <WindowCloseButton onCloseArticle={onCloseArticle} />
        </article>
    )
}

export default Window;