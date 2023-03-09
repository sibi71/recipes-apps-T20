import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../Image/Recipe.png"



const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__info'>
           <img src={Logo} alt='logo'/>
           <h1><span>Your</span>City</h1>
        </div>
        <div className='navbar__link'>
          <ul>
            <Link to="/">Home</Link>
            <Link to ="/menu">Menu</Link>
            <Link to="/contact">About</Link>
            <Link to="/feedback">Feedback</Link>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar