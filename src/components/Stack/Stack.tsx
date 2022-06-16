import React from "react";
import HStack from "./HStack";
import VStack from "./VStack";

interface StackProps {
    children: JSX.Element | JSX.Element[];
    alignItems?: "center" | "flex-end" | "flex-start";
    columnGap?: number;
    rowGap?: number;
    className?: string;
}

interface Props extends StackProps {
    direction: "horizontal" | "vertical";
}

const Stack: React.FC<Props> = (props) => {
    return props.direction === "horizontal" ? (
        <HStack {...props} />
    ) : (
        <VStack {...props} />
    );
};

export default Stack;
