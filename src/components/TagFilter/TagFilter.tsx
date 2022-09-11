import React, { useContext } from "react";
import { ChipGroup } from "../ChipGroup";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { ThemeContext } from "src/contexts/ThemeProvider";
import {
    Combobox,
    ComboboxOption,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
} from "@reach/combobox";
import { blogTags } from "src/model/Blog";
import styles from "./TagFilter.module.scss";

interface Props {
    tags: string[];
}

const TagFilter: React.FC<Props> = ({ tags }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={styles.tagFilter}>
            <Combobox
                openOnFocus
                aria-labelledby="demo"
                className={styles.tagSearch}
            >
                <ComboboxInput
                    className={styles.searchInput}
                    placeholder="Tag filter"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {blogTags.map((tag) => (
                            <ComboboxOption key={tag} value={tag} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
            <ChipGroup
                items={tags.map((tag) => ({
                    text: tag,

                    icon: (
                        <CloseIcon
                            onClick={() => {
                                console.log("CLOSING");
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    ),
                }))}
                invertColour={!theme.isDarkMode}
                padding="10px 14px"
            />
        </div>
    );
};

export default TagFilter;
