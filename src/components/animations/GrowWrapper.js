import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FadeInWrapper = ({
    children,
    wrapperElement = 'div',
    direction = null,
    duration = 1,
    delay = 0,
    ...props
}) => {
    const Component = wrapperElement;
    const compRef = useRef(null);

    useEffect(() => {
        gsap.from(compRef.current, duration, {
            height: 0,
            delay,
        });
    }, [compRef, delay, duration]);
    return (
        <Component ref={compRef} {...props}>
            {children}
        </Component>
    );
};

export default FadeInWrapper;
