import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { WorkExperience } from "content/portfolio/portfolio";

interface Props {
    workExperiences: WorkExperience[];
}

const WorkExperienceTabs: React.FC<Props> = ({ workExperiences }) => {
    return (
        <>
            <Tabs>
                <TabList>
                    {workExperiences &&
                        workExperiences.map((work) => (
                            <Tab key={work.company + work.jobTitle}>
                                {work.company} ({work.employmentType})
                            </Tab>
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
            </Tabs>
        </>
    );
};

export default WorkExperienceTabs;
