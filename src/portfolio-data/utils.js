import marked from 'marked';

/**
 * Truncation utility functions
 */
export const maxCharLength = 400;

/**
 * Determines whether the given string needs to be truncated. Any string
 * greater than default 400 characters requires truncation
 */
export const requiresTruncation = input => input.length > maxCharLength;

/**
 * If the string requires truncation, returns a string truncated at 400 characters
 * and with ellipses appended, otherwise returns the same input string
 */
export const truncate = input =>
    input.length > maxCharLength ? `${input.substring(0, maxCharLength)}...` : input;

/**
 * Markdown renderer functions
 */

// Strips the frontmatter from the given markdown string
export const bypassFrontmatter = markdownBody => {
    return markdownBody ? markdownBody.replace(/^---$.*^---$/ms, '') : '';
};

export const renderMarkdown = rawMarkdown => {
    return marked(bypassFrontmatter(rawMarkdown));
};

/**
 * Portability functions
 */

/**
 * Given a string like "Tactile DS", substitutes certain characters for dashes,
 * giving a URL friendly result: "Tactile-DS"
 *     Eg. convertValidURL("Timz.dev") === "Timzdev"
 */
export const convertValidURL = title => {
    return title
        .replace(/ /, '-')
        .replace(/\./, '')
        .toLowerCase();
};

/**
 * Misc
 */

/**
 * Given a url, returns the name of the GitHub repo and the owner, if applicable.
 */
export const extractRepoOwnerAndName = url => {
    // First determine if this url is a link to a GitHub repo
    const urlObj = new URL(url);
    console.log(url);
    try {
        const isGitHub = urlObj.hostname.toLowerCase().includes('github');
        if (!isGitHub) return null;

        // Extract the repo name
        const path = urlObj.pathname.split("/");
        const owner = path[path.length - 2];
        const repoName = path[path.length - 1];
        return [owner, repoName];
    } catch {
        return null;
    }
}
