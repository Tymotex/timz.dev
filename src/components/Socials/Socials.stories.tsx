import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Socials from "./Socials";
import {
    FiGithub as GitHubIcon,
    FiYoutube as YoutubeIcon,
} from "react-icons/fi";
import { RiLinkedinLine as LinkedInIcon } from "react-icons/ri";

export default {
    title: "Portfolio/Socials",
    component: Socials,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
    <Socials {...args} />
);

export const BasicSocials = Template.bind({});
BasicSocials.args = {
    socials: [
        {
            icon: <GitHubIcon aria-hidden />,
            url: "https://github.com/Tymotex/",
        },
        {
            icon: <LinkedInIcon aria-hidden />,
            url: "https://www.linkedin.com/in/timz-seng",
        },
        {
            icon: <YoutubeIcon aria-hidden />,
            url: "https://www.youtube.com/channel/UCIuefX9zQPux3lGCkDOdlIQ",
        },
    ],
};
