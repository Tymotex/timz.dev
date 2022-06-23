import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useLayoutEffect,
} from "react";
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    useTabsContext,
} from "@reach/tabs";
import { WorkExperience } from "content/portfolio/portfolio";
import { useRect } from "@reach/rect";
import { useIsomorphicLayoutEffect } from "src/hooks/windowHooks";
import AnimatedTabGroup from "./AnimatedTabGroup";
import AnimatedTab from "./AnimatedTab";
import styles from "./AnimatedTabs.module.scss";

interface Props {
    workExperiences: WorkExperience[];
}

const WorkExperienceTabs: React.FC<Props> = ({ workExperiences }) => {
    return (
        <>
            <AnimatedTabGroup>
                <TabList className={styles.tabList}>
                    {workExperiences &&
                        workExperiences.map((work, i) => (
                            <AnimatedTab
                                index={i}
                                key={work.company + work.jobTitle}
                            >
                                {work.company} ({work.employmentType})
                            </AnimatedTab>
                        ))}
                </TabList>

                <TabPanels>
                    {workExperiences &&
                        workExperiences.map((work) => (
                            <TabPanel key={work.company + work.jobTitle}>
                                <h2>{work.jobTitle}</h2>
                                {work.description}
                            </TabPanel>
                        ))}
                </TabPanels>
            </AnimatedTabGroup>
        </>
    );
};

export default WorkExperienceTabs;
