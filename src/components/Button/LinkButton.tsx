import Link from "next/link";
import React from "react";
import Button, { ButtonProps } from "./Button";
import styles from "./Button.module.scss";

interface LinkButtonProps extends ButtonProps {
    href: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
    const isExternalUrl = props.href[0] !== "/";
    const openInNewTabProps = isExternalUrl && {
        rel: "noreferrer",
        target: "_blank",
    };
    return (
        <Link href={props.href} scroll={false}>
            <a className={styles.linkButton} {...openInNewTabProps}>
                <Button {...props} />
            </a>
        </Link>
    );
};

export default LinkButton;
