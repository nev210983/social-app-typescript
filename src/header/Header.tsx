import React from "react";
import s from "./Header.module.css"

type HeaderType={
    logo: string
}

export function Header(props: HeaderType) {
    return <div className={s.header}>
        <div className={s.logoImgBox}>
                <img src="" alt="Oopss"/>
                <span>{props.logo}</span>
        </div>
        <div className={s.logSignBox}>
            <div>LogIn</div>
            <div>SignIn</div>
        </div>
    </div>
}