import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "styles/global.scss";
import Head from "next/head";
import { DarkModeProvider } from "src/contexts/LightDarkThemeProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ParticleWallpaper } from "src/components/Particles";
import OgImage from "public/og-image.avif";

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

    useEffect(() => {
        setIsBlogPage(/^\/blogs/.test(router.pathname));
    }, [router.pathname]);

    return (
        <DarkModeProvider>
            <Head>
                <title>Tim Zhang - Developer Portfolio and Blog</title>
                <meta
                    name="description"
                    content="Welcome to my developer portfolio and blog where I try to explore and demystify the intracacies of software engineering."
                />
                <meta
                    property="og:title"
                    content="Tim Zhang's Developer Portfolio and Blog"
                />
                <meta property="og:image" content={OgImage.src} />
                <meta
                    property="og:description"
                    content="A curious developer's portfolio and blog on all things software engineering."
                />
            </Head>
            {/* Note: `exitBeforeEnter` makes it so that when navigating to a
                       new page, the current page must fully animate out BEFORE
                       the new page can come in. */}
            <AnimatePresence>
                {!isBlogPage && <ParticleWallpaper />}
            </AnimatePresence>

            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </DarkModeProvider>
    );
};

export default App;
