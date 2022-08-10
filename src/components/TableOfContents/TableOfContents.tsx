import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlify } from "src/util/urlify";
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

    // Query the DOM for all the headings, then build the table of contents from
    // it. We only query for headings within the blog contents container.
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
        setHeadings(
            nodeList.map((elem) => {
                console.log(elem.textContent, elem.localName);
                return {
                    text: elem.textContent,
                    indentLevel: indentLevels[elem.localName] || 1,
                };
            }),
        );
    }, [setHeadings, blogContentsContainerId]);

    return headings && headings.length > 0 ? (
        <ol className={styles.tableOfContents}>
            <li className={styles.title}>
                <Link href={"#"}>Table of Contents</Link>
            </li>
            {headings.map((heading) => (
                <li
                    className={styles.heading}
                    style={{
                        paddingLeft:
                            (heading.indentLevel > 0
                                ? heading.indentLevel - 1
                                : 0) * 24,
                    }}
                    key={heading.text}
                >
                    <Link href={`#${urlify(heading.text)}`}>
                        {heading.text}
                    </Link>
                </li>
            ))}
        </ol>
    ) : (
        <></>
    );
};

export default TableOfContents;
