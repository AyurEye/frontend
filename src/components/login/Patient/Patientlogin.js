import React, {useRef, useState, useEffect, useContext} from 'react'
// import './login.css'
import '../../signup/signup.css'
import { Link } from "react-router-dom"
import AuthContext from '../../../context/AuthProvider'
import glogo from '../../../images/gLogo.png'

import axios from '../../../api/axios'
const LOGIN_URL = '/auth'



const PatientLogin = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            
            
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


  return (
      <>
      {success ? 
        (
            <div>You are logged in!</div>
        ) :
        (
            <div className="wrapper">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="title-text">
            <div className="title login">
                Patient Login
            </div>
        </div>
        <div className="form-container glogo-box">
            <img src={glogo} />
            <span className="center glogo-text">Continue with Google</span>
        </div>
        <div className="form-container">
            <div className="slide-controls">
                <input type="radio" name="slide" id="login" checked />
                <label for="login" className="slide login">Login</label>
                
                    <input type="radio" name="slide" id="signup"/>
                    <label for="signup" className="slide signup"><Link to="/signup/patient" style={{textDecoration: "none", color: "black"}}>Signup</Link></label>
                
                <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
            <form onSubmit={handleSubmit} className="login">
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setUser(e.target.value)}
                            required />
                    </div>
                    <div className="field">
                        <input type="password" 
                            id="password"
                            placeholder="Password" 
                            onChange={(e)=>setPwd(e.target.value)}
                            value={pwd}
                            required />
                    </div>
                    <div className="field btn">
                       <div className="btn-layer"></div>
                       <input type="submit" value="Login" />
                    </div>
                    <div className="pass-link">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="signup-link">
                        Not a member?  <Link to="/signup/patient" style={{textDecoration: "none", color: "#fa4299"}}>Signup now</Link>
                    </div>
                </form>
              </div>
          </div>
    </div>

        )}
    </>
    )
}

export default PatientLogin
