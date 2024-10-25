import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  // const [color, setColor] = useState("blue")
  const [mode , setMode]= useState('light')
  const [text, setText]= useState('enable dark mode')
  const [color, setColor]= useState("black")
  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      setText('enable light mode')
      setColor("white")
    }
    else{
      setMode('light')
      setText('enable dark mode')
      setColor("black")
    }
  }

  return (
    <>
     <Navbar title="this is navbar" mode={mode} text={text} color={color} toggleMode={toggleMode}/>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click me {color}
        </button>
       
      </div> */}
      
    </>
  )
}

export default App
