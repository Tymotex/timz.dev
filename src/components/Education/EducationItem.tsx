import { Education } from "content/portfolio/portfolio";
import Image from "next/image";
import React from "react";
import styles from "./EducationItem.module.scss";

interface Props {
    education: Education;
}

const Education: React.FC<Props> = ({ education }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.institutionLogo}>
                    <Image
                        src="/icons/company/unsw.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Institution logo"
                    />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.title}>
                        <strong className={styles.degree}>
                            {education.degree}
                        </strong>{" "}
                        @{" "}
                        <em className={styles.institution}>
                            {education.university}
                        </em>
                    </h2>
                    <p className={styles.enrolmentPeriod}>
                        {education.from} - {education.to}
                    </p>
                </div>
            </div>
            <div className={styles.description}>
                <education.Description />
            </div>
        </>
    );
};

export default Education;
