import React from "react";
import { ParticleWallpaper } from "src/components/Particles";
import styles from "./Layout.module.scss";

interface Props {
    children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}

            <ParticleWallpaper />
        </div>
    );
};

export default PageLayout;
