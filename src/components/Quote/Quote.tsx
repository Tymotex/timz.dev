import React from "react";
import styles from "./Quote.module.scss";
import { motion } from "framer-motion";
import { QuoteData } from "content/portfolio/quotes";

interface Props {
    quote: QuoteData;
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
                <p>
                    &quot;{message}&quot;
                    {source && (
                        <em>
                            {" "}
                            <a href={source} target="_blank" ref="noreferrer">
                                (source)
                            </a>
                        </em>
                    )}
                </p>
            </blockquote>
            {author && <figcaption>&ndash; {author}</figcaption>}
        </motion.figure>
    );
};

export default Quote;
