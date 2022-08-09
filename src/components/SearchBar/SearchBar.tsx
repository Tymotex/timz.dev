import React, { useContext } from "react";
import { DarkModeContext } from "src/contexts/LightDarkThemeProvider";
import { BsSearch as SearchIcon } from "react-icons/bs";
import styles from "./SearchBar.module.scss";

interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
    const theme = useContext(DarkModeContext);

    return (
        <div className={styles.searchBar}>
            <SearchIcon className={styles.searchIcon} />
            <label htmlFor="blogSearch" className={styles.label}>
                Search
            </label>
            <input
                id="blogSearch"
                className={`${theme.isDarkMode ? styles.dark : styles.light}`}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs"
            />
        </div>
    );
};

export default SearchBar;
