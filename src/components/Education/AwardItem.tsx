import { Award } from "content/portfolio/portfolio";
import React from "react";
import styles from "./AwardItem.module.scss";

interface Props {
    award: Award;
}

const AwardItem: React.FC<Props> = ({ award }) => {
    return (
        <li className={styles.awardItem}>
            <h4 className={styles.title}>{award.title}</h4>
            <small className={styles.date}>{award.date}</small>
            <p className={styles.description}>{award.description}</p>
        </li>
    );
};

export default AwardItem;
