import React from 'react';
import WindowCloseButton from './WindowCloseButton';
import windowStyles from './Window.module.scss';

const Window = ({ nameID, text, image, article, articleTimeout, onCloseArticle, children }) => {
    console.log(`${article} is open`);
    return (
        <article
            id={nameID}
            className={`
                ${article === nameID ? 'active' : ''} 
                ${articleTimeout ? 'timeout' : ''}
                ${windowStyles.window}
            `}
            style={{ display: 'none' }}
        >
            <h2 className={`${windowStyles.title} major`}>{text}</h2>
            <span className="image main">{image && <img src={image} alt="Window banner" />}</span>
            {children}
            <WindowCloseButton onCloseArticle={onCloseArticle} />
        </article>
    );
};

export default Window;
