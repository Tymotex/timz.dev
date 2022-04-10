import React from "react";
import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import RemarkMathPlugin from "remark-math";

export default function MarkdownKatexRenderer(props) {
    const newProps = {
        ...props,
        plugins: [RemarkMathPlugin],
        renderers: {
            ...props.renderers,
            // KaTeX rendering.
            math: (props) => <MathJax.Node formula={props.value} />,
            inlineMath: (props) => (
                <MathJax.Node inline formula={props.value} />
            ),
            // Apply syntax highlighting to code blocks.
            code: ({ language = null, value }) => {
                return (
                    <SyntaxHighlighter language={language} style={atomDark}>
                        {value}
                    </SyntaxHighlighter>
                );
            },
        },
    };
    return (
        <MathJax.Provider input="tex">
            <ReactMarkdown children={props.children} {...newProps} />
        </MathJax.Provider>
    );
}
