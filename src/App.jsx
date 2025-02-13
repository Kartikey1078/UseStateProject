import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './Components/CounterApp'
import TodoApp from './Components/TodoApp'
import bgChanger from './assets/bgChanger.png'
import FormInputTracker from './Components/FormInputTracker'
function App() {
  let [bgColor,setbgColor] = useState("white");

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor
  },[bgColor])

  function changeBG() {
    setbgColor(bgColor === "black" ? "white" : "black")
  }
  return (
    <div className='parentDiv' >
      <h1 style={{color:bgColor == "black"? "white" : 'black',textAlign:'center'}}>Mini Project to Learn useState()</h1>
      <FormInputTracker></FormInputTracker>
     <CounterApp></CounterApp>
     <TodoApp></TodoApp>
     <img src={bgChanger}
     style={{position: 'absolute',top: '10px',right: '15px',filter: bgColor === "black" ? "invert(1)" : "invert(0)"}} 
     onClick={changeBG}
     />
    </div>
  )
}

export default App
