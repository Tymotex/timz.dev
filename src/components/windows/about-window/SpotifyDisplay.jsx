import React from 'react';
import styles from './SpotifyDisplay.module.scss';

// Shows the songs I'm currently listening to.
// Following guide: https://www.youtube.com/watch?v=n6d4KHSKqGk
const SpotifyDisplay = () => {
    return (
        <div className={styles.displayer}>
            <a href="https://open.spotify.com/user/1267816691">
                <img
                    src="https://spotify-display-lyart.vercel.app/api/spotify"
                    alt="Spotify Now Playing"
                />
            </a>
        </div>
    );
};

export default SpotifyDisplay;