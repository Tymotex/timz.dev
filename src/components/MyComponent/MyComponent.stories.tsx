import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import MyComponent from "./MyComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/MyComponent",
    component: MyComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof MyComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyComponent> = (args) => (
    <MyComponent {...args} />
);

export const Example1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example1.args = {};

export const Example2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example2.args = {};
