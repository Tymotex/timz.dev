import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './Expandable.module.scss';
import ExpandButton from './ExpandButton';
import { motion, AnimatePresence } from 'framer-motion';

const Expandable = ({ text, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandedToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div
                className={styles.expandable}
                onClick={handleExpandedToggle}
                onKeyDown={handleExpandedToggle}
                role="button"
                tabIndex={0}
            >
                <ExpandButton text={text} isExpanded={isExpanded} />
            </div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key={1}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'linear',
                        }}
                        style={{
                            overflow: 'hidden',
                        }}
                    >
                        <Container className={styles.content}>{children}</Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

Expandable.propTypes = {
    text: PropTypes.string,
};

Expandable.defaultProps = {
    text: '',
};

export default Expandable;
