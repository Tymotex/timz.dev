import Heading from "src/components/TableOfContents/Heading";
import { urlify } from "./urlify";

export const getHeadings = () => {
    return {
        h1: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h1"
            />
        ),
        h2: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h2"
            />
        ),
        h3: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h3"
            />
        ),
        h4: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h4"
            />
        ),
        h5: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h5"
            />
        ),
        h6: ({ children }) => (
            <Heading
                id={urlify(String(children))}
                text={String(children)}
                element="h6"
            />
        ),
    };
};
