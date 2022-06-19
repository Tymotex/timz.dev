import React from "react";
import styles from "./Typewriter.module.scss";
import TypewriterEffect from "typewriter-effect";
import portfolio from "content/portfolio/portfolio";

interface Props {
    messages: string[];
    pauseDurationMs?: number;
}

const Typewriter: React.FC<Props> = ({ messages, pauseDurationMs = 3000 }) => {
    return (
        <div className={styles.typewriter} role="presentation">
            <TypewriterEffect
                options={{
                    strings: portfolio.profile.headlines,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    messages.map((message) => {
                        typewriter
                            .typeString(message)
                            .pauseFor(pauseDurationMs)
                            .deleteAll()
                            .start();
                    });
                }}
            />
        </div>
    );
};

export default Typewriter;
