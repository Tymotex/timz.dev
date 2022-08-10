import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    text: string;
    id: string;
    element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// Note: we must attach the `text` as the `id` value of every heading.
//       Doing this lets us use a hash url to 'pin' the page to
//       where that heading is.
// Eg. timz.dev/blogs/foo#bar will scroll to <h2 id="bar">bar</h2>
const Heading: React.FC<Props> = ({ text, id, element }) => {
    switch (element) {
        case "h1":
            return <h1 id={id}>{text}</h1>;
        case "h2":
            return <h2 id={id}>{text}</h2>;
        case "h3":
            return <h3 id={id}>{text}</h3>;
        case "h4":
            return <h4 id={id}>{text}</h4>;
        case "h5":
            return <h5 id={id}>{text}</h5>;
        case "h6":
            return <h6 id={id}>{text}</h6>;
        default:
            return <h2 id={id}>{text}</h2>;
    }
};

export default Heading;
