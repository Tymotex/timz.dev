import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import Stack from "./Stack";

export default {
    title: "Portfolio/Stack",
    component: Stack,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

const Blocks = () => (
    <>
        <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
        <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
        <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
        <div style={{ background: "#DDDDDD", width: 75, height: 75 }} />
        <div style={{ background: "#DDDDDD", width: 50, height: 50 }} />
        <div style={{ background: "#DDDDDD", width: 100, height: 100 }} />
    </>
);

export const LeftAlignedHorizontal = Template.bind({});
LeftAlignedHorizontal.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "flex-start",
    direction: "horizontal",
};

export const CenteredHorizontal = Template.bind({});
CenteredHorizontal.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "center",
    direction: "horizontal",
};

export const RightAlignedHorizontal = Template.bind({});
RightAlignedHorizontal.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "flex-end",
    direction: "horizontal",
};

export const LeftAlignedVertical = Template.bind({});
LeftAlignedVertical.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "flex-start",
    direction: "vertical",
};

export const CenteredVertical = Template.bind({});
CenteredVertical.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "center",
    direction: "vertical",
};

export const RightAlignedVertical = Template.bind({});
RightAlignedVertical.args = {
    children: <Blocks />,
    rowGap: 10,
    columnGap: 10,
    alignItems: "flex-end",
    direction: "vertical",
};
