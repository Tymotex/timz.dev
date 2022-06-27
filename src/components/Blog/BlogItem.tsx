import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogInfo } from "scripts/blogs";
import { ChipGroup } from "../ChipGroup";
import { MiniDivider } from "../Divider";
import styles from "./Blog.module.scss";

interface Props {
    blog: BlogInfo;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
    const link = `/blogs/${blog.category}/${blog.slug}`;
    const defaultThumbnail = "/og-image.avif";

    return (
        <li className={styles.blogItem}>
            <div className={styles.thumbnail}>
                <Link href={link}>
                    <a>
                        <Image
                            src={
                                blog.frontmatter.thumbnail
                                    ? blog.frontmatter.thumbnail
                                    : defaultThumbnail
                            }
                            alt={`${blog.slug} thumbnail`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </a>
                </Link>
            </div>
            <div className={styles.details}>
                <Link href={link}>
                    <a className={styles.title}>
                        <h2>{blog.frontmatter.title}</h2>
                    </a>
                </Link>
                <ChipGroup items={blog.frontmatter.tags} invertColour />
                <MiniDivider className={styles.divider} />
                {/* <p className={styles.date}>Published {dateStr}.</p> */}
                <p className={styles.description}>
                    {blog.frontmatter.description}
                </p>
            </div>
        </li>
    );
};

export default BlogItem;
