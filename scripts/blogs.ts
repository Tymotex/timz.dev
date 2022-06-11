import fs from "fs";
import signale from "signale";
import matter from "gray-matter";
import { sassPlugin } from "esbuild-sass-plugin";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkPrism from "remark-prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export interface BlogFrontmatter {
    title: string;
    description: string;
    published: boolean;
    date: string;
}

export interface Blog {
    frontmatter: BlogFrontmatter;
    slug: string;
    code: string;
}

export type BlogInfo = Omit<Blog, "code">;

const makeMDXBundle = async (rawSource: string) => {
    const cwd = process.cwd();
    return await bundleMDX({
        cwd: cwd,
        // Sourced from: https://github.com/kentcdodds/mdx-bundler/issues/116.
        // Solves the lack of default sass module support in mdx-bundler.
        esbuildOptions: (options) => {
            options.target = "es2020";
            if (options.plugins)
                options.plugins = [
                    ...options.plugins,
                    sassPlugin({
                        basedir: ".",
                    }),
                ];
            options.loader = {
                ...options.loader,
            };
            options.publicPath = "/mdx";
            options.outdir = path.join(cwd, "public/mdx");
            options.write = true;
            return options;
        },
        source: rawSource,
        mdxOptions(options) {
            options.remarkPlugins = [
                ...(options?.remarkPlugins ?? []),
                remarkPrism,
                remarkMath,
            ];
            options.rehypePlugins = [
                ...(options?.rehypePlugins ?? []),
                rehypeKatex,
            ];
            return options;
        },
    });
};

/**
 * Retrieves display data for all blogs, useful for rendering the blog index
 * page.
 */
export const getAllBlogs = async (): Promise<BlogInfo[]> => {
    const blogsDir = path.join(process.cwd(), "content/blogs");
    signale.start(`Sourcing blogs from '${blogsDir}'`);

    const filenames = fs.readdirSync(blogsDir);
    const allBlogs = await Promise.all(
        filenames.map(async (filename) => {
            if (path.extname(filename) !== ".mdx")
                signale.info(
                    `Skipping '${filename}' because it doesn't have the .mdx file extension`,
                );
            const absPath = path.join(blogsDir, filename);
            const slug = filename.replace(/\.mdx$/, "");

            const rawSource = fs.readFileSync(absPath, "utf8");
            const matterResult = matter(rawSource);
            const frontmatter = matterResult.data;

            // Next.js does not serialise objects for performance reasons. This
            // means that although we can write native YAML dates in the
            // frontmatter, we'll unfortunately have to still serialise the date
            // and then deserialise it in the component code.
            // See: https://github.com/vercel/next.js/issues/13209#issuecomment-633149650.
            const blog = {
                slug,
                frontmatter: {
                    ...frontmatter,
                    date: frontmatter.date.toString(),
                },
            } as BlogInfo;

            return blog;
        }),
    );
    signale.complete(`Fetched ${allBlogs.length} blogs!`);

    return allBlogs;
};

/**
 * Bundles the .mdx file with the given slug.
 *
 * Expects the file to be present at `content/blogs/${slug}`. Returns all the
 * data necessary to render a page containing that blog.
 *
 * Example usage: await getBlog("hello-world");
 *
 * @param string slug   The unique filename identifier for the blog post.
 */
export const getBlog = async (slug: string): Promise<Blog> => {
    const targetBlogPath = path.join(
        process.cwd(),
        `content/blogs/${slug}.mdx`,
    );

    signale.start(`Generating blog '${targetBlogPath}'`);

    const rawSource = fs.readFileSync(targetBlogPath, "utf8");

    const { code, frontmatter } = await makeMDXBundle(rawSource);
    const blog = {
        slug,
        frontmatter: {
            ...frontmatter,
            // See the comment in `getAllBlogs` for why we're serialising here.
            date: frontmatter.date.toString(),
        },
        code,
    } as Blog;
    signale.success(`Successfully bundled blog: '${slug}'.`);

    return blog;
};
