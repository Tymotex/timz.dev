import { Blog } from "scripts/blogs";

export const getBlogDate = (blog: Blog): string => {
    return new Date(blog?.frontmatter.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};
