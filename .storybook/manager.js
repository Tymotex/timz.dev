import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const mytheme = create({
    base: 'light',

    // UI
    appBg: '#022B3A',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#E1E5F2',
    textInverseColor: '#022B3A',

    // Toolbar default and active colors
    barTextColor: '#E1E5F2',
    barSelectedColor: '#FFFFFF',
    barBg: '#353535',

    brandTitle: "Timz.Dev",
    brandUrl: "https://timz.dev",
    brandTarget: "_self"
});

addons.setConfig({
    theme: mytheme
});
