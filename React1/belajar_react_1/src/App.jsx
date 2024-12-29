import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function SayHello(nama) {
  return (
    <>
      <h1>Hello {nama}</h1>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <SayHello nama={'jamal'}/>
      </div>
    </>
  )
}

export default App
