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


const drawerItems = [
    {
        icon: HomeWorkIcon,
        text: "Home",
        link: `${process.env.BASE_URL}`
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
