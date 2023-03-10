import React from "react";

export default function Button(props) {
    return (
        <div className="btn">
            <button className={props.class} onClick = {props.func} >{props.icon}{props.text}</button>
        </div>
    )
}