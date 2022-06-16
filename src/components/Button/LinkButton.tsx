import Link from "next/link";
import React from "react";
import Button, { ButtonProps } from "./Button";
import styles from "./Button.module.scss";

interface LinkButtonProps extends ButtonProps {
    href: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
    return (
        <Link href={props.href}>
            <a className={styles.linkButton}>
                <Button {...props} />
            </a>
        </Link>
    );
};

export default LinkButton;
