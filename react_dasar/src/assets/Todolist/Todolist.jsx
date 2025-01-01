import React from "react";
import Todo from "./Todo";

export default function Todolist() {
    const data = [
        {
            id:1,
            text: "Belajar React",
            isCompleted: true
        },
        {
            id:2,
            text: "Belajar React Router",
            isCompleted: true
        },
        {
            id:3,
            text: "Belajar React Hooks",
            isCompleted: false
        }
    ]
    // const todos = data.map((todo) => 
    // <Todo key={todo.id} {...todo} />)
    return (
        <div>
            <h1>Todolist</h1>
            {/* <ul>
                <Todo isCompleted={true} text="Belajar React" />
                <Todo isCompleted={true} text="Belajar React Router" />
                <Todo  text="Belajar React Hooks" />
            </ul> */}
            {/* {todos} */}
            <ul>
                {data.map((todo) => 
            <Todo key={todo.id} {...todo} />)}
            </ul>
        </div>
    );
}
