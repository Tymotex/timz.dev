import "@reach/combobox/styles.css";
import portfolio from "content/portfolio/portfolio";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "src/blog-components/global.scss";
import { DarkModeProvider } from "src/contexts/LightDarkThemeProvider";
import { useTransitionFix } from "src/hooks/routerHooks";
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

const App = ({ Component, pageProps, router }: AppProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    useTransitionFix();

    return (
        <DarkModeProvider>
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

            {/* Only show the particle wallpaper when on blog routes. */}
            <AnimatePresence exitBeforeEnter>
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
                <AnimatePresence exitBeforeEnter>
                    {router.pathname.startsWith("/blogs") ? (
                        <BlogLayout>
                            <Component {...pageProps} key={router.route} />
                        </BlogLayout>
                    ) : (
                        <Component {...pageProps} key={router.route} />
                    )}
                </AnimatePresence>
            </BlogContext.Provider>
        </DarkModeProvider>
    );
};

export default App;
