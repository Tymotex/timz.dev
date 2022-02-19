import PropTypes from 'prop-types';
import React from 'react';
import BottomNav from './BottomNav';
import { bio } from 'src/portfolio-data';
import styles from './Header.module.scss';
import ReactTypingEffect from 'react-typing-effect';
import WallpaperSettings from '../particles/WallpaperSettings';

const Header = props => (
    <header className={styles.header} id="header" style={props.timeout ? { display: 'none' } : {}}>
        {/* Central box showing name and summary */}
        <WallpaperSettings />
        <div className={`${styles.headerBox} content`}>
            <div className="inner">
                <h1 className={styles.name}>{bio.name}</h1>
                <p className={styles.summary}>{bio.headline}</p>
                <div className={styles.typerContainer}>
                    <ReactTypingEffect
                        text={bio.typewriterLines}
                        speed={75}
                        eraseSpeed={50}
                        cursor="_"
                        eraseDelay={1500}
                        typingDelay={750}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <p className={styles.typedText}>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return <span key={key}>{char}</span>;
                                    })}
                                </p>
                            );
                        }}
                    />
                </div>
            </div>
            {props.children}
        </div>
        {/* This is the bar of buttons: 'About', 'Projects', 'Blogs', 'Contact' */}
        <BottomNav {...props} />
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
};

export default Header;
