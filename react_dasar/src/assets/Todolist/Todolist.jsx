import React from "react";
import Todo from "./Todo";

export default function Todolist() {
    const data = [
        {
            text: "Belajar React",
            isCompleted: true
        },
        {
            text: "Belajar React Router",
            isCompleted: true
        },
        {
            text: "Belajar React Hooks",
            isCompleted: false
        }
    ]
    const todos = data.map((todo) => 
    <Todo {...todo} />)
    return (
        <div>
            <h1>Todolist</h1>
            {/* <ul>
                <Todo isCompleted={true} text="Belajar React" />
                <Todo isCompleted={true} text="Belajar React Router" />
                <Todo  text="Belajar React Hooks" />
            </ul> */}
            {todos}
        </div>
    );
}
