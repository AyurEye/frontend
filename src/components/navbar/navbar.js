import React from 'react'
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
                    <li class="listitem"><a href="#">Home</a></li>
                    <li class="listitem"><a href="#">About</a></li>
                    <li class="listitem"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
