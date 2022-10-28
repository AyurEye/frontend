import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
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
            <input type="radio" name="slide" id="login" />
            <div class="slide-controls">
              
                <label for="login" class="slide login"><Link to="/login" style={{textDecoration: "none", color: "black"}}>Login</Link></label>
              
                <input type="radio" name="slide" id="signup"  checked />
                <label for="signup" class="slide signup">Signup</label>
                <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
                <form action="#" class="signup">
                    <div class="field">
                       <input type="text" placeholder="Email Address" required />
                    </div>
                    <div class="field">
                       <input type="password" placeholder="Password" required />
                    </div>
                    <div class="field">
                       <input type="password" placeholder="Confirm password" required />
                    </div>
                    <div class="field btn">
                       <div class="btn-layer"></div>
                       <input type="submit" value="Signup" />
                    </div>
                 </form>
              </div>
          </div>
    </div>
  )
}

export default Signup
