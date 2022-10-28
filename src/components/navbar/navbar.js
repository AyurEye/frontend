import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './AyurEye.png'



export default function Navbar() {
  return (
    <>
    <header>
            {/* <h1 className="logo_heading">AYUREYE</h1> */}
            <img src={logo} alt="logo" />
            {/* <img src="./AyurEye.png"/> */}
            <nav class="navbar">
                <ul class="navbar_ul">
		                {/* Endpoint to route to Home component */}
                    <li className="listitem"><Link to="/">Home</Link></li>
                    <li className="listitem"><Link to="/about">About</Link></li>
                    <li className="listitem"><Link to="/contactus">Contact Us</Link></li>
                    <li className="listitem"><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
