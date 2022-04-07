import React, { useEffect, useState } from 'react';
import styles from './ReadingProgress.module.scss';

interface Props {}

const ReadingProgress: React.FC<Props> = () => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const updateReadingProgress = () => {
            const pageHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pageOffset = document.body.scrollTop || document.documentElement.scrollTop;
            const scrollProgress = (pageOffset / pageHeight) * 100;
            setProgress(scrollProgress);
            console.log(scrollProgress);
        };

        // Set the initial reading progress when the page loads.
        updateReadingProgress();

        window.addEventListener('scroll', updateReadingProgress);

        return () => {
            window.removeEventListener('scroll', updateReadingProgress);
        };
    }, []);

    return (
        <progress className={styles.readingBar} max={100} value={progress}>
            Progress: {progress}
        </progress>
    );
};

export default ReadingProgress;
