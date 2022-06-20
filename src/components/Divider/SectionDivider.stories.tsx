import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import SectionDivider from "./SectionDivider";

export default {
    title: "Portfolio/SectionDivider",
    component: SectionDivider,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof SectionDivider>;

const Template: ComponentStory<typeof SectionDivider> = (args) => (
    <SectionDivider {...args} />
);

export const BasicSectionDivider = Template.bind({});
BasicSectionDivider.args = {
    text: "Hello World",
};
