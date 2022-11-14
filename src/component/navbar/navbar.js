import React from 'react'
import logo from '../../image/AyurEye.png'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <img src={logo} alt="logo" />
        {/* <img src="./AyurEye.png"/> */}
        <nav className="navbar">
            <ul className="navbar_ul">
                    {/* Endpoint to route to Home component */} 
                <li className="listitem"><Link to="/homepage">Home</Link></li>
                <li className="listitem"><Link to="#">About</Link></li>
                <li className="listitem"><Link to="#">Contact Us</Link></li>
                {/* <li className="listitem"><Link to="#">Signup</Link></li> */} 
                <li className="listitem dropdown">Login
                  <div className="dropdown-content">
                    <Link to="/login">As Doctor</Link>
                    <Link to="/login">As Patient</Link>
                  </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
