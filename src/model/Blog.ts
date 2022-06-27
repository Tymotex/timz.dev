// Tags to help categorise blogs.
export const blogTags = [
    "Software Engineering",
    "Cybersecurity",
    "Frontend",
    "Backend",
    "Computer Science",
] as const;
export type BlogTag = typeof blogTags[number];
