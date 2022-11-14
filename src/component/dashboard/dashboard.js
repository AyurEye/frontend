import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider'
import './dashboard.css'

function Dashboard() {
  const auth = useContext(AuthContext);

  // Logout function
  const signout = () =>{
    auth.setAuth(null)
  }

  return (
    <>
      {auth.auth ? 

      <div className="grid-container">
         {/* <!-- Sidebar --> */}
          <aside id="sidebar">
              <div className="sidebar-title">
                <div className="sidebar-brand">
                  <span className="material-icons-outlined">inventory</span> Dashboard
                </div>
                {/* <!-- <span className="material-icons-outlined" onclick="closeSidebar()">close</span> --> */}
                <span className="material-icons-outlined">close</span>
              </div>

              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <span className="material-icons-outlined">dashboard</span> Dashboard
                </li>
                <li className="sidebar-list-item">
                  <span className="material-icons-outlined">settings</span> Settings
                </li>
              </ul>
            </aside>
      {/* <!-- End Sidebar --> */}


        
         {/* <!-- Main --> */}
      <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">DASHBOARD</p>
        </div>

        <div className="main-cards">

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">Report 1</p>
              <img src="image/report2.png" className="image"/>
            </div>
            <div className="margin-top">
                <span className="font-weight-bold">Detection: Tuberculosis</span><br/>
                <span className="text-primary font-weight-bold">Detected: 50%</span><br/>
                <span className="text-primary font-weight-bold">Patient: Anurag Timilsina</span><br/>
            </div>
          </div>
        </div>
        

      </main>
      
      {/* <!-- End Main --></div> */}


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
