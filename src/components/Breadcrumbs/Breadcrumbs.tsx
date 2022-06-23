import Link from "next/link";
import React, { Fragment } from "react";
import { MdChevronRight as ChevronRight } from "react-icons/md";
import styles from "./Breadcrumbs.module.scss";

export interface Crumb {
    title: string;
    url: string;
}

interface Props {
    crumbs: Crumb[];
    isDarkMode?: boolean;
    className?: string;
}

const Breadcrumbs: React.FC<Props> = ({
    crumbs,
    isDarkMode = true,
    className,
}) => {
    return (
        <nav
            aria-label="breadcrumbs"
            className={`${styles.breadcrumbs} ${className}`}
        >
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
                                        i === crumbs.length - 1
                                            ? "location"
                                            : "false"
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
