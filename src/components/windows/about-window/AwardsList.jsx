import React from 'react';
import bio from 'src/portfolio-data/bio';
import styles from './AwardsList.module.scss';
import { Grid } from '@material-ui/core';

const AwardsList = () => {
    return (
        <Grid container>
            {bio.awards.map(eachAward => (
                <Grid item xs={12} sm={6}>
                    <div className={styles.awardItem}>
                        <h3 className={styles.title}>{eachAward.name}</h3>
                        <span className={styles.time}>{eachAward.time}</span>
                        <p className={styles.description}>{eachAward.description}</p>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default AwardsList;
