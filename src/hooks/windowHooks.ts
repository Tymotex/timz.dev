import { useEffect, useLayoutEffect, useState } from "react";

export type OutsideClickHandler = () => void;

/**
 * Runs the given callback whenever the user clicks outside the component that
 * `ref` points to.
 */
export const useClickOutside = (
    ref: React.RefObject<any>,
    outsideClickHandler: OutsideClickHandler,
) => {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target))
                outsideClickHandler();
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, outsideClickHandler]);
};

/**
 * Determines whether we can use `useLayoutEffect` or not.
 */
const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
);

export const useIsomorphicLayoutEffect = canUseDOM
    ? useLayoutEffect
    : useEffect;

/**
 * Determines whether the screen width is below a given breakpoint.
 */
export const useBreakpointTrigger = (breakpoint: number): boolean => {
    const [width, setWidth] = useState<number>(0);

    // Initialise the width. Note: we must do this in `useEffect` since window
    // is undefined on the server side.
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    //
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return width <= breakpoint;
};
