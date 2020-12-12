import React from "react";
import s from "./Navbar.module.css"
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import {NavLink} from "react-router-dom";

type NavbarType = {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export function Navbar(props: NavbarType) {
    const classes = useStyles();

    return <div className={s.navbar}>
        <div className={classes.root}>
            <List
                component="nav"
                className={classes.root}
                aria-label="mailbox folders"
            >
                <Divider/>
                <ListItem button>
                    <ListItemText primary={<NavLink exact to="/home" className={s.navLinkItem}>HOME</NavLink>}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary={<NavLink to="/profile" className={s.navLinkItem}>PROFILE</NavLink>}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary={<NavLink to="/dialogs" className={s.navLinkItem}>DIALOGS</NavLink>}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary={<NavLink to="/news" className={s.navLinkItem}>NEWS</NavLink>}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary={<NavLink to="/music" className={s.navLinkItem}>MUSIC</NavLink>}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="FRIENDS"/>
                </ListItem>
            </List>
        </div>
    </div>
}