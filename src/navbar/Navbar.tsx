import React from "react";
import s from "./Navbar.module.css"
import {ItemType} from "../main/Main";

type NavbarType={
    items: Array<ItemType>
}

export function Navbar(props: NavbarType) {

    return <div className={s.navbar}>
        <ul>
            {
                props.items.map(i => <li key={i.id}>
                    <a href="/">{i.item}</a>
                </li>)
            }
        </ul>
    </div>
}