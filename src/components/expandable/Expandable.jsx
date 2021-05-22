import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpandButton from './ExpandButton';
import styles from './Expandable.module.scss';
import { Container } from '@material-ui/core';
import { FadeInWrapper } from 'src/components/animations';

const Expandable = ({ text, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandedToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <ul>
            <div className={styles.expandable} onClick={handleExpandedToggle}>
                <ExpandButton text={text} isExpanded={isExpanded} />
            </div>
            {isExpanded && (
                <FadeInWrapper>
                    <Container className={styles.content}>{children}</Container>
                </FadeInWrapper>
            )}
        </ul>
    );
};

Expandable.propTypes = {
    text: PropTypes.string,
};

Expandable.defaultProps = {
    text: '',
};

export default Expandable;
