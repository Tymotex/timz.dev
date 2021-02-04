import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
 
const FadeInWrapper = ({ children, wrapperElement='div', direction=null, duration=1, delay = 0, ...props }) => {
    const Component = wrapperElement;
    const compRef = useRef(null);
    const distance = 200;
    let fadeDirection;
    switch (direction) {
        case "left":
            fadeDirection = { x: -distance };
            break;
        case "right":
            fadeDirection = { x: distance };
            break;
        case "up":
            fadeDirection = { y: distance };
            break;
        case "down":
            fadeDirection = { y: -distance };
            break;
        default:
            fadeDirection = { x: 0 };
    }
    useEffect(() => {
        gsap.from(compRef.current, duration, {
            ...fadeDirection,
            opacity: 0,
            delay
        });
    }, [compRef, fadeDirection, delay]);
    return (
        <Component ref={compRef} {...props}>
            {children}
        </Component>
    );
};

export default FadeInWrapper;
