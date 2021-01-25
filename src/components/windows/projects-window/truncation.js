
// Truncation utility functions
const maxCharLength = 400;

/**
 * Determines whether the given string needs to be truncated. Any string
 * greater than default 400 characters requires truncation 
 */
const requiresTruncation = (input) => input.length > maxCharLength; 

/**
 * If the string requires truncation, returns a string truncated at 400 characters
 * and with ellipses appended, otherwise returns the same input string 
 */
const truncate = (input) => input.length > maxCharLength ? `${input.substring(0, maxCharLength)}...` : input;

export {
    truncate,
    requiresTruncation
};
