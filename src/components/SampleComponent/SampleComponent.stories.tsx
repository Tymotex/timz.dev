import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import SampleComponent from "./SampleComponent";
import { withReactContext } from "storybook-react-context";
import {
    DarkModeContext,
    DarkModeContextProps,
} from "src/contexts/LightDarkThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/SampleComponent",
    component: SampleComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        withTests({ results }),
        withReactContext({
            Context: DarkModeContext,
            initialState: {
                isDarkMode: false,
            } as Partial<DarkModeContextProps>,
        }),
    ],
} as ComponentMeta<typeof SampleComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SampleComponent> = (args) => (
    <SampleComponent {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    text: "Hello world",
};

export const GoodbyeCruelWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GoodbyeCruelWorld.args = {
    text: "Goodbye, cruel world.",
    background: "#b7b7b7",
};
