const path = require('path');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.stories.tsx"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        // This preset enables support for scss modules.
        "@storybook/preset-scss",
        // Jest test integrations.
        "@storybook/addon-jest"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    staticDirs: ['../public'],
    // Ensures that absolute import paths work from *.stories.(jsx|tsx)* files.
    // Sourced from: https://stackoverflow.com/questions/51771077/storybook-with-absolute-paths.
    webpackFinal: async (config) => {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, "../"),
        ];
        return config;
    }
}