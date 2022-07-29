import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
    src: string;
    width?: number | string;
    height?: number | string;
    shadow?: boolean;
    caption?: string;
    zoomable?: boolean;
}

const BlogImage: React.FC<Props> = ({
    src,
    width,
    height,
    shadow,
    caption,
    zoomable = true,
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
    }, []);

    return (
        <>
            <div className={`blog-image`} onClick={zoomIn}>
                {caption ? (
                    <figure className={"blog-figure"}>
                        <img
                            src={src}
                            width={"100%"}
                            height={height}
                            className={`${shadow && "shadow"}`}
                            style={{
                                maxWidth: width,
                            }}
                        />
                        <figcaption>{caption}</figcaption>
                    </figure>
                ) : (
                    <img
                        src={src}
                        width={width}
                        height={height}
                        className={`${shadow && "shadow"}`}
                    />
                )}
            </div>
            {zoomedIn && (
                <>
                    <motion.div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            position: "fixed",
                            background: "rgba(0, 0, 0, 0.65)",
                            top: 0,
                            left: 0,
                        }}
                        onClick={zoomOut}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    ></motion.div>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={zoomOut}
                        src={src}
                        style={{
                            cursor: "zoom-out",
                            maxWidth: "90vw",
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-50%)",
                        }}
                    />
                </>
            )}
        </>
    );
};

export default BlogImage;
