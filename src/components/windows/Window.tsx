import React, { useEffect, useRef } from 'react';
import windowStyles from './Window.module.scss';
import WindowCloseButton from './WindowCloseButton';

// Setting up the detection of click events outside of the window.
// See: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component.
// Since it's possible for multiple windows to exist in the dom but simply be
// out of view, we need to tell the alerter whether we should actually be 
// detecting clicks outside the currently active window.
const useClickOutsideAlerter = (ref, shouldAlert) => {

};


const Window = ({ nameID, text, image, article, articleTimeout, onCloseArticle, children }) => {
    const windowContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (article === nameID && windowContainerRef.current && !windowContainerRef.current.contains(event.target)) {
                onCloseArticle();
            }
        };

        // Binding the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [article, nameID, onCloseArticle]);

    useEffect(() => {
        const handleEscPress = (event) => {
            // Note: esc has ascii code 27.
            if (article === nameID && windowContainerRef.current && event.keyCode == 27) {
                onCloseArticle();
            }
        }

        document.addEventListener('keydown', handleEscPress);
        return () => {
            document.removeEventListener('keydown', handleEscPress);
        }
    }, [article, nameID, onCloseArticle]);

    return (
        <article
            id={nameID}
            ref={windowContainerRef}
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
