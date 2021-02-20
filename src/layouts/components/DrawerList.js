import React from 'react';
import {
    Link
} from 'gatsby';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BookIcon from '@material-ui/icons/Book';
import ComputerIcon from '@material-ui/icons/Computer';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const drawerItems = [
    {
        icon: HomeWorkIcon,
        text: "Home",
        link: `${process.env.BASE_URL}/home`
    },
    {
        icon: FaceIcon,
        text: "About Me",
        link: `${process.env.BASE_URL}/home/about`
    },
    {
        icon: ComputerIcon,
        text: "Projects",
        link: `${process.env.BASE_URL}/home/projects`
    },
    {
        icon: BookIcon,
        text: "Blogs",
        link: `${process.env.BASE_URL}/blogs`
    },
    {
        icon: ContactMailIcon,
        text: "Contact Me",
        link: `${process.env.BASE_URL}/home/contact`
    }
]

const DrawerList = () => {
    return (
        <List>
            {drawerItems.map((eachDrawerItem) => (
                <Link to={eachDrawerItem.link}>
                    <ListItem button key={eachDrawerItem.text}>
                        <ListItemIcon>
                            <>
                                <eachDrawerItem.icon />
                            </>
                        </ListItemIcon>
                        <ListItemText primary={eachDrawerItem.text} />
                    </ListItem>
                </Link>
            ))}
        </List> 
    );
}

export default DrawerList;
