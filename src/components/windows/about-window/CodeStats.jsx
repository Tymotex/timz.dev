import React from 'react';
import styles from './CodeStats.module.scss';

const CodeStats = props => {
    return (
        <div className={styles.container}>
            <img
                src="https://github-readme-stats.vercel.app/api/wakatime?username=Tymotex"
                alt="WakaTime statistics"
            />
        </div>
    );
};

export default CodeStats;
