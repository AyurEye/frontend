import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from '../signup/signup'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

function Login() {
  const auth = useContext(AuthContext);

  // State Variable
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');



  useEffect(()=>{
    console.log(auth.auth)
  }, [auth.auth]);

  //Login and logout function
  const login = () => {
    auth.setAuth({user: 'avaya'});
  }


  // Logout function
  const signout = () =>{
    auth.setAuth(null)
  }

  // Form Submit handle function
  const handleSubmit = () => {
    
  }

  return (
    <>
      {
        auth.auth?
        <div> 
          <div>Yes you are logged in</div>
          <button onClick={signout}> Sign Out</button><br />
          <Link to="/homepage">Homepage</Link>
        </div>


        :

          <div>
            <span>Login</span>
            <form>
              Email: <input type="text"/><br />
              Password: <input type="password" onChange={(e)=>setUserEmail(e.target.value)}/><br />
              <button onClick={handleSubmit} onChange={(e)=> setUserPassword(e.target.value)}>Click to login</button>
            </form>
          <h3><Link to="/signup">Signup</Link></h3>
          <h3><Link to="/homepage">Homepage</Link></h3>
          </div>
}
    </>
  )
}

export default Login
