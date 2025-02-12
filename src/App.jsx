import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './Components/CounterApp'
import TodoApp from './Components/TodoApp'
function App() {
  

  return (
    <div className='parentDiv'>
     <CounterApp></CounterApp>
     <TodoApp></TodoApp>
    </div>
  )
}

export default App
