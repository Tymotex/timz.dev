import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import ChipGroup from "./ChipGroup";

export default {
    title: "Portfolio/ChipGroup",
    component: ChipGroup,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof ChipGroup>;

const Template: ComponentStory<typeof ChipGroup> = (args) => (
    <ChipGroup {...args} />
);

export const TechStack = Template.bind({});
TechStack.args = {
    technologies: ["python", "sql"],
};
