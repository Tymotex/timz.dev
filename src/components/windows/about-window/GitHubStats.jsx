import React from 'react';
import styles from './GitHubStats.module.scss';

const GitHubStats = props => {
    return (
        <div className={styles.container}>
            <img
                src="https://github-readme-stats.vercel.app/api?username=Tymotex&theme=solarized-dark"
                alt="GitHub statistics"
            />
        </div>
    );
};

export default GitHubStats;
