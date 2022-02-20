import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import sortingFuncs from "./sortingFunctions";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: "flex",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const BlogSorter = ({ sortFuncIndex, setSortFuncIndex }) => {
    const classes = useStyles();

    const handleChange = event => {
        const index = event.target.value;
        setSortFuncIndex(index);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sorting-comparator">Sort by</InputLabel>
                <Select
                    native
                    value={sortFuncIndex}
                    onChange={handleChange}
                    inputProps={{
                        id: "sorting-comparator",
                    }}
                >
                    {[...Array(sortingFuncs.length)].map((_, i) => (
                        <option key={i} value={i} style={{ color: "green" }}>
                            {sortingFuncs[i].type}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default BlogSorter;
