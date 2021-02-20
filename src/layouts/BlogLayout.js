import React from 'react';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DrawerList } from './components';
import styles from './BlogLayout.module.scss';

// Theme override
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes';

import {
    NightsStay,
    WbSunny
} from '@material-ui/icons';

// Hiding the top nav bar on scroll
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import Cookies from 'js-cookie';
import { siteCookies } from '../constants';

const drawerWidth = 240;

// TODO: dark mode: https://stackoverflow.com/questions/55846691/react-material-ui-theme-change

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
	contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
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
    
	const handleDrawerClose = () => {
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
                            className={clsx(classes.content, {
                                [classes.contentShift]: open,
                            })}
                        >
                            <div className={classes.drawerHeader} />
                            {children}
                        </main>
                    </div>
                </Container>
            </ThemeProvider>
    );
};

export default BlogLayout;