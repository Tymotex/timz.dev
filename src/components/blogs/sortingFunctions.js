const sortingFuncs = [
    {
        type: "Alphabetical A-Z",
        cmp: (blogA, blogB) => blogA.title.toLowerCase().localeCompare(blogB.title.toLowerCase()),
    },
    {
        type: "Alphabetical Z-A",
        cmp: (blogA, blogB) => blogB.title.toLowerCase().localeCompare(blogA.title.toLowerCase()),
    },
];
export default sortingFuncs;
