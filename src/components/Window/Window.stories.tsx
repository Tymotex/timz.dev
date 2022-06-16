import React, { Fragment } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import results from "artifacts/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Window from "./Window";

import { withReactContext } from "storybook-react-context";
import {
    DarkModeContext,
    DarkModeContextProps,
} from "src/contexts/LightDarkThemeProvider";

export default {
    title: "Portfolio/Window",
    component: Window,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        withTests({ results }),
        withReactContext({
            Context: DarkModeContext,
            initialState: {
                isDarkMode: localStorage.getItem("isDarkMode") === "true",
            } as Partial<DarkModeContextProps>,
        }),
    ],
} as ComponentMeta<typeof Window>;

const Template: ComponentStory<typeof Window> = (args) => <Window {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: (
        <>
            <h1>Hello world</h1>
            <p>
                Cupidatat nulla ex deserunt velit do velit incididunt amet qui.
                Tempor officia culpa sit amet consectetur. Sunt veniam anim eu
                nisi sint ipsum. Amet laboris pariatur nulla mollit sint
                officia. Officia magna commodo reprehenderit aute excepteur.
            </p>
        </>
    ),
};

export const Scrolling = Template.bind({});
Scrolling.args = {
    children: (
        <>
            <h1>Hello world</h1>
            {[...Array(10)].map((_, i) => (
                <Fragment key={i}>
                    <p>
                        Cupidatat nulla ex deserunt velit do velit incididunt
                        amet qui. Tempor officia culpa sit amet consectetur.
                        Sunt veniam anim eu nisi sint ipsum. Amet laboris
                        pariatur nulla mollit sint officia. Officia magna
                        commodo reprehenderit aute excepteur.
                    </p>
                    <p>
                        Lorem veniam nulla eiusmod et quis voluptate anim nisi.
                        Nisi tempor esse ex culpa sint esse adipisicing
                        consequat tempor mollit cupidatat occaecat esse ipsum.
                        Deserunt nulla sunt labore ipsum commodo anim proident
                        nostrud non velit officia aute incididunt mollit.
                    </p>
                    <p>
                        Eu deserunt ea tempor sunt excepteur cillum eiusmod non
                        nulla aliquip eu qui irure. Ex aliqua enim est id
                        consequat pariatur ut do laboris. Id sit est cupidatat
                        labore proident. Fugiat aliqua aute excepteur non Lorem
                        mollit aute esse dolore ipsum eu est dolore. Nulla culpa
                        ipsum nulla labore nostrud adipisicing et ad. Occaecat
                        proident magna qui in. Aliqua ut cillum ea pariatur
                        voluptate magna laborum laborum.
                    </p>
                </Fragment>
            ))}
        </>
    ),
};
