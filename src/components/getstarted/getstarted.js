import React from 'react'
import './getstarted.css'
import pic from '../../images/drop_file.png'
import logo1 from '../../images/DH_logo_bg.png'
import logo2 from '../../images/KU logo.png'
import profile from '../../images/profile.jpg'

export default function Getstarted() {
  return (
    <>
    <div className='container'>
      <button className='getstartedbutton'>GET STARTED</button>
    </div>
    <div className='container'>
        <div className="box-drop">
          <div>
            <img src={pic} alt="dropfile"/>
          </div>
          <button className='dropfile_button'><span>Drop a file</span></button>
        </div>
    </div>
    <div className="container">
      <div className="logo-container">
        <h2>Our Partners</h2>
        <div className='logos'>
          <img src={logo1} alt="Dhulikhel Logo" className='logo'/>
          <img src={logo2} alt="KU Logo" className='logo'/>
        </div>
      </div>
    </div>
  <div className="container">
    <div className="contributor-container">
      <h2>Contributers</h2>
      <div className="cont-box">

      
      <div className="contributers">
        <div className="cont-img">
          <img src={profile} alt="profile" />
          <span>ABC</span><br/>
          <span>ABC</span>
        </div>
        <div className="cont-img">
          <img src={profile} alt="profile" />
        </div>
        <div className="cont-img">
          <img src={profile} alt="profile" />
        </div>
        <div className="cont-img">
          <img src={profile} alt="profile" />
        </div>
        
      </div>
      <div className="contributers">
        <div className="cont-img">
          <img src={profile} alt="profile" />
        </div>
        
      </div>
    </div>
   </div>
   </div>
    </>
  )
}
