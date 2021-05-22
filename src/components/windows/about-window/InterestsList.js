import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './Interests.module.scss';

// TODO: documentation for 'interests' shape. What's the standard way to do this in react?
const InterestsList = ({ interests }) => {
    return (
        <Grid container>
            {interests.map(eachInterest => (
                <Grid item md={4} className={styles.gridItem}>
                    <Card
                        className={styles.interestCard}
                        style={{ border: '6px solid rgba(34, 34, 34, 1)' }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={eachInterest.image}
                                title="Contemplative Reptile"
                            />
                            <CardContent className={styles.content}>
                                <Typography
                                    className={styles.title}
                                    gutterBottom
                                    variant="h6"
                                    component="h5"
                                >
                                    {eachInterest.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {eachInterest.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default InterestsList;
