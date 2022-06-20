// See: https://stackoverflow.com/questions/62654080/use-global-scss-with-storybook.
import '!style-loader!css-loader!sass-loader!../src/blog-components/global.scss';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}