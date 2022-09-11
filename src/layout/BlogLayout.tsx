import { motion } from "framer-motion";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./BlogLayout.module.scss";

import portfolio from "content/portfolio/portfolio";
import { useRouter } from "next/router";
import Breadcrumbs from "src/components/Breadcrumbs";
import ContentContainer from "src/components/Container/ContentContainer";
import { Copyright } from "src/components/Copyright";
import { DarkModeToggler } from "src/components/DarkModeToggler";
import { SearchBar } from "src/components/SearchBar";
import { Socials } from "src/components/Socials";
import { BlogContext } from "src/contexts/BlogContext";
import { ThemeContext } from "src/contexts/ThemeProvider";
import { TagFilter } from "src/components/TagFilter";
import { useBreakpointTrigger } from "src/hooks/window";

interface Props {
    children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const theme = useContext(ThemeContext);
    const blogContext = useContext(BlogContext);
    const isSmallScreen = useBreakpointTrigger(600);
    const isOnIndexPage = router.pathname === "/blogs";

    const [filterTags, setFilterTags] = useState<string[]>([]);

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

    useEffect(() => {
        setFilterTags(String(router.query.tags).split(","));
    }, [router.query]);

    return (
        <motion.div
            className={`${styles.blogBody} blogBody`}
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
            <div
                className={`${styles.slantedContainer} ${
                    theme.isDarkMode ? styles.dark : styles.light
                }`}
            >
                <ContentContainer
                    className={styles.topBar}
                    maxWidth={"52rem"}
                    padding={"18px"}
                >
                    <Breadcrumbs
                        crumbs={crumbs}
                        isDarkMode={theme.isDarkMode}
                    />
                    <div className={styles.rightGroup}>
                        {!isSmallScreen && isOnIndexPage && (
                            <SearchBar
                                query={blogContext.searchQuery}
                                setQuery={blogContext.setSearchQuery}
                            />
                        )}
                        <DarkModeToggler />
                    </div>
                </ContentContainer>
                {isSmallScreen && isOnIndexPage && (
                    <div className={styles.separateSearchBar}>
                        <SearchBar
                            query={blogContext.searchQuery}
                            setQuery={blogContext.setSearchQuery}
                        />
                    </div>
                )}
                {/* <ContentContainer padding="24px 24px 0 24px">
                    <TagFilter tags={filterTags} />
                </ContentContainer> */}
                {children}
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
