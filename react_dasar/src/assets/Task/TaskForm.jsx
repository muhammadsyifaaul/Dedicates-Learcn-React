import { useState } from "react"

export default function Task({onSubmit}) {
    const [item,setItem] = useState('')


    function handleChange(e){
        setItem(e.target.value)
    }
    function handleClick(e){
        e.preventDefault()
        onSubmit(item)
        setItem('')
    }
  return (
    <div>
        <h1>Create task</h1>
        <form action="">
            <input type="text" onChange={handleChange} value={item} />
            <button type='button' onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}   