import React from 'react';
import PropTypes from 'prop-types';
import ChevronRight from '@material-ui/icons/KeyboardArrowRight';
import ChevronDown from '@material-ui/icons/KeyboardArrowDown';
import styles from './Expandable.module.scss';

const ExpandButton = ({ text, isExpanded }) => {
    return (
        <span>
            {isExpanded ? (
                <ChevronDown className={styles.toggleButton} />
            ) : (
                <ChevronRight className={styles.toggleButton} />
            )}
            <h3 className={styles.text}>{text}</h3>
        </span>
    );
};

ExpandButton.propTypes = {
    text: PropTypes.string,
    isExpanded: PropTypes.bool,
};

ExpandButton.defaultProps = {
    text: '',
    isExpanded: false,
};

export default ExpandButton;
