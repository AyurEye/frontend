import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="wrapper">
        <div className="title-text">
            <div className="title login">
                LoginForm
            </div>
            <div className="title signup">
                SignUp Form
            </div>
        </div>
        <div className="form-container">
            <input type="radio" name="slide" id="login" />
            <div className="slide-controls">
              
                <label for="login" className="slide login"><Link to="/login" style={{textDecoration: "none", color: "black"}}>Login</Link></label>
              
                <input type="radio" name="slide" id="signup"  checked />
                <label for="signup" className="slide signup">Signup</label>
                <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
                <form action="#" className="signup">
                    <div className="field">
                       <input type="text" placeholder="Email Address" required />
                    </div>
                    <div className="field">
                       <input type="password" placeholder="Password" required />
                    </div>
                    <div className="field">
                       <input type="password" placeholder="Confirm password" required />
                    </div>
                    <div className="field btn">
                       <div className="btn-layer"></div>
                       <input type="submit" value="Signup" />
                    </div>
                 </form>
              </div>
          </div>
    </div>
  )
}

export default Signup
