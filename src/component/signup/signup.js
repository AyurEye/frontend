import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios'


const REGISTER_URL = 'api/register'
const AUTH_URL = '/auth'

function Signup() {
  const auth = useContext(AuthContext)
  
  // Creating UseState
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  
  // Handling request error
  const [errMsg, setErrMsg] = useState('')

  // const handleSubmit = () => {
  //   console.log(userEmail, password);
  //   auth.setAuth({user: 'useremail', pwd: password});
  // }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post(REGISTER_URL, 
      JSON.stringify({
              first_name:firstName,
              last_name:lastName,
              email:userEmail,
              username:userName,
              password:password,
              password2: matchPassword
          }), {
            headers: {'Content-Type' : 'application/json'},
            // withCredentials: true
          }
          );
          auth.setAuth({email: response.data.email});
    console.log(response);
  }
  
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   try{
  //     const response = await axios.post(REGISTER_URL, JSON.stringify({userEmail, password}), {
  //       headers: { 'Content-Type' : 'application/json'},
  //       withCredentials: true
  //     });

  //     try {
  //       const response = await axios.post(REGISTER_URL, 
  //           JSON.stringify({
  //               first_name:firstName,
  //               last_name:lastName,
  //               email:userEmail,
  //               username:userName,
  //               password:password,
  //               password2: matchPassword
  //           })
  //         );

  //       const response = JSON.stringify({
  //         first_name:firstName,
  //         last_name:lastName,
  //         email:userEmail,
  //         username:userName,
  //         password:password,
  //         password2: matchPassword
  //     });
    
  //         console.log(response);


  //       const authResponse = await axios.get(AUTH_URL);
  //       auth.setAuth(auth.setAuth(response.data)); //Set global variable auth == the authentication: 
  //       console.log(authResponse);
  //     } catch(err) {
  //       console.log(err);
  //     }

  //   } catch(err) {
  //     if(!err?.response){
  //       setErrMsg('No server response');
  //     } else if (err.response?.status===409) {
  //       setErrMsg('Email taken')
  //     } else {
  //       setErrMsg('Registration failed')
  //     }
  //   }
  // }

  useEffect(()=>{
    // console.log(auth);
  })


  return (
    <>
    {
      auth.auth ? 
        <div>
          You are logged in.
          <Link to="/homepage"> Return homepage </Link><br />
          <Link to="profile">Go to profile page</Link>
        </div>

        : 

        <div>
          Signup
        <form onSubmit={handleSubmit}>
          
          First Name: <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/> <br />
          Last Name: <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/> <br />
          Email: <input type="text" onChange={(e)=>{setUserEmail(e.target.value)}}/> <br />
          Username: <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/> <br />
          {/* Address: <input type="text" onChange={(e)=>{setAddress(e.target.value)}}/> <br /> */}

          
          Password: <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
          Password(Confirm): <input type="password" onChange={(e)=>{setMatchPassword(e.target.value)}}/> <br />
          <button type="submit">Submit</button>
        </form>
        </div>

    }
    </>
  )
}

export default Signup
