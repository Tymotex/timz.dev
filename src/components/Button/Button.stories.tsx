import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import Button from "./Button";
import { FiGithub } from "react-icons/fi";

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
    text: "Read More",
    icon: <FiGithub />,
    iconPosition: "left",
};
