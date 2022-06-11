import fs from "fs";
import signale from "signale";
import { sassPlugin } from 'esbuild-sass-plugin';
import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkPrism from "remark-prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export interface BlogFrontmatter {
    title: string;
}

export interface Blog {
    frontmatter: BlogFrontmatter;
    slug: string;
    code: string;
}

export const getAllBlogs = async (): Promise<Blog[]> => {
    const cwd = process.cwd();
    const blogsDir = path.join (cwd, "content/blogs");
    signale.start(`Sourcing blogs from '${blogsDir}'`);

    const filenames = fs.readdirSync(blogsDir);
    const allBlogs = await Promise.all(
        filenames.map(async (filename) => {
            const slug = filename.replace(/\.mdx$/, "");

            const absPath = path.join(blogsDir, filename);
            const rawSource = fs.readFileSync(absPath, "utf8");

            const { code, frontmatter } = await bundleMDX({
                cwd: cwd,
                esbuildOptions: (options) => {
                    options.target = 'es2020'; // TODO: es5?
                    if (options.plugins) options.plugins = [
                        ...options.plugins,
                        sassPlugin({
                            basedir: '.'
                        })
                    ];
                    // Add a loder for .scss files
                    options.loader = {
                        ...options.loader,
                    }
                    options.publicPath = '/mdx';
                    // path.join(process.cwd(), 'public/content/blogs');
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

            const blog = {
                slug,
                frontmatter,
                code,
            } as Blog;
            signale.success(`Successfully bundled blog: '${slug}'.`);

            return blog;
        }),
    );

    signale.complete(`Statically generated ${allBlogs.length} blogs!`);
    return allBlogs;
};