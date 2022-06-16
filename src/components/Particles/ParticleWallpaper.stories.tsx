import { withTests } from "@storybook/addon-jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { ParticleType } from ".";
import ParticleWallpaper from "./ParticleWallpaper";

export default {
    title: "Portfolio/ParticleWallpaper",
    component: ParticleWallpaper,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withTests({ results })],
} as ComponentMeta<typeof ParticleWallpaper>;

const Template: ComponentStory<typeof ParticleWallpaper> = (args) => (
    <ParticleWallpaper {...args} />
);

export const Networks = Template.bind({});
Networks.args = {
    particleType: ParticleType.Networks,
};

export const Stars = Template.bind({});
Stars.args = {
    particleType: ParticleType.Stars,
};
