import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import VStack from "./VStack";

export default {
    title: "Portfolio/VStack",
    component: VStack,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />;

export const LeftAligned = Template.bind({});
LeftAligned.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    rowGap: 10,
    alignItems: "flex-start",
};

export const Centered = Template.bind({});
Centered.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    rowGap: 10,
    alignItems: "center",
};

export const RightAligned = Template.bind({});
RightAligned.args = {
    children: (
        <>
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
            <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
            <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        </>
    ),
    rowGap: 10,
    alignItems: "flex-end",
};
