import { Tooltip } from '@material-ui/core';
import React from 'react';

const WindowCloseButton = ({ onCloseArticle }) => {
    return (
        <Tooltip title="Close" placement="left">
            <div
                className="close"
                role="button"
                onClick={() => {
                    onCloseArticle();
                }}
                onKeyDown={() => {
                    onCloseArticle();
                }}
                tabIndex={0}
            >
                Close
            </div>
        </Tooltip>
    );
};

export default WindowCloseButton;
