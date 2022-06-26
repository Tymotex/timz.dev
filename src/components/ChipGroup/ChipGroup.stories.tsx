import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import TechnologyChipGroup from "./TechnologyChipGroup";

export default {
    title: "Portfolio/ChipGroup",
    component: TechnologyChipGroup,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof TechnologyChipGroup>;

const Template: ComponentStory<typeof TechnologyChipGroup> = (args) => (
    <TechnologyChipGroup {...args} />
);

export const TechStack = Template.bind({});
TechStack.args = {
    technologies: ["python", "SQL"],
};
