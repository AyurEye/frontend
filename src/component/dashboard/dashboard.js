import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider'

function Dashboard() {
  const auth = useContext(AuthContext);

  // Logout function
  const signout = () =>{
    auth.setAuth(null)
  }

  return (
    <>
      {auth.auth ? 
        <div>
          Dashboard <br/>
          <button onClick={signout}>Logout</button>
        </div>
      :

      <div>
        You are not authenticated!!!  <br />
        Go to <Link to="/homepage">homepage</Link>!!! 

      </div>
    } 
  </>
  )
}

export default Dashboard
