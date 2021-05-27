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
                    <div className={styles.timeText}>{eachJob.time}</div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: eachJob.description,
                        }}
                    />
                </>
            ))}
        </div>
    );
};

export default WorkExperience;
