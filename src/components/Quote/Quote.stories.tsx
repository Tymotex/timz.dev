import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Quote from "./Quote";

export default {
    title: "Portfolio/Quote",
    component: Quote,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const FunnyQuote = Template.bind({});
FunnyQuote.args = {
    quote: "Software and cathedrals are much the same – first we build them, then we pray.",
    author: "Sam Redwine",
};

export const FreeWillQuote = Template.bind({});
FreeWillQuote.args = {
    quote: "If you pay attention to your inner life, you will see that the emergence of choices, efforts, and intentions is a fundamentally mysterious process.",
    author: "Sam Harris",
    source: "Free Will",
    url: "https://www.samharris.org/",
};
