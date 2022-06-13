import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "styles/global.scss";
import { DarkModeProvider } from "src/contexts/LightDarkThemeProvider";
import PageLayout from "src/layout/PageLayout";

/* --------------------------- Global blog styles --------------------------- */
// Applies formatting and typography styles to any LaTeX expression embedded
// in the .mdx blogs.
import "katex/dist/katex.min.css";

// Applies syntax highlighting to all ``` and ` code snippets in the .mdx blogs.
// See a list of more themes here: https://github.com/PrismJS/prism-themes.
import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <DarkModeProvider>
            <Head>
                <title>Tim&apos;s Dev Portfolio and Blog</title>
                <meta
                    name="description"
                    content="Welcome to my developer portfolio and blog. Learn some things with me!"
                ></meta>
            </Head>
            {/* Note: `exitBeforeEnter` makes it so that when navigating to a
                       new page, the current page must fully animate out BEFORE
                       the new page can come in. */}
            <PageLayout>
                <div style={{ position: "relative" }}>
                    <div style={{ position: "static" }}>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} key={router.route} />
                        </AnimatePresence>
                    </div>
                </div>
            </PageLayout>
        </DarkModeProvider>
    );
}

export default MyApp;
