import React from "react";

export default function Todo({ isCompleted, text }) {
    return (
        <li>
            {isCompleted ? <del>{text} </del>  : text} ✅
            {/* {text} {isCompleted && '✅'} */}
        </li>
    );
}
