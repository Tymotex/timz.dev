import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import NextImage from "next/image";

interface Props {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    shadow?: boolean;
    caption?: string;
    zoomable?: boolean;
    transparent?: boolean;
}

const BlogImage: React.FC<Props> = ({
    src,
    alt,
    width,
    height,
    shadow = true,
    caption,
    zoomable = true,
    transparent = false,
}) => {
    const [zoomedIn, setZoomedIn] = useState(false);

    const zoomOut = useCallback(
        (event) => {
            if (event.key === "Escape" && zoomable) {
                setZoomedIn(false);
            }
        },
        [setZoomedIn, zoomable],
    );

    const zoomIn: React.MouseEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            event.preventDefault();
            if (zoomable) setZoomedIn(true);
        },
        [setZoomedIn, zoomable],
    );

    useEffect(() => {
        document.addEventListener("keydown", zoomOut, false);
        return () => {
            document.removeEventListener("keydown", zoomOut, false);
        };
    }, [zoomOut]);

    return (
        <>
            <div className={`blog-image`}>
                {caption ? (
                    <>
                        <figure
                            className={`blog-figure img-container ${
                                shadow && !transparent && "shadow"
                            }`}
                            style={{
                                height: height,
                                width: width,
                            }}
                            onClick={zoomIn}
                        >
                            <NextImage
                                src={src}
                                alt={caption || alt}
                                layout="fill"
                                objectFit="contain"
                                style={{ cursor: zoomable && "zoom-in" }}
                            />
                        </figure>
                        <figcaption className={"blog-caption"}>
                            {caption}
                        </figcaption>
                    </>
                ) : (
                    <div
                        className={`img-container ${
                            shadow && !transparent && "shadow"
                        }`}
                        style={{
                            height: height,
                            width: width,
                        }}
                        onClick={zoomIn}
                    >
                        <NextImage
                            src={src}
                            layout="fill"
                            objectFit="contain"
                            alt={alt || caption}
                            style={{ cursor: zoomable && "zoom-in" }}
                        />
                    </div>
                )}
            </div>
            {/* When zoomed in, an overlay and new blown-up image is shown. */}
            {zoomedIn && (
                <>
                    <motion.div
                        className="zoom-overlay"
                        onClick={() => setZoomedIn(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    ></motion.div>
                    <motion.img
                        className="zoom-img"
                        initial={{ opacity: 0, maxWidth: 0 }}
                        animate={{ opacity: 1, maxWidth: "90vw" }}
                        onClick={() => setZoomedIn(false)}
                        src={src}
                        alt={alt || caption}
                    />
                </>
            )}
        </>
    );
};

export default BlogImage;
