import { Award } from "content/portfolio/portfolio";
import React from "react";
import styles from "./AwardItem.module.scss";
import { CgAwards as AwardIcon } from "react-icons/cg";

interface Props {
    award: Award;
}

const AwardItem: React.FC<Props> = ({ award }) => {
    return (
        <li className={styles.awardItem}>
            <AwardIcon size={32} className={styles.awardIcon} />
            <div className={styles.details}>
                <h4 className={styles.title}>{award.title}</h4>
                <small className={styles.date}>{award.date}</small>
                <p className={styles.description}>{award.description}</p>
            </div>
        </li>
    );
};

export default AwardItem;
