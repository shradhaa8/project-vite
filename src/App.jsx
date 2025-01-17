import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Footer from './components/Footer'
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
import ProductState from './context/ProductState';
import Signup from './components/Signup';
import Login from './components/Login';
import UserList from './components/UserList';
import User from './components/User';
import CartItems from './components/CartItems';
import Addproduct from './components/AddProduct';
import Profile from './components/Profile'

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
    <ProductState>
      <Router>
     <Navbar title="GADGETCRAZE" mode={mode} text={text} color={color} toggleMode={toggleMode}/>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click me {color}
        </button>
       
      </div> */}
      <Alert alert={alert} showAlert={showAlert}/>
        {/* <Func/>
        <Counter/> */}
      <Routes>
        <>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />   
        <Route path="/signup" element={<Signup />} />   
        <Route path="/login" element={<Login />} /> 
        <Route path="/addproduct" element={<Addproduct />} /> 
        <Route path="/pro" element={<Profile />} />
        <Route path="/cartitem" element={<CartItems />} />  
        <Route path="/user/:userId/:userName" element={<User />} />
            <Route path="/user" element={<UserList />} />
             </>
        </Routes>
      </Router>
      
      </ProductState>
          <Footer/>
    </>
  )
}

export default App
