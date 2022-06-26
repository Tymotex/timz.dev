import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogLayout.module.scss";
import ContentContainer from "src/components/Container/ContentContainer";
import { ParticleWallpaper } from "src/components/Particles";

interface Props {
    children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className={styles.blogBody}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className={styles.slantedContainer}>
                <ContentContainer>
                    <h1>Hello World</h1>
                    <p>
                        Laborum nostrud adipisicing reprehenderit esse excepteur
                        enim deserunt. Nostrud aliqua ipsum nostrud eu culpa
                        excepteur ea aliqua cupidatat nostrud culpa. Aute
                        occaecat ea quis aute enim enim. Enim elit Lorem minim
                        dolore incididunt mollit excepteur deserunt aliqua duis
                        excepteur sunt. Tempor magna sit irure magna
                        exercitation aliqua. Lorem sunt non aliqua pariatur.
                    </p>
                    <p>
                        Laborum nostrud adipisicing reprehenderit esse excepteur
                        enim deserunt. Nostrud aliqua ipsum nostrud eu culpa
                        excepteur ea aliqua cupidatat nostrud culpa. Aute
                        occaecat ea quis aute enim enim. Enim elit Lorem minim
                        dolore incididunt mollit excepteur deserunt aliqua duis
                        excepteur sunt. Tempor magna sit irure magna
                        exercitation aliqua. Lorem sunt non aliqua pariatur.
                    </p>
                    <p>
                        Laborum nostrud adipisicing reprehenderit esse excepteur
                        enim deserunt. Nostrud aliqua ipsum nostrud eu culpa
                        excepteur ea aliqua cupidatat nostrud culpa. Aute
                        occaecat ea quis aute enim enim. Enim elit Lorem minim
                        dolore incididunt mollit excepteur deserunt aliqua duis
                        excepteur sunt. Tempor magna sit irure magna
                        exercitation aliqua. Lorem sunt non aliqua pariatur.
                    </p>{" "}
                    <p>
                        Laborum nostrud adipisicing reprehenderit esse excepteur
                        enim deserunt. Nostrud aliqua ipsum nostrud eu culpa
                        excepteur ea aliqua cupidatat nostrud culpa. Aute
                        occaecat ea quis aute enim enim. Enim elit Lorem minim
                        dolore incididunt mollit excepteur deserunt aliqua duis
                        excepteur sunt. Tempor magna sit irure magna
                        exercitation aliqua. Lorem sunt non aliqua pariatur.
                    </p>
                    <p>
                        Laborum nostrud adipisicing reprehenderit esse excepteur
                        enim deserunt. Nostrud aliqua ipsum nostrud eu culpa
                        excepteur ea aliqua cupidatat nostrud culpa. Aute
                        occaecat ea quis aute enim enim. Enim elit Lorem minim
                        dolore incididunt mollit excepteur deserunt aliqua duis
                        excepteur sunt. Tempor magna sit irure magna
                        exercitation aliqua. Lorem sunt non aliqua pariatur.
                    </p>
                    {children}
                </ContentContainer>
            </div>
        </motion.div>
    );
};

export default BlogLayout;
