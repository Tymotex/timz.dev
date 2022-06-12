import type { AppProps } from "next/app";
import "styles/global.scss";

/* --------------------------- Global blog styles --------------------------- */
// Applies formatting and typography styles to any LaTeX expression embedded
// in the .mdx blogs.
import "katex/dist/katex.min.css";

// Applies syntax highlighting to all ``` and ` code snippets in the .mdx blogs.
// See a list of more themes here: https://github.com/PrismJS/prism-themes.
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import SampleComponent from "src/components/SampleComponent";
import { DarkModeProvider } from "src/contexts/LightDarkThemeProvider";
import { DarkModeToggler } from "src/components/DarkModeToggler";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DarkModeProvider>
            <Head>
                <title>Tim&apos;s Dev Portfolio and Blog</title>
                <meta
                    name="description"
                    content="Welcome to my developer portfolio and blog. Learn some things with me!"
                ></meta>
            </Head>
            <Component {...pageProps} />
        </DarkModeProvider>
    );
}

export default MyApp;
