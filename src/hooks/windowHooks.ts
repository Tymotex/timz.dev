import { useEffect } from "react";

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
