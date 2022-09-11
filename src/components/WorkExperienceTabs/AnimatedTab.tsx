import { useRect } from "@reach/rect";
import { Tab, useTabsContext } from "@reach/tabs";
import Image from "next/image";
import React, { useContext } from "react";
import { useIsomorphicLayoutEffect } from "src/hooks/window";
import { AnimatedContext, HORIZONTAL_PADDING } from "./AnimatedTabGroup";
import styles from "./AnimatedTabs.module.scss";

interface Props {
    index: number;
    children: React.ReactNode;
    popupImage?: {
        src: string;
        alt: string;
    };
    style?: React.CSSProperties;
}

const AnimatedTab: React.FC<Props> = ({
    index,
    style,
    popupImage,
    children,
}) => {
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
        <>
            {popupImage && (
                <div
                    className={`${styles.companyLogo} ${
                        !isSelected && styles.hidden
                    }`}
                    style={{
                        position: "absolute",
                        height: rect && rect.height,
                        width: 100,
                        left: -120,
                        top: rect && rect.height * index,
                    }}
                >
                    <Image
                        src={popupImage.src}
                        alt={popupImage.alt}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            )}
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
        </>
    );
};

export default AnimatedTab;
