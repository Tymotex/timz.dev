import Link from "next/link";
import React from "react";
import { Stack } from "../Stack";
import styles from "./AsideLinkGroup.module.scss";
import { motion } from "framer-motion";

interface LinkData {
    text: string;
    url: string;
}

interface Props {
    links: LinkData[];
}

const AsideLinkGroup: React.FC<Props> = ({ links }) => {
    return (
        <motion.nav
            className={styles.asideGroup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <ul>
                {links &&
                    links.map((link) => (
                        <li key={link.text}>
                            {/* Render either an internal/external link
                                depending on whether the url begins with / */}
                            {/^\//.test(link.url) ? (
                                <Link href={link.url}>
                                    <a>{link.text}</a>
                                </Link>
                            ) : (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.text}
                                </a>
                            )}
                        </li>
                    ))}
            </ul>
        </motion.nav>
    );
};

export default AsideLinkGroup;
