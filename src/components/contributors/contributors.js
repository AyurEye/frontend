import React from 'react'
import logo1 from '../../images/DH_logo_bg.png'
import logo2 from '../../images/KU logo.png'
import profile from '../../images/profile.jpg'


export default function Contributors() {
  return (
      <>
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
            <span>Avaya Bajracharya</span>
            <span>Web Developer</span>
            </div>
            <div className="cont-img">
            <img src={profile} alt="profile" />
            <span>Anish Manandhar</span>
            <span>ML Expert</span>
            </div>
            <div className="cont-img">
            <img src={profile} alt="profile" />
            <span>Anurag Timilsina</span>
            <span>ML Expert</span>
            </div>
            <div className="cont-img">
            <img src={profile} alt="profile" />
            <span>Ashish Thapa</span>
            <span>Web Developer</span>
            </div>
            
        </div>
        <div className="contributers">
            <div className="cont-img">
            <img src={profile} alt="profile" />
            <span>Ayush Paudel</span>
            <span>Web Developer</span>
            </div>
            
        </div>
        </div>
    </div>
    </div>
   </>
  )
}
