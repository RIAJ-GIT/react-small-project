import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  
  const addvalue =() =>{
setCount(count +1)
 }
const removevalue=()=>{
setCount(count -1)
 }

  return (
    <>
      <h1>counter app</h1>
      <h2>count {count}</h2>
      <button onClick={addvalue}>add value</button>{" "}
      <button onClick={removevalue}>remove value</button>{" "}
      
    </>
  )
}

export default App
