import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import Button from "./Button";
import { FiGithub as GitHubIcon } from "react-icons/fi";
import { MdOutlineArrowRightAlt as RightArrowIcon } from "react-icons/md";

export default {
    title: "Portfolio/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    type: "primary",
    text: "Start",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    type: "secondary",
    text: "GitHub",
    icon: <GitHubIcon />,
    iconPosition: "left",
};

export const ReadMore = Template.bind({});
ReadMore.args = {
    type: "primary",
    callToAction: true,
    shape: "pill",
    text: "Read more",
    icon: <RightArrowIcon />,
    iconPosition: "right",
    iconInset: true,
};
