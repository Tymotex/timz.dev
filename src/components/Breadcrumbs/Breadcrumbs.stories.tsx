import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Breadcrumbs from "./Breadcrumbs";
import { withReactContext } from "storybook-react-context";
import {
    DarkModeContext,
    DarkModeContextProps,
} from "src/contexts/LightDarkThemeProvider";

export default {
    title: "Portfolio/Breadcrumbs",
    component: Breadcrumbs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        withTests({ results }),
        withReactContext({
            Context: DarkModeContext,
            initialState: {
                isDarkMode: localStorage.getItem("isDarkMode") === "true",
            } as Partial<DarkModeContextProps>,
        }),
    ],
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Breadcrumbs {...args} />
);

export const BasicBreadcrumbs = Template.bind({});
BasicBreadcrumbs.args = {};
