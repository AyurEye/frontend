import React from 'react'
import './herosection.css'
import pic from '../../images/eye4.png'


export default function Herosection() {
  return (
    <div className="container">
        <div className="description">
          <h1 className="heading">AYUREYE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla repudiandae voluptatibus quae magni tempora exercitationem numquam maiores nostrum quibusdam.</p>
        </div>
        <div className="image">
          <img src={pic} alt="box" />
        </div>
    </div>
  )
}
/* eye1 */
