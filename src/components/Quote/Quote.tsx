import React from "react";
import styles from "./Quote.module.scss";
import { motion } from "framer-motion";

interface Props {
    quote: string;
    author: string;
    source?: string;
    url?: string;
}

const Quote: React.FC<Props> = ({ quote, author, source, url }) => {
    return (
        <motion.figure
            className={styles.quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
        >
            <blockquote cite={url}>
                <p>&quot;{quote}&quot;</p>
            </blockquote>
            <figcaption>
                &ndash; {author}
                {source && <em>, {source}</em>}.
            </figcaption>
        </motion.figure>
    );
};

export default Quote;
