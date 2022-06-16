import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import AsideLinkGroup from "./AsideLinkGroup";

export default {
    title: "Portfolio/AsideLinkGroup",
    component: AsideLinkGroup,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof AsideLinkGroup>;

const Template: ComponentStory<typeof AsideLinkGroup> = (args) => (
    <AsideLinkGroup {...args} />
);

export const LinkGroup = Template.bind({});
LinkGroup.args = {
    links: [
        { text: "Resume", url: "/resume" },
        { text: "About", url: "/about" },
        { text: "Contact", url: "/contact" },
    ],
};
