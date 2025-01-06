import { useState } from "react"
import { useImmer } from "use-immer"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export default function Task() {
    // const [item,setItem] = useState('')
    const [items,setItems] = useImmer([])

    // function handleChange(e){
    //     setItem(e.target.value)
    // }
    function handleOnSubmit(item){
        setItems(draft => {
            draft.push(item)
        })
    }
    // function handleClick(){
    //     setItems(draft => {
    //         draft.push(item)
    //     })
    //     setItem('')
    // }
  return (
    <div>
        {/* <h1>Cretae task</h1>
        <form action="">
            <input type="text" onChange={handleChange} value={item} />
            <button type='button' onClick={handleClick}>Add</button>
        </form>
        <h1>
            List Task
        </h1>
        <ul>
            {items.map((item,index) => <li key={index}>{item}</li>)}
        </ul> */}
        <TaskForm onSubmit={handleOnSubmit} />
        <TaskList items={items} />
    </div>
  )
}   