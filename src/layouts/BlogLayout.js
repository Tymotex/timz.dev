import React from 'react';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// Theme override
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    cyan, lightBlue
} from '@material-ui/core/colors';

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
		padding: theme.spacing(3),
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

const theme = createMuiTheme({
    palette: {
        type: Cookies.get(siteCookies.DARK_MODE_ACTIVE) === "true" ? "dark" : "light",
        primary: {
            main: cyan[900]        // See: https://material-ui.com/customization/color/
        },
        secondary: {
            main: lightBlue[700]
        }
    }
});

const toggleDarkMode = () => {
    const wasActive = Cookies.get(siteCookies.DARK_MODE_ACTIVE) === "true";
    Cookies.set(siteCookies.DARK_MODE_ACTIVE, wasActive ? "false" : "true");
    return !wasActive;
}

const BlogLayout = ({ children }) => {
    const classes = useStyles();
	const [open, setOpen] = React.useState(false);
    const [darkModeActive, setDarkModeActive] = React.useState(Cookies.get(siteCookies.DARK_MODE_ACTIVE)); 
    
	const handleDrawerOpen = () => {
        setOpen(true);
	};
    
	const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const trigger = useScrollTrigger({ target: window });
    
    return (
            <ThemeProvider theme={theme}>
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
                                        Blogs
                                    </Typography>
                                    <IconButton onClick={() => setDarkModeActive(toggleDarkMode())}>
                                        {(Cookies.get(siteCookies.DARK_MODE_ACTIVE) === "true" ? (
                                            <NightsStay />
                                            ) : (
                                            <WbSunny />    
                                        ))}
                                    </IconButton>
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
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
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
