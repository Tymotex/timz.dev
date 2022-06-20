import React from "react";

interface Props {
    src: string;
    width: number | string;
    height?: number | string;
}

const BlogImage: React.FC<Props> = ({ src, width, height }) => {
    return (
        <img src={src} width={width} height={height} className="blog-image" />
    );
};

export default BlogImage;
