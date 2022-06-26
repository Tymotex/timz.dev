import { createContext } from "react";

export interface BlogContextProps {
    // This is used to conditionally execute the smooth fade-in animation when
    // the user transitions from "/" to "/blog".
    enteredBlog: boolean;
}

export const BlogContext = createContext<BlogContextProps>(null);
