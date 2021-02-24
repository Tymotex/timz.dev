import React from 'react';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import { 
    fade, 
    makeStyles 
} from '@material-ui/core/styles';
import {
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Divider,
    InputBase
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    NightsStay,
    WbSunny,
    Search
} from '@material-ui/icons';

import { 
    DrawerList,
    BlackOverlay
} from './components';
import styles from './BlogLayout.module.scss';

// Theme override
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes';


// Hiding the top nav bar on scroll
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import Cookies from 'js-cookie';
import { siteCookies } from '../constants';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        right: '0',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));

const lightMode = createMuiTheme(lightTheme);
const darkMode = createMuiTheme(darkTheme);

const toggleDarkMode = () => {
    const wasActive = Cookies.get(siteCookies.DARK_MODE_ACTIVE) === "true";
    Cookies.set(siteCookies.DARK_MODE_ACTIVE, wasActive ? "false" : "true");
    return !wasActive;
}

const BlogLayout = ({ pageName="Blogs", children }) => {
    const classes = useStyles();
	const [open, setOpen] = React.useState(false);
    const [darkModeActive, setDarkModeActive] = React.useState(Cookies.get(siteCookies.DARK_MODE_ACTIVE)); 

	const handleDrawerOpen = () => {
        setOpen(true);
	};
    
	const handleDrawerClose = (event) => {
        setOpen(false);
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
                                    <Typography variant="h6" noWrap>
                                        {pageName}
                                    </Typography>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <Search />
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </div>
                                    <div className={styles.rightContainer}>
                                        <IconButton 
                                            className={styles.darkModeButton}
                                            onClick={() => setDarkModeActive(toggleDarkMode())}
                                        >
                                            {(Cookies.get(siteCookies.DARK_MODE_ACTIVE) === "true" ? (
                                                <NightsStay className={styles.moon} />
                                            ) : (
                                                <WbSunny className={styles.sun} />    
                                            ))}
                                        </IconButton>
                                    </div>
                                </Toolbar>
                            </AppBar>
                        </Slide>

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
                        >
                            <BlackOverlay overlayActive={open} />
                            <div className={classes.drawerHeader} />
                            {children}
                        </main>
                    </div>
                </Container>
            </ThemeProvider>
    );
};

export default BlogLayout;