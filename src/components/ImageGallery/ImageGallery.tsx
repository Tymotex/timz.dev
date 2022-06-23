import Image from "next/image";
import React from "react";
import styles from "./ImageGallery.module.scss";

interface Props {
    images: {
        src: string;
        alt: string;
    }[];
    width: string | number;
    height: string | number;
}

const ImageGallery: React.FC<Props> = ({ images, width, height }) => {
    return (
        <div className={styles.gallery}>
            {images &&
                images.map((img) => (
                    <div
                        key={img.src}
                        className={styles.imageContainer}
                        style={{ width, height }}
                    >
                        <Image
                            src={img.src}
                            layout="fill"
                            objectFit="cover"
                            alt={img.alt}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ImageGallery;
