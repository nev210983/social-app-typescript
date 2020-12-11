import React from 'react';
import './Main.css';
import {Header} from "../header/Header";
import {Profile} from "../profile/Profile";
import {Navbar} from "../navbar/Navbar";
import {Sidebar} from "../Sidebar/Sidebar";

export type PostType={
    id: number
    post: string
}

export type ItemType={
    id: number
    item: string
}

function Main() {
    let items = [
        {id: 1, item: "Home"},
        {id: 2, item: "Profile"},
        {id: 3, item: "Dialogs"},
        {id: 4, item: "News"},
        {id: 5, item: "Music"},
        {id: 6, item: "Friends"},
    ]
    let posts = [
        {id: 1, post: "Post1"},
        {id: 2, post: "Post2"},
        {id: 3, post: "Post3"},
        {id: 4, post: "Post4"},
        {id: 5, post: "Post5"},
    ]
    return (
        <div className="main">
            <Header logo="NEV"/>
            <Navbar items={items}/>
            <Profile posts={posts}/>
            <Sidebar/>
        </div>
    );
}

export default Main;
