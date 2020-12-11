import React from "react";
import {PostType} from "../../main/Main";
import {Button} from "@material-ui/core";

export type MyPostsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsType) {
    const postsMapped = props.posts.map(post => <p key={post.id}>
        {post.post}
    </p>)
    return <div>
        <div>
            <h3>My Posts</h3>
            <div><textarea/></div>
            <Button variant="contained" color="primary" onClick={() => {
                alert("Clicked")
            }}>
                Add Post
            </Button>
        </div>
        <div>
            {postsMapped}
        </div>
    </div>
}