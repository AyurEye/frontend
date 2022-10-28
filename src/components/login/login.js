import React from 'react'
import './login.css'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div class="wrapper">
        <div class="title-text">
            <div class="title login">
                LoginForm
            </div>
            <div class="title signup">
                SignUp Form
            </div>
        </div>
        <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slide" id="login" checked />
                <label for="login" class="slide login">Login</label>
                
                    <input type="radio" name="slide" id="signup"/>
                    <label for="signup" class="slide signup"><Link to="/signup" style={{textDecoration: "none", color: "black"}}>Signup</Link></label>
                
                <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
            <form action="" class="login">
                    <div class="field">
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div class="field">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div class="signup-link">
                        Not a member?  <a href="">Signup now</a>
                    </div>
                </form>
              </div>
          </div>
    </div>
  )
}

export default Login
