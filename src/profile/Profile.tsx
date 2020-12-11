import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my-posts/MyPosts";
import {PostType} from "../main/Main";

type ProfileType={
posts: Array<PostType>
}

export function Profile(props: ProfileType) {

    return <div className={s.profile}>
        <div className={s.profileBlock}>
            <div className={s.avatar}>
                AVATAR
            </div>
            <div>
                <div><h3>NAME</h3></div>
                <div>
                    <h3>DESCRIPTION</h3>
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
        <MyPosts posts={props.posts}/>
    </div>
}

