import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="content">
    {/* <!-- header --> */}
         <header>
            {/* <!-- header inner --> */}
            <div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <ul className="btn">
                           <li className="down_btn"><a href="#">Download</a></li>
                           <li><a href="#">Sign Up</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                           <li><button type="button" id="sidebarCollapse">
                              <img src="../images/menu_icon.png" alt="#" />
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         {/* <!-- end header inner --> */}
         {/* <!-- end header --> */}
    </div>
  )
}
