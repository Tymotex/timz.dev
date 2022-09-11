const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 'i18n' is an abbreviation for 'internationalisation'.
    // Assign the locale (a set of language/country preferences) for
    // better accessibility.
    // See: https://melvingeorge.me/blog/set-html-lang-attribute-in-nextjs.
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    // Note: generating source maps for production increases build times, but
    //       it's necessary to get `source-map-explorer` working.
    // See: https://stackoverflow.com/questions/67916628/next-js-how-to-use-source-map-explorer-with-next-js.
    productionBrowserSourceMaps: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, "styles")]
    },
    images: {
        domains: ['tymotex.github.io', 'raw.githubusercontent.com', 'github-readme-stats.vercel.app'],
    },
    // If the host is `blog.timz.dev`, this rewrite is applied.
    // See: https://vercel.com/support/articles/can-i-redirect-from-a-subdomain-to-a-subpath.
    rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/:path*',
                    has: [
                        {
                            type: 'host',
                            value: 'blog.timz.dev',
                        },
                    ],
                    destination: '/blog/:path*',
                },
            ]
        }
    }
}

// When the ANALYZE environment variable is true, then running `next build` will
// open up the webpack-bundle-analyzer Treemap to show a breakdown of the
// dependencies contributing to the bundle size.
const withBundleAnalyser = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyser(nextConfig);
