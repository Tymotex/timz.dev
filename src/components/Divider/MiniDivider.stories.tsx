import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import MiniDivider from "./MiniDivider";

export default {
    title: "Portfolio/MiniDivider",
    component: MiniDivider,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof MiniDivider>;

const Template: ComponentStory<typeof MiniDivider> = (args) => (
    <MiniDivider {...args} />
);

export const BasicMiniDivider = Template.bind({});
BasicMiniDivider.args = {};
