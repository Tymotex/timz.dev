import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Image from "./Image";

export default {
    title: "Blog/Image",
    component: Image,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const BasicImage = Template.bind({});
BasicImage.args = {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    width: 400,
};
