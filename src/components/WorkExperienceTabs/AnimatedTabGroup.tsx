import { useRect } from "@reach/rect";
import { Tabs } from "@reach/tabs";
import React, { Dispatch, SetStateAction } from "react";
import { useBreakpointTrigger } from "src/hooks/windowHooks";
import styles from "./AnimatedTabs.module.scss";

export const HORIZONTAL_PADDING = 8;
export const AnimatedContext =
    React.createContext<{
        setActiveRect: Dispatch<SetStateAction<any>>;
    } | null>(null);

interface Props {
    children: JSX.Element | JSX.Element[];
    defaultIndex?: number;
    style?: React.CSSProperties;
}

const AnimatedTabGroup: React.FC<Props> = ({
    children,
    defaultIndex,
    style,
}) => {
    // some state to store the position we want to animate to
    const [activeRect, setActiveRect] = React.useState<any>(null);
    const isScreenLg = !useBreakpointTrigger(992);
    const ref = React.useRef<any>();
    const rect = useRect(ref);

    const horizontalLeftOffset =
        (activeRect && activeRect.left) -
        ((rect !== null && typeof rect !== "undefined" && rect.left) || 0);
    const horizontalTopOffset =
        (activeRect && activeRect.bottom) - ((rect && rect.top) || 0);
    const verticalTopOffset =
        (activeRect && activeRect.bottom) -
        ((rect && rect.top) || 0) -
        (activeRect && activeRect.height);

    return (
        // put the function to change the styles on context so an active Tab
        // can call it, then style it up
        <AnimatedContext.Provider value={{ setActiveRect }}>
            {/* make sure to forward style since we're wrapping Tabs */}
            <Tabs
                ref={ref}
                defaultIndex={defaultIndex}
                style={{ ...style, position: "relative" }}
                className={styles.animatedTabGroup}
            >
                {/* Current tab highlighter. */}
                <div
                    className={styles.currentTabHighlighter}
                    style={{
                        left: !isScreenLg ? horizontalLeftOffset : 0,
                        top: !isScreenLg
                            ? horizontalTopOffset
                            : verticalTopOffset,
                        width: !isScreenLg ? activeRect && activeRect.width : 3,
                        height: isScreenLg
                            ? activeRect && activeRect.height
                            : 3,
                    }}
                />
                {children}
            </Tabs>
        </AnimatedContext.Provider>
    );
};

export default AnimatedTabGroup;
