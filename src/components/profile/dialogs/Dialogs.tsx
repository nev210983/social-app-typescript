import React from "react";
import s from "./Dialogs.module.css"
import {v1} from "uuid";

export function Dialogs() {
    let dialogs = [
        {id: v1(), names: "John", message: "hello my friends!"},
        {id: v1(), names: "Sony", message: "Come with me"},
        {id: v1(), names: "Tina", message: "Let be my friends"},
        {id: v1(), names: "Ketty", message: "I want to see you"},
    ]

    let nameMapped = dialogs.map(n=><li key={n.id}>
        <a href="/"> {n.names}</a>
    </li>)

    let messageMapped = dialogs.map(m=><p key={m.id}>
        {m.message}
    </p>)

    return <div className={s.dialogs}>

        <div className={s.nameMessageBox}>

            <div className={s.namesBox}>
                <h5>Users:</h5>
                {nameMapped}
            </div>
            <div className={s.messageBox}>
                <h5>Dialogs:</h5>
                {messageMapped}
            </div>
        </div>

        <div>
            <textarea/><button>send</button>
        </div>
    </div>
}