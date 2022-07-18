import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { OutsideClickHandler, useClickOutside } from "src/hooks/windowHooks";
import Breadcrumbs from "../Breadcrumbs";
import { Crumb } from "../Breadcrumbs/Breadcrumbs";
import styles from "./Window.module.scss";

interface Props {
    children?: React.ReactNode;
    onClickOutside?: OutsideClickHandler;
    crumbs?: Crumb[];
}

const Window: React.FC<Props> = ({
    children,
    onClickOutside = () => {},
    crumbs,
}) => {
    const windowRef = useRef(null);
    useClickOutside(windowRef, onClickOutside);

    return (
        <motion.div
            data-testid={"portfolio-window"}
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
            {crumbs && crumbs.length > 0 && (
                <Breadcrumbs className={styles.breadcrumbs} crumbs={crumbs} />
            )}
            <Link href="/" scroll={false}>
                <CloseIcon
                    aria-label="Close"
                    size={32}
                    className={styles.closeButton}
                />
            </Link>
            {children}
        </motion.div>
    );
};

export default Window;
