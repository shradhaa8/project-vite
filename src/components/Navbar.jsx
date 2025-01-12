import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import productContext from '../context/productContext';


const Navbar = (props) => {
  const context = useContext(productContext)
  const {state:{cart}} = context
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/pro">Profile</Link> 
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/editmodal">Modal</Link> 
        </li>
        {isAuthenticated ? (
          <li>
          <Link className="nav-link active" aria-current="page" onClick={handleLogout}>Logout</Link>
          </li>
          
        
          ) : (
          <>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
          </li>
          </>
        )}
        
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/user">User</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link position-relative" to="./cartitem"><FaShoppingCart />
       
  <span className="position-absolute top-5 start-100 translate-middle badge  bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>

</Link> 
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      
      </form>
      <button style={{color:"gray",backgroundColor:props.color}}onClick={props.toggleMode}>{props.text}</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
