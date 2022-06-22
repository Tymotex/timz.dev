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

interface Props {
    workExperiences: WorkExperience[];
}

//TODO: Clean up this file.
const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
);

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const HORIZONTAL_PADDING = 8;
const AnimatedContext =
    React.createContext<{
        setActiveRect: Dispatch<SetStateAction<any>>;
    } | null>(null);

function AnimatedTabs({ color, children, ...rest }) {
    // some state to store the position we want to animate to
    const [activeRect, setActiveRect] = React.useState<any>(null);
    const ref = React.useRef<any>();
    const rect = useRect(ref);

    return (
        // put the function to change the styles on context so an active Tab
        // can call it, then style it up
        <AnimatedContext.Provider value={{ setActiveRect }}>
            {/* make sure to forward props since we're wrapping Tabs */}
            <Tabs
                {...rest}
                ref={ref}
                style={{ ...rest.style, position: "relative" }}
            >
                <div
                    style={{
                        position: "absolute",
                        height: 2,
                        background: color,
                        transition: "all 300ms ease",
                        left:
                            (activeRect && activeRect.left) -
                            ((rect !== null &&
                                typeof rect !== "undefined" &&
                                rect.left) ||
                                0) +
                            HORIZONTAL_PADDING,
                        top:
                            (activeRect && activeRect.bottom) -
                            ((rect && rect.top) || 0),
                        // subtract both sides of horizontal padding to center the div
                        width:
                            activeRect &&
                            activeRect.width - HORIZONTAL_PADDING * 2,
                    }}
                />
                {children}
            </Tabs>
        </AnimatedContext.Provider>
    );
}

function AnimatedTab({ index, ...props }) {
    // get the currently selected index from useTabsContext
    const { selectedIndex } = useTabsContext();
    const isSelected = selectedIndex === index;

    // measure the size of our element, only listen to rect if active
    const ref = React.useRef<any>();
    const rect = useRect(ref, { observe: isSelected });

    // get the style changing function from context
    const animatedContext = useContext(AnimatedContext);

    // callup to set styles whenever we're active
    useIsomorphicLayoutEffect(() => {
        if (isSelected) {
            animatedContext?.setActiveRect(rect);
        }
    }, [isSelected, rect, animatedContext?.setActiveRect]);

    return (
        <Tab
            ref={ref}
            {...props}
            style={{
                ...props.style,
                border: "none",
                padding: `4px ${HORIZONTAL_PADDING}px`,
            }}
        />
    );
}

const WorkExperienceTabs: React.FC<Props> = ({ workExperiences }) => {
    return (
        <>
            <AnimatedTabs color="red">
                <TabList>
                    {workExperiences &&
                        workExperiences.map((work, i) => (
                            <AnimatedTab
                                index={i}
                                style={{ flex: 1 }}
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
            </AnimatedTabs>
        </>
    );
};

export default WorkExperienceTabs;
