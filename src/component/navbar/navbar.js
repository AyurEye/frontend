import React from 'react'
import logo from '../../image/AyurEye.png'
import './navbar.css'


function Navbar() {
  return (
    <header>
        <img src={logo} alt="logo" />
        {/* <img src="./AyurEye.png"/> */}
        <nav className="navbar">
            <ul className="navbar_ul">
                    {/* Endpoint to route to Home component */} 
                <li className="listitem"><a href="#">Home</a></li>
                <li className="listitem"><a href="#">About</a></li>
                <li className="listitem"><a href="#">Contact Us</a></li>
                {/* <li className="listitem"><a href="#">Signup</a></li> */} 
                <li className="listitem dropdown">Login
                  <div className="dropdown-content">
                    <a href="login.html">As Doctor</a>
                    <a href="login.html">As Patient</a>
                  </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
