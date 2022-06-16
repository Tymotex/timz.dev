import Link from "next/link";
import React, { Fragment } from "react";
import { MdChevronRight as ChevronRight } from "react-icons/md";
import styles from "./Breadcrumbs.module.scss";

interface Crumb {
    title: string;
    url: string;
}

interface Props {
    crumbs: Crumb[];
    isDarkMode?: boolean;
}

const Breadcrumbs: React.FC<Props> = ({ crumbs, isDarkMode }) => {
    return (
        <nav aria-label="breadcrumbs" className={styles.breadcrumbs}>
            {crumbs &&
                crumbs.map((crumb, i) => (
                    <Fragment key={crumb.title}>
                        <Link href={crumb.url}>
                            <li role="button" className={`${styles.crumb}`}>
                                <a
                                    className={
                                        isDarkMode ? styles.dark : styles.light
                                    }
                                    aria-current={
                                        i === crumbs.length - 1 && "location"
                                    }
                                >
                                    {crumb.title}
                                </a>
                            </li>
                        </Link>
                        {i < crumbs.length - 1 && (
                            <ChevronRight
                                className={`${styles.separator} ${
                                    isDarkMode ? styles.dark : styles.light
                                }`}
                            />
                        )}
                    </Fragment>
                ))}
        </nav>
    );
};

export default Breadcrumbs;
