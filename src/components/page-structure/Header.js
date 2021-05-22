import PropTypes from 'prop-types';
import React from 'react';
import BottomNav from './BottomNav';
import { bio } from 'src/portfolio-data';
import HeaderIcon from './HeaderIcon';

const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        {/* Code icon */}
        <HeaderIcon />
        {/* Central box showing name and summary */}
        <div className="content">
            <div className="inner">
                <h1>{bio.name}</h1>
                <p>
                    {bio.frontPageSummary}
                    <br />
                </p>
            </div>
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
