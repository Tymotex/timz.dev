import dynamic from "next/dynamic";
import React from "react";
import { BiHome as HomeIcon } from "react-icons/bi";
import { LinkButton } from "../Button";
import { CentralContainer } from "../Container";
import ContentContainer from "../Container/ContentContainer";
import styles from "./ErrorPage.module.scss";

interface Props {
    errorMessage: string;
    homeUrl: string;
    errorCode?: string;
}

const DynamicParticleWallpaper = dynamic(
    () =>
        import("src/components/Particles").then(
            (module) => module.ParticleWallpaper,
        ),
    {
        ssr: false,
    },
);

const ErrorMessage: React.FC<Props> = ({
    errorCode,
    errorMessage,
    homeUrl,
}) => {
    return (
        <div className={styles.errorPage}>
            <CentralContainer className={styles.errorContainer}>
                <ContentContainer centerContents>
                    {errorCode && <h1>{errorCode}</h1>}
                    <p suppressHydrationWarning>{errorMessage}</p>
                    {homeUrl && (
                        <LinkButton
                            text="Go Home"
                            href={homeUrl}
                            callToAction
                            icon={<HomeIcon />}
                            iconPosition="left"
                            shape="pill"
                        />
                    )}
                </ContentContainer>
            </CentralContainer>

            <DynamicParticleWallpaper />
        </div>
    );
};

export default ErrorMessage;
