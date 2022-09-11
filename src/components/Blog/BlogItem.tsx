import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { BlogInfo } from "scripts/blogs";
import { ThemeContext } from "src/contexts/ThemeProvider";
import { ChipGroup } from "../ChipGroup";
import { MiniDivider } from "../Divider";
import styles from "./Blog.module.scss";

interface Props {
    blog: BlogInfo;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
    const link = `/blogs/${blog.category}/${blog.slug}`;
    const defaultThumbnail = "/og-image.avif";
    const theme = useContext(ThemeContext);

    return (
        <li
            className={`${styles.blogItem} ${
                theme.isDarkMode ? styles.dark : styles.light
            }`}
        >
            <div className={styles.thumbnail}>
                <Link href={link} scroll={false}>
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
                <Link href={link} scroll={false}>
                    <a className={styles.title}>
                        <h2>{blog.frontmatter.title}</h2>
                    </a>
                </Link>
                <ChipGroup
                    items={blog.frontmatter.tags}
                    invertColour={!theme.isDarkMode}
                />
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
