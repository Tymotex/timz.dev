import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FadeInWrapper } from 'src/components/animations';
import styles from './Expandable.module.scss';
import ExpandButton from './ExpandButton';

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
