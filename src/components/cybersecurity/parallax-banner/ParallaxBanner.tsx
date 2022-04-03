import React, { useEffect, useRef } from 'react';

interface Props {
    imageSrc: string;
}

const ParallaxBanner: React.FC<Props> = ({ imageSrc }) => {
    const bannerRef = useRef(null);

    // Set up parallax banner scroll.
    useEffect(() => {
        const bannerImage = bannerRef.current;
        const parallaxScroll = () => {
            const offset = window.pageYOffset;
            bannerImage.style.backgroundPositionY = offset * 0.5 + 'px';
        };
        window.addEventListener('scroll', parallaxScroll);
        return () => window.removeEventListener('scroll', parallaxScroll);
    }, []);

    return (
        <div
            ref={bannerRef}
            style={{
                height: '500px',
                width: '100%',
                backgroundImage: `url(https://images4.alphacoders.com/110/thumb-1920-1108171.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: -10,
            }}
        ></div>
    );
};

export default ParallaxBanner;
