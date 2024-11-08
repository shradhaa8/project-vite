import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
// import Classes from './components/Classes';
import Func from './components/Func';
import Counter from './components/Counter';
import Details from './components/Details';


function App() {
  // const [color, setColor] = useState("blue")
  const [mode , setMode]= useState('light')
  const [text, setText]= useState('enable dark mode')
  const [color, setColor]= useState("black")
  const[alert, setAlert]=useState(null)

  const showAlert=(type, message)=>{
    setAlert({
      type: type, 
      message: message
      
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }


  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      setText('enable light mode')
      setColor("white")
      showAlert('danger','dark mode has been enabled')
    }
    else{
      setMode('light')
      setText('enable dark mode')
      setColor("black")
      showAlert('success','light mode has been enabled')
    }
  }

  return (
    <>
      <Router>
     <Navbar title="this is navbar" mode={mode} text={text} color={color} toggleMode={toggleMode}/>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click me {color}
        </button>
       
      </div> */}
      <Alert alert={alert} showAlert={showAlert}/>
        <Func/>
        <Counter/>
      <Routes>
        <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />    
      </>
        </Routes>
      </Router>

    </>
  )
}

export default App
