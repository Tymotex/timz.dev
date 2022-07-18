import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
    text: string;
    type?: "button" | "submit";
    colour?: "primary" | "secondary" | "tertiary";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    shape?: "pill" | "box";
    callToAction?: boolean;
    internalUrl?: string;
    externalUrl?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // Adds an outline and inset box-shadow to the icon.
    iconInset?: boolean;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    type = "button",
    colour = "primary",
    icon,
    iconPosition,
    shape = "box",
    callToAction = false,
    iconInset = false,
    internalUrl,
    externalUrl,
    onClick,
    ariaLabel,
}) => {
    let buttonClass = styles.primary;
    switch (colour) {
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

    const ButtonCore = (
        <button
            onClick={onClick}
            className={`${styles.button} ${buttonClass} ${
                callToAction && styles.callToAction
            }`}
            type={type}
            style={{
                flexDirection: iconPosition === "left" ? "row" : "row-reverse",
                borderRadius: shape === "pill" ? 200 : 5,
            }}
            aria-label={ariaLabel}
        >
            {icon && (
                <span className={`${styles.icon} ${iconInset && styles.inset}`}>
                    {icon}
                </span>
            )}
            {text && <span>{text}</span>}
        </button>
    );

    const ButtonWithLink = externalUrl ? (
        <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.anchor}
        >
            {ButtonCore}
        </a>
    ) : internalUrl ? (
        <Link href={internalUrl} scroll={false}>
            {ButtonCore}
        </Link>
    ) : (
        ButtonCore
    );

    return ButtonWithLink;
};

export default Button;
