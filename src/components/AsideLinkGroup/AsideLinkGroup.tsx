import Link from "next/link";
import React from "react";
import { Stack } from "../Stack";
import styles from "./AsideLinkGroup.module.scss";

interface LinkData {
    text: string;
    url: string;
}

interface Props {
    links: LinkData[];
}

const AsideLinkGroup: React.FC<Props> = ({ links }) => {
    return (
        <nav className={styles.asideGroup}>
            <ul>
                {links &&
                    links.map((link) => (
                        <li key={link.text}>
                            <Link href={link.url}>
                                <a>{link.text}</a>
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default AsideLinkGroup;
