import React, {useState} from 'react';
import './Main.css';
import {Header} from "../header/Header";
import {Profile} from "../profile/Profile";

import {Navbar} from "../navbar/Navbar";
import {Sidebar} from "../Sidebar/Sidebar";
import {Footer} from "../footer/Footer";
import {Dialogs} from '../profile/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from "../profile/news/News";

export type PostType = {
    id: number
    title: string
    post: string
}

export type ItemType = {
    id: number
    item: string
}

function Main() {

    let [posts, setPosts] = useState([
        {id: 1, title: "Title_1", post: "Post1"},
        {id: 2, title: "Title_2", post: "Post2"},
        {id: 3, title: "Title_3", post: "Post3"},
    ])

    let addPost = (text: string, title: string) => {
        let post = {id: 8, title: title, post: text}
        let newPost = [post, ...posts]
        setPosts(newPost)
    }

    return (
        <div className="main">
            <Header logo="NEV"/>
            <Navbar/>
            <Route path="/profile" render={() =>
                <Profile posts={posts} addPost={addPost}/>}/>
            <Route path="/dialogs" render={() =>
                <Dialogs/>}/>
                <Route path="/news" render={()=><News/>}/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default Main;
