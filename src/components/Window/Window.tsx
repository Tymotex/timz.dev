import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import styles from "./Window.module.scss";

type OutsideClickHandler = () => void;

interface Props {
    children?: React.ReactNode;
    onClickOutside: OutsideClickHandler;
}

/**
 * Runs the given callback whenever the user clicks outside the component that
 * `ref` points to.
 */
const useClickOutside = (
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

const Window: React.FC<Props> = ({ children, onClickOutside }) => {
    const windowRef = useRef(null);
    useClickOutside(windowRef, onClickOutside);

    return (
        <>
            <motion.div
                ref={windowRef}
                className={styles.window}
                initial={{
                    opacity: 0,
                    position: "absolute",
                    transform: "translateX(-50%)",
                    top: "150px",
                }}
                animate={{
                    opacity: 1,
                    position: "absolute",
                    top: "100px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.75,
                }}
                style={{}}
            >
                <Link href="/">
                    <CloseIcon
                        aria-label="Close"
                        size={32}
                        className={styles.closeButton}
                    />
                </Link>
                {children}
                <div className={styles.bottomGap} />
            </motion.div>
        </>
    );
};

export default Window;
