const sortingFuncs = [
    {
        type: "Alphabetical A-Z",
        cmp: (blogA, blogB) => blogA.title.toLowerCase().localeCompare(blogB.title.toLowerCase()),
    },
    {
        type: "Alphabetical Z-A",
        cmp: (blogA, blogB) => blogB.title.toLowerCase().localeCompare(blogA.title.toLowerCase()),
    },
    {
        type: "Rating (Descending)",
        cmp: (blogA, blogB) => blogB.rating - blogA.rating 
    },
    {
        type: "Rating (Ascending)",
        cmp: (blogA, blogB) => blogA.rating - blogB.rating 
    }
];
export default sortingFuncs;
