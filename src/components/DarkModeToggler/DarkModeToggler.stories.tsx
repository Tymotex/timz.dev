import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import DarkModeToggler from "./DarkModeToggler";
import { withReactContext } from "storybook-react-context";
import {
    DarkModeContext,
    DarkModeContextProps,
} from "src/contexts/LightDarkThemeProvider";

export default {
    title: "Portfolio/DarkModeToggler",
    component: DarkModeToggler,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        withTests({ results }),
        withReactContext({
            Context: DarkModeContext,
            initialState: {
                isDarkMode: localStorage.getItem("isDarkMode") === "true",
                // Note: this toggler only affects `localStorage`. Changes to
                //       `localStorage` will only reflect on page load.
                toggleDarkMode: () => {
                    const darkMode =
                        localStorage.getItem("isDarkMode") === "true";
                    localStorage.setItem("isDarkMode", (!darkMode).toString());
                },
            } as Partial<DarkModeContextProps>,
        }),
    ],
} as ComponentMeta<typeof DarkModeToggler>;

const Template: ComponentStory<typeof DarkModeToggler> = (args) => (
    <DarkModeToggler {...args} />
);

export const Toggler = Template.bind({});
Toggler.args = {};
