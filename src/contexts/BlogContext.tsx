import React, { createContext } from "react";

export interface BlogContextProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const BlogContext = createContext<BlogContextProps>(null);
