import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my-posts/MyPosts";
import {PostType} from "../main/Main";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatar from "../../assets/images/avatar.png"


type ProfileType = {
    posts: Array<PostType>
    addPost: (post: string, title: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarBox: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    }),
);

export function Profile(props: ProfileType) {

    const classes = useStyles();

    return <div className={s.profile}>
        <div className={s.profileBlock}>
            <div className={classes.avatarBox}>
                <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
            </div>
            <div>
                <div><h1>NUJNENCO EVGHENII</h1></div>
                <div>
                    <h3>About me</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Animi commodi
                        facilis fugit impedit laboriosam
                        laudantium maxime, minima nemo
                        officia provident rem similique
                        soluta veritatis voluptate,
                        voluptates? Ipsam nihil repudiandae
                        vel.
                    </p>
                </div>
            </div>
        </div>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
}

