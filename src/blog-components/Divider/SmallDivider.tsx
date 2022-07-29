import React from "react";

interface Props {}

const SmallDivider: React.FC<Props> = () => {
    return (
        <hr
            style={{
                maxWidth: "200px",
                width: "100%",
                height: "0px",
                borderBottom: "1px solid black",
                background: "black",
                margin: "32px auto",
            }}
        />
    );
};

export default SmallDivider;
