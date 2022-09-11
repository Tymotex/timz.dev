import { getRandomQuote } from "content/portfolio/quotes";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiRollingDices as DiceIcon } from "react-icons/gi";
import {
    RiDoubleQuotesL as DoubleQuoteStart,
    RiDoubleQuotesR as DoubleQuoteEnd,
} from "react-icons/ri";
import styles from "./Quote.module.scss";

interface Props {}

const Quote: React.FC<Props> = () => {
    const [quoteData, setQuoteData] = useState(getRandomQuote());

    const { quote, author, source, url } = quoteData;

    return (
        <motion.figure
            className={styles.quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
        >
            <blockquote cite={url}>
                <p>
                    <DoubleQuoteStart />
                    {quote}
                    <DoubleQuoteEnd />
                    {source && (
                        <em>
                            {" "}
                            <a href={source} target="_blank" rel="noreferrer">
                                (source)
                            </a>
                        </em>
                    )}
                    <button
                        className={styles.randomiseButton}
                        onClick={() => setQuoteData(getRandomQuote())}
                    >
                        <DiceIcon className={styles.icon} />
                    </button>
                </p>
            </blockquote>
            {author && <figcaption>&ndash; {author}</figcaption>}
        </motion.figure>
    );
};

export default Quote;
