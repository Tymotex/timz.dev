import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ParticleWallpaper } from "src/components/Particles";
import { DarkModeProvider } from "src/contexts/LightDarkThemeProvider";
import portfolio from "content/portfolio/portfolio";
import { useTransitionFix } from "src/hooks/routerHooks";
import "styles/global.scss";
import "src/blog-components/global.scss";

/* --------------------------- Global blog styles --------------------------- */
// Applies formatting and typography styles to any LaTeX expression embedded
// in the .mdx blogs.
import "katex/dist/katex.min.css";

// Applies syntax highlighting to all ``` and ` code snippets in the .mdx blogs.
// See a list of more themes here: https://github.com/PrismJS/prism-themes.
import "prismjs/themes/prism-tomorrow.css";

const App = ({ Component, pageProps, router }: AppProps) => {
    const [isBlogPage, setIsBlogPage] = useState<boolean>(
        /^\/blogs/.test(router.pathname),
    );
    useTransitionFix();

    useEffect(() => {
        setIsBlogPage(/^\/blogs/.test(router.pathname));
    }, [router.pathname]);

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
            <AnimatePresence>
                {!isBlogPage && <ParticleWallpaper />}
            </AnimatePresence>

            {/* Note: `exitBeforeEnter` makes it so that when navigating to a
                       new page, the current page must fully animate out BEFORE
                       the new page can come in. */}
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </DarkModeProvider>
    );
};

export default App;
