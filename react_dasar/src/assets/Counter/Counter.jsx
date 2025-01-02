import { useState } from "react"

export function Counter() {
    let [counter, setCounter] = useState(0)
    return <>
    <h1>Counter</h1>
    <p>{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Tambah</button>
    <button onClick={() => setCounter(counter - 1)}>Kurang</button>
    </>

}