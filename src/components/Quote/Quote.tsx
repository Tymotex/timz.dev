import React from "react";
import styles from "./Quote.module.scss";
import { motion } from "framer-motion";
import { Quote } from "content/portfolio/quotes";

interface Props {
    quote: Quote;
}

const Quote: React.FC<Props> = ({ quote }) => {
    const { quote: message, author, source, url } = quote;

    return (
        <motion.figure
            className={styles.quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
        >
            <blockquote cite={url}>
                <p>&quot;{message}&quot;</p>
            </blockquote>
            <figcaption>
                &ndash; {author}
                {source && <em>, {source}</em>}.
            </figcaption>
        </motion.figure>
    );
};

export default Quote;
