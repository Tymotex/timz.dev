import Link from "next/link";
import React, { Fragment } from "react";
import {
    MdChevronRight as ChevronRight,
    MdChevronLeft as ChevronLeft,
} from "react-icons/md";
import { useBreakpointTrigger } from "src/hooks/windowHooks";
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
    const isSmallScreen = useBreakpointTrigger(480);

    return (
        <nav
            aria-label="breadcrumbs"
            className={`${styles.breadcrumbs} ${className}`}
        >
            {!isSmallScreen &&
                crumbs &&
                crumbs.map((crumb, i) => (
                    <Fragment key={crumb.title}>
                        <Link href={crumb.url} scroll={false}>
                            <li
                                role="button"
                                className={`${styles.crumb} ${
                                    crumbs.length - 1 !== i &&
                                    styles.clickableCrumb
                                }`}
                            >
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
            {isSmallScreen && crumbs && crumbs.length > 1 && (
                <>
                    <ChevronLeft />
                    <Link href={crumbs[crumbs.length - 2].url} scroll={false}>
                        <button
                            className={`${styles.crumb} ${
                                styles.clickableCrumb
                            } ${isDarkMode ? styles.dark : styles.light}`}
                        >
                            {crumbs[crumbs.length - 2].title}
                        </button>
                    </Link>
                </>
            )}
            {isSmallScreen && crumbs && crumbs.length <= 1 && (
                <>
                    <ChevronLeft />
                    <Link href={"/"} scroll={false}>
                        <a
                            className={`${styles.crumb} ${
                                isDarkMode ? styles.dark : styles.light
                            }`}
                        >
                            Home
                        </a>
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Breadcrumbs;
