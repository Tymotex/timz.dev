import { useRect } from "@reach/rect";
import { Tab, useTabsContext } from "@reach/tabs";
import React, { useContext } from "react";
import { useIsomorphicLayoutEffect } from "src/hooks/windowHooks";
import { AnimatedContext, HORIZONTAL_PADDING } from "./AnimatedTabGroup";
import styles from "./AnimatedTabs.module.scss";

interface Props {
    index: number;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const AnimatedTab: React.FC<Props> = ({ index, style, children }) => {
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
            className={`${styles.tab} ${isSelected && styles.currentTab}`}
            style={{
                ...style,
                border: "none",
            }}
        >
            {children}
        </Tab>
    );
};

export default AnimatedTab;
