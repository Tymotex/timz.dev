import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './Interests.module.scss';
import React from 'react';

const InterestCard = ({ interests }) => {
    return (
        <Card className={styles.interestCard} style={{ border: '6px solid rgba(34, 34, 34, 1)' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={interests.name}
                    height="140"
                    image={interests.image}
                    title={interests.name}
                />
                <CardContent className={styles.content}>
                    <Typography className={styles.title} gutterBottom variant="h6" component="h5">
                        {interests.name}
                    </Typography>
                    <Typography
                        className={styles.content}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {interests.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default InterestCard;
