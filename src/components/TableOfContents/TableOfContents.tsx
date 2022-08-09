import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./TableOfContents.module.scss";

interface Props {
    // The ID attribute value of the element whose headings we will use to
    // construct a table of contents from.
    blogContentsContainerId: string;
}

interface Heading {
    text: string;
    indentLevel: number;
}

const indentLevels = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
};

const TableOfContents: React.FC<Props> = ({ blogContentsContainerId }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const nodeList = Array.from(
            document.querySelectorAll(
                `#${blogContentsContainerId} h1,
             #${blogContentsContainerId} h2,
             #${blogContentsContainerId} h3,
             #${blogContentsContainerId} h4,
             #${blogContentsContainerId} h5,
             #${blogContentsContainerId} h6`,
            ),
        );

        // Attach the `textContent` as the `id` value of every heading.
        // Doing this lets us use a hash url to 'pin' the page to
        // where that heading is.
        // Eg. timz.dev/blogs/foo#bar will scroll to <h2 id="bar">bar</h2>
        // nodeList.forEach((elem) => {
        //     elem.id = elem.textContent;
        //     console.log(`Attached ${elem.id}`);
        // });

        setHeadings(
            nodeList.map((elem) => {
                return {
                    text: elem.textContent,
                    indentLevel: indentLevels[elem.localName] || 1,
                };
            }),
        );
    }, [setHeadings, blogContentsContainerId]);

    return (
        <ol className={styles.tableOfContents}>
            {headings.map((heading) => (
                <li
                    className={styles.heading}
                    style={{
                        paddingLeft:
                            (heading.indentLevel > 0
                                ? heading.indentLevel
                                : 0) * 10,
                    }}
                    key={heading.text}
                >
                    <Link href={`#${heading.text}`}>{heading.text}</Link>
                </li>
            ))}
        </ol>
    );
};

export default TableOfContents;
