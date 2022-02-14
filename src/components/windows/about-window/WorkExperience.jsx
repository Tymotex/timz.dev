import React from 'react';
import bio from 'src/portfolio-data/bio';
import styles from './WorkExperience.module.scss';

const WorkExperience = () => {
    return (
        <div>
            {bio.workExperience.map(eachJob => (
                <>
                    <div className={styles.title}>
                        <h2>
                            <em>{eachJob.name}</em>
                        </h2>
                    </div>
                    {eachJob.team && (
                        <div className={styles.teamText}><strong>{eachJob.team}</strong></div>
                    )}
                    <img src={eachJob.logo} className={styles.companyLogo} alt="Company logo" />
                    <div className={styles.timeText}>{eachJob.time}</div>
                    <div
                        className={styles.markdownText}
                        dangerouslySetInnerHTML={{
                            __html: eachJob.description,
                        }}
                    />
                    <hr />
                </>
            ))}
        </div>
    );
};

export default WorkExperience;
