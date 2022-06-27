import React, { useContext, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./BlogLayout.module.scss";
import ContentContainer from "src/components/Container/ContentContainer";
import { ParticleWallpaper } from "src/components/Particles";
import { BlogContext } from "src/contexts/BlogContext";
import Breadcrumbs from "src/components/Breadcrumbs";
import { DarkModeToggler } from "src/components/DarkModeToggler";
import { Socials } from "src/components/Socials";
import portfolio from "content/portfolio/portfolio";
import { Copyright } from "src/components/Copyright";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();

    const crumbs = useMemo(() => {
        if (!router) return [{ title: "Home", url: "/" }];

        const urlComponents = router.asPath
            .split("/")
            .filter((urlComponent) => !!urlComponent);

        if (!urlComponents || urlComponents.length < 1) {
            return [{ title: "Home", url: "/" }];
        } else if (urlComponents.length === 1) {
            return [
                { title: "Home", url: "/" },
                { title: "Blogs", url: "/blogs" },
            ];
        } else {
            return [
                { title: "Home", url: "/" },
                { title: "Blogs", url: "/blogs" },
                {
                    title: urlComponents[urlComponents.length - 1],
                    url: router.asPath,
                },
            ];
        }
    }, [router]);

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
                <ContentContainer
                    className={styles.topBar}
                    maxWidth={"52rem"}
                    padding={"24px 0 0 0"}
                >
                    <Breadcrumbs crumbs={crumbs} isDarkMode={false} />
                    <DarkModeToggler />
                </ContentContainer>
                <ContentContainer padding={"0 24px"} maxWidth={"50rem"}>
                    {children}
                </ContentContainer>
            </div>
            <footer>
                <Socials
                    socials={portfolio.profile.socials}
                    position="absolute"
                    anchorPosition="bottom"
                    style={{
                        // Making room for the copyright message directly below.
                        bottom: 48,
                    }}
                />
                <Copyright />
            </footer>
        </motion.div>
    );
};

export default BlogLayout;
