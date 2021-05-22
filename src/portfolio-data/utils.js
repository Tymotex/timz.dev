import marked from 'marked';

/**
 * Truncation utility functions
 */
const maxCharLength = 400;

/**
 * Determines whether the given string needs to be truncated. Any string
 * greater than default 400 characters requires truncation
 */
const requiresTruncation = input => input.length > maxCharLength;

/**
 * If the string requires truncation, returns a string truncated at 400 characters
 * and with ellipses appended, otherwise returns the same input string
 */
const truncate = input =>
    input.length > maxCharLength ? `${input.substring(0, maxCharLength)}...` : input;

/**
 * Markdown renderer functions
 */

// Strips the frontmatter from the given markdown string
const bypassFrontmatter = markdownBody => {
    return markdownBody.replace(/^---$.*^---$/ms, '');
};

const renderMarkdown = rawMarkdown => {
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
const convertValidURL = title => {
    return title
        .replace(/ /, '-')
        .replace(/\./, '')
        .toLowerCase();
};

export default { truncate, requiresTruncation, renderMarkdown, convertValidURL };
