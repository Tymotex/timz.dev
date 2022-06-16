import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

interface Props {
    text: string;
    type?: "primary" | "secondary" | "tertiary";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    shape?: "pill" | "box";
}

const Button: React.FC<Props> = ({
    text,
    type = "primary",
    icon,
    iconPosition,
    shape,
}) => {
    let buttonClass = styles.primary;
    switch (type) {
        case "primary":
            buttonClass = styles.primary;
            break;
        case "secondary":
            buttonClass = styles.secondary;
            break;
        case "tertiary":
            buttonClass = styles.tertiary;
            break;
        default:
            buttonClass = styles.primary;
    }

    return (
        <button
            className={`${styles.button} ${buttonClass}`}
            style={{
                flexDirection: iconPosition === "left" ? "row" : "row-reverse",
                borderRadius: shape === "pill" ? 200 : 5,
            }}
        >
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default Button;
