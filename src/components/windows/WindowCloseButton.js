import React from 'react';
import { 
    Tooltip,
    Fab
} from '@material-ui/core';

const WindowCloseButton = ({ onCloseArticle }) => {
    return (
        <Tooltip title="Close" placement="left">
                <div
                    className="close"
                    onClick={() => {
                        onCloseArticle()
                    }}
                />
        </Tooltip>
    );
}

export default WindowCloseButton;
 