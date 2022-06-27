import fs from "fs";
import signale from "signale";
import matter from "gray-matter";
import { sassPlugin } from "esbuild-sass-plugin";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkPrism from "remark-prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkMdxImages } from "remark-mdx-images";

// Tags to help categorise blogs.
export type BlogTag =
    | "Software Engineering"
    | "Cybersecurity"
    | "Frontend"
    | "Backend"
    | "Computer Science";

export interface BlogFrontmatter {
    title: string;
    description: string;
    published: boolean;
    date: string;
    thumbnail?: string;
    tags?: BlogTag[];
    mediumLink?: string;
}

export interface Blog {
    frontmatter: BlogFrontmatter;
    category: string;
    slug: string;
    code: string;
    minsToRead: number;
}

export type BlogInfo = Omit<Blog, "code">;

const makeMDXBundle = async (rawSource: string) => {
    const cwd = process.cwd();

    try {
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
                    ".png": "dataurl",
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
                    remarkMdxImages,
                ];
                options.rehypePlugins = [
                    ...(options?.rehypePlugins ?? []),
                    rehypeKatex,
                ];
                return options;
            },
        });
    } catch {
        signale.error(`Failed on '${rawSource}'`);
        return null;
    }
};

/**
 * Recursively traverses and returns a list of all files at arbitrary depth
 * from the given path.
 */
const walkSync = (startPath: string) => {
    const getFilesRecursively = (directory: string, files: string[]) => {
        const filesInDirectory = fs.readdirSync(directory);
        for (const file of filesInDirectory) {
            const absolute = path.join(directory, file);
            if (fs.statSync(absolute).isDirectory()) {
                getFilesRecursively(absolute, files);
            } else {
                files.push(absolute);
            }
        }
    };

    let files: string[] = [];
    getFilesRecursively(startPath, files);
    return files;
};

/**
 * Returns an estimate for the time to read the given blog contents.
 */
const getTimeToRead = (blogContents: string): number => {
    // Just naively count the words and divide by half the average reading speed
    // which is ~238 words per minute. Taking half of the average is reasonable
    // because it takes substantially longer to read through focused educational
    // articles.
    const standardWordsPerMin = 120;
    const wordCount = blogContents.trim().split(/\s+/).length;
    if (wordCount < standardWordsPerMin) return 1;

    return Math.round(wordCount / standardWordsPerMin);
};

/**
 * Retrieves display data for all blogs, useful for rendering the blog index
 * page.
 */
export const getAllBlogs = async (): Promise<BlogInfo[]> => {
    const blogsDir = path.join(process.cwd(), "content/blogs");
    signale.start(`Sourcing blogs from '${blogsDir}'`);

    const filenames = walkSync(blogsDir);
    const allBlogs = await Promise.all(
        filenames
            .filter((filename) => path.extname(filename) === ".mdx")
            .map(async (filename) => {
                const basename = path.basename(filename);
                const category = path.basename(path.dirname(filename));
                const slug = basename.replace(/\.mdx$/, "");

                const rawSource = fs.readFileSync(filename, "utf8");
                const matterResult = matter(rawSource);
                const frontmatter = matterResult.data;

                // Next.js does not serialise objects for performance reasons. This
                // means that although we can write native YAML dates in the
                // frontmatter, we'll unfortunately have to still serialise the date
                // and then deserialise it in the component code.
                // See: https://github.com/vercel/next.js/issues/13209#issuecomment-633149650.
                const blog = {
                    slug,
                    category,
                    frontmatter: {
                        ...frontmatter,
                        date: frontmatter?.date?.toString(),
                    },
                    minsToRead: getTimeToRead(rawSource),
                } as BlogInfo;

                return blog;
            }),
    );
    signale.complete(`Fetched ${allBlogs.length} blogs!`);

    allBlogs.sort((a, b) =>
        a.frontmatter.title.localeCompare(b.frontmatter.title),
    );
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
export const getBlog = async (
    category: string,
    slug: string,
): Promise<Blog> => {
    const dirPath = path.join(process.cwd(), `content/blogs/${category}`);
    const targetBlogPath = `${dirPath}/${slug}.mdx`;

    if (!fs.existsSync(dirPath)) {
        signale.error(
            `Directory for category '${category}' does not exist at path '${dirPath}'.`,
        );
        return;
    }
    if (!fs.existsSync(targetBlogPath)) {
        signale.error(`Path for blog '${targetBlogPath}' does not exist.`);
        return;
    }

    signale.start(`Generating blog '${targetBlogPath}'`);

    const rawSource = fs.readFileSync(targetBlogPath, "utf8");

    const { code, frontmatter } = await makeMDXBundle(rawSource);
    if (!code || typeof code === "undefined") {
        signale.error(`Fucked up on ${targetBlogPath}`);
    }
    const blog = {
        slug,
        frontmatter: {
            ...frontmatter,
            // See the comment in `getAllBlogs` for why we're serialising here.
            date: frontmatter.date.toString(),
        },
        minsToRead: getTimeToRead(rawSource),
        code,
    } as Blog;
    signale.success(`Successfully bundled blog: '${slug}'.`);

    return blog;
};
