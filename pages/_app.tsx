import "@reach/combobox/styles.css";
import { Analytics } from "@vercel/analytics/react";
import portfolio from "content/portfolio/portfolio";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "src/blog-components/global.scss";
import { ThemeProvider } from "src/contexts/ThemeProvider";
import { useTransitionFix } from "src/hooks/router";
import "styles/global.scss";

/* --------------------------- Global blog styles --------------------------- */
// Applies formatting and typography styles to any LaTeX expression embedded
// in the .mdx blogs.
import "katex/dist/katex.min.css";

// Applies syntax highlighting to all ``` and ` code snippets in the .mdx blogs.
// See a list of more themes here: https://github.com/PrismJS/prism-themes.
import "prism-themes/themes/prism-atom-dark.min.css";
import { BlogContext } from "src/contexts/BlogContext";
import { BlogLayout } from "src/layout";
import { ParticleWallpaper } from "src/components/Particles";

// Menu button default styles. See: https://reach.tech/menu-button
import "@reach/menu-button/styles.css";

const App = ({ Component, pageProps, router }: AppProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    useTransitionFix();

    return (
        <ThemeProvider>
            <Head>
                <title>{portfolio.meta.mainTitle}</title>
                <meta
                    name="description"
                    content={portfolio.meta.mainDescription}
                />
                <meta property="og:title" content={portfolio.meta.ogTitle} />
                <meta property="og:image" content={portfolio.meta.ogImage} />
                <meta
                    property="og:description"
                    content={portfolio.meta.ogDescription}
                />
            </Head>
            <Analytics />

            {/* Only show the particle wallpaper when on blog routes. */}
            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <ParticleWallpaper
                    darkOverlayForUrls={
                        new Set<string>([
                            "/projects",
                            "/work",
                            "/contact",
                            "/about",
                        ])
                    }
                />
            </AnimatePresence>

            {/* Note: `exitBeforeEnter` makes it so that when navigating to a
                       new page, the current page must fully animate out BEFORE
                       the new page can come in. */}
            <BlogContext.Provider value={{ searchQuery, setSearchQuery }}>
                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    {router.pathname.startsWith("/blogs") ? (
                        <BlogLayout>
                            <Component {...pageProps} key={router.route} />
                        </BlogLayout>
                    ) : (
                        <Component {...pageProps} key={router.route} />
                    )}
                </AnimatePresence>
            </BlogContext.Provider>
        </ThemeProvider>
    );
};

export default App;
