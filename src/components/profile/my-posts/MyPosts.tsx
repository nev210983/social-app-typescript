import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {PostType} from "../../main/Main";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {createStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (post: string, title: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        postStyle: {
            width: '100%',
            maxWidth: '100ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        formStyle: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export function MyPosts(props: MyPostsType) {

    const classes = useStyles();

    const postMapped = props.posts.map(p => <List className={classes.postStyle}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </ListItemAvatar>

            <ListItemText
                primary={p.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            The Theme
                        </Typography>
                        {p.post}
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li"/>
    </List>)

    let [post, setPost] = useState("")
    let [title, setTitle] = useState("")

    let onClickPostHandler = () => {
        props.addPost(post, title)
        setTitle("")
        setPost("")
    }

    let onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.currentTarget.value)
    }

    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addPost(post, title)
            setTitle("")
            setPost("")
        }
    }

    return <div>
        <div>
            <h3>My Posts</h3>
            <div className={s.formBlock}>
                <div>
                    <form className={classes.formStyle} noValidate autoComplete="off">
                        <TextField
                            id="filled-basic"
                            label="title"
                            variant="filled"
                            value={title}
                            onChange={onChangeTitleHandler}
                            onKeyPress={onKeyPressHandler}/>
                    </form>
                </div>
                <div>
                    <form className={classes.formStyle} noValidate autoComplete="off">
                        <TextField
                            id="filled-basic"
                            label="text"
                            variant="filled"
                            value={post}
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}/>
                    </form>
                </div>
            </div>
            <Button variant="contained" color="primary" onClick={onClickPostHandler}>
                Add Post
            </Button>
        </div>
        <br/>
        <div>
            {postMapped}
        </div>
    </div>
}