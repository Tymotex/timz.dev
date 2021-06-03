import React from 'react';
import PropTypes from 'prop-types';

// Shows the songs I'm currently listening to.
// Following guide: https://www.youtube.com/watch?v=n6d4KHSKqGk
const SpotifyDisplay = props => {
    return (
        <div>
            <img
                src="https://spotify-display-lyart.vercel.app/api/spotify"
                alt="Spotify Now Playing"
            />
        </div>
    );
};

SpotifyDisplay.propTypes = {};

export default SpotifyDisplay;
