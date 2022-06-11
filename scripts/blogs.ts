import fs from "fs";
import signale from "signale";
import { sassPlugin } from "esbuild-sass-plugin";
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
    const blogsDir = path.join(cwd, "content/blogs");
    signale.start(`Sourcing blogs from '${blogsDir}'`);

    const filenames = fs.readdirSync(blogsDir);
    const allBlogs = await Promise.all(
        filenames.map(async filename => {
            if (path.extname(filename) !== ".mdx")
                signale.info(
                    `Skipping '${filename}' because it doesn't have the .mdx file extension`,
                );
            const slug = filename.replace(/\.mdx$/, "");

            const absPath = path.join(blogsDir, filename);
            const rawSource = fs.readFileSync(absPath, "utf8");

            const { code, frontmatter } = await bundleMDX({
                cwd: cwd,
                // Sourced from: https://github.com/kentcdodds/mdx-bundler/issues/116.
                // Solves the lack of default sass module support in mdx-bundler.
                esbuildOptions: options => {
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
