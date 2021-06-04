import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Interests.module.scss';
import InterestCard from './InterestCard';

// TODO: documentation for 'interests' shape. What's the standard way to do this in react?
const InterestsList = ({ interests }) => {
    return (
        <Grid container>
            {interests.map(eachInterest => (
                <Grid item xs={12} sm={6} md={4} className={styles.gridItem}>
                    <InterestCard interests={eachInterest} />
                </Grid>
            ))}
        </Grid>
    );
};

export default InterestsList;
