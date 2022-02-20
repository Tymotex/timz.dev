import React from 'react';
import bio from 'src/portfolio-data/bio';
import styles from './WorkExperience.module.scss';
import { renderMarkdown } from 'src/portfolio-data/utils';

const WorkExperience = () => {
    return (
        <div>
            {bio.workExperiences.map(eachJob => (
                <>
                    <div className={styles.title}>
                        <h2>
                            <em>{eachJob.name}</em>
                        </h2>
                    </div>
                    {eachJob.team && (
                        <div className={styles.teamText}>
                            <strong>{eachJob.team}</strong>
                        </div>
                    )}
                    <img src={eachJob.logoUrl} className={styles.companyLogo} alt="Company logo" />
                    <div className={styles.timeText}>{eachJob.time}</div>
                    <div
                        className={styles.markdownText}
                        dangerouslySetInnerHTML={{
                            __html: renderMarkdown(eachJob.descriptionMd),
                        }}
                    />
                    <hr />
                </>
            ))}
        </div>
    );
};

export default WorkExperience;
