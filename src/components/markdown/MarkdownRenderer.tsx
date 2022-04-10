import highlight from 'highlight.js';
import marked from 'marked';
import React from 'react';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';

interface Props {
    mdSource: string;
}

const render = mdSource => {
    marked.setOptions({
        highlight: function(code, lang) {
            return highlight.highlightAuto(code).value;
        },
    });
    return marked(mdSource);
};

const MarkdownRenderer: React.FC<Props> = ({ mdSource }) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: render(mdSource),
            }}
        ></div>
    );
};

export default MarkdownRenderer;
