import Link from "next/link";
import React, { Fragment } from "react";
import styles from "./Breadcrumbs.module.scss";
import { MdChevronRight as ChevronRight } from "react-icons/md";

interface Crumb {
    title: string;
    url: string;
}

interface Props {
    crumbs: Crumb[];
}

const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
    return (
        <nav aria-label="breadcrumbs" className={styles.breadcrumbs}>
            {crumbs &&
                crumbs.map((crumb, i) => (
                    <Fragment key={crumb.title}>
                        <Link href={crumb.url}>
                            <li
                                className={styles.crumb}
                                aria-current={
                                    i === crumbs.length - 1 && "location"
                                }
                            >
                                <a>{crumb.title}</a>
                            </li>
                        </Link>
                        {i < crumbs.length - 1 && <ChevronRight />}
                    </Fragment>
                ))}
        </nav>
    );
};

export default Breadcrumbs;
