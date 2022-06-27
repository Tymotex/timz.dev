import React from "react";

interface Props {
    src: string;
    width?: number | string;
    height?: number | string;
    shadow?: boolean;
    caption?: string;
}

const BlogImage: React.FC<Props> = ({
    src,
    width,
    height,
    shadow,
    caption,
}) => {
    return (
        <div className={`blog-image`}>
            {caption ? (
                <figure>
                    <img
                        src={src}
                        width={width}
                        height={height}
                        className={`${shadow && "shadow"}`}
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
    );
};

export default BlogImage;
