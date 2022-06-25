import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { BlogInfo, getAllBlogs } from "scripts/blogs";
import { BlogLayout } from "src/layout";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs: BlogInfo[] = await getAllBlogs();
    return {
        props: {
            blogs: blogs,
        },
    };
};

interface Props {
    blogs: BlogInfo[];
}

const BlogIndex: NextPage<Props> = ({ blogs }) => {
    return (
        <BlogLayout>
            <h1>Welcome</h1>
            <ul>
                {blogs.map((blogInfo) => (
                    <li key={blogInfo.slug}>
                        <Link
                            href={`/blogs/${blogInfo.category}/${blogInfo.slug}`}
                        >
                            {`${blogInfo.slug} - ${blogInfo.frontmatter.title}`}
                        </Link>
                        ({blogInfo.frontmatter.date})
                    </li>
                ))}
            </ul>
        </BlogLayout>
    );
};

export default BlogIndex;
