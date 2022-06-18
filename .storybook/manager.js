import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const mytheme = create({
    base: 'dark',

    // UI
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textInverseColor: '#022B3A',

    brandTitle: "Timz.Dev",
    brandUrl: "https://timz.dev",
    brandTarget: "_self"
});

addons.setConfig({
    theme: mytheme
});
