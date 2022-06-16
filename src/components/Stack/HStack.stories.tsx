import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import HStack from "./HStack";

export default {
    title: "Portfolio/HStack",
    component: HStack,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />;

export const TopAligned = Template.bind({});
TopAligned.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    columnGap: 10,
    rowGap: 10,
    alignItems: "flex-start",
};

export const Centered = Template.bind({});
Centered.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    columnGap: 10,
    rowGap: 10,
    alignItems: "center",
};

export const BottomAligned = Template.bind({});
BottomAligned.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    columnGap: 10,
    rowGap: 10,
    alignItems: "flex-end",
};
