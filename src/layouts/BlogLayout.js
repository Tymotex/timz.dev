import {
    AppBar,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    InputBase,
    Toolbar
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { createMuiTheme, fade, makeStyles, ThemeProvider } from '@material-ui/core/styles';
// Hiding the top nav bar on scroll
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { NightsStay, Search, WbSunny } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import siteIcon from 'src/assets/images/icon.png';
import { siteCookies } from '../constants';
import styles from './BlogLayout.module.scss';
import { BlackOverlay, DrawerList } from './components';
import { darkTheme, lightTheme } from './themes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        paddingTop: 20,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        marginTop: '10px',
        marginBottom: '10px',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        right: '0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: 'none!important',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const lightMode = createMuiTheme(lightTheme);
const darkMode = createMuiTheme(darkTheme);

const BlogLayout = ({ pageName = 'Blogs', children, initialQuery = '' }) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            image
                            summary
                            rating
                        }
                        fields {
                            slug
                        }
                        timeToRead
                    }
                }
            }
        }
    `);

    const blogs = data.allMarkdownRemark.edges.map(eachEdge => {
        const { title, image, summary, rating } = eachEdge.node.frontmatter;
        const link = `${process.env.BASE_URL}/blogs/${eachEdge.node.fields.slug.toLowerCase()}`;
        const timeToRead = eachEdge.node.timeToRead;
        return {
            title,
            image,
            summary,
            link,
            timeToRead,
            rating
        };
    });

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [darkModeActive, setDarkModeActive] = React.useState(
        false
    );
    const [searchQuery, setSearchQuery] = React.useState(initialQuery);

    useEffect(() => {
        setDarkModeActive(localStorage.getItem(siteCookies.DARK_MODE_ACTIVE) === 'true' ? true : false);
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = event => {
        setOpen(false);
    };

    const dynamicBlogSearch = event => {
        setSearchQuery(event.target.value);
    };

    const classicSearch = query => {
        navigate(`/blogs/${query}`);
    };

    const toggleDarkMode = () => {
        const wasActive = localStorage.getItem(siteCookies.DARK_MODE_ACTIVE) === 'true';
        localStorage.setItem(siteCookies.DARK_MODE_ACTIVE, wasActive ? 'false' : 'true');
        return !wasActive;
    };

    const trigger = useScrollTrigger({ target: typeof window !== 'undefined' ? window : null });

    return (
        <ThemeProvider theme={darkModeActive ? darkMode : lightMode}>
            <Container>
                <div className={classes.root}>
                    <CssBaseline />
                    <Slide appear={false} direction="down" in={!trigger}>
                        <AppBar
                            position="fixed"
                            className={clsx(classes.appBar, {
                                [classes.appBarShift]: open,
                            })}
                        >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Link to="/" className={styles.homeTitle}>
                                    <div className={styles.brandContainer}>
                                        <img
                                            className={styles.siteIcon}
                                            src={siteIcon}
                                            alt="Site icon"
                                        />
                                        <h3>Timz.dev</h3>
                                    </div>
                                </Link>
                                {/* Search bar */}
                                <div className={classes.search}>
                                    <div
                                        className={classes.searchIcon}
                                        onClick={() => classicSearch(searchQuery)}
                                        onKeyDown={() => classicSearch(searchQuery)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <Search />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        onChange={dynamicBlogSearch}
                                        id="blog-search-field"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                                <div className={styles.rightContainer}>
                                    {/* Dark mode toggler */}
                                    <IconButton
                                        className={styles.darkModeButton}
                                        onClick={() => setDarkModeActive(toggleDarkMode())}
                                    >
                                        {darkModeActive ? (
                                            <NightsStay className={styles.moon} />
                                        ) : (
                                            <WbSunny className={styles.sun} />
                                        )}
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Slide>
                    {/* Nav bar drawer */}
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <DrawerList />
                        <Divider />
                    </Drawer>
                    <main
                        className={clsx(classes.content)}
                        onClick={handleDrawerClose}
                        onKeyDown={handleDrawerClose} // Silences the warning: "Visible, non-interactive elements with click handlers must have at least one keyboard listener"
                        role="presentation" // Silences the warning: "Non-interactive elements should not be assigned mouse or keyboard event listeners"
                    >
                        <BlackOverlay overlayActive={open} />
                        <div className={classes.drawerHeader} />
                        {/* Render children, but enhance them with additional props */}
                        {React.Children.map(children, child =>
                            React.cloneElement(child, {
                                searchQuery,
                                blogs,
                            })
                        )}
                    </main>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default BlogLayout;
