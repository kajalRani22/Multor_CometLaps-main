import React from 'react'
import "./footer.css"
import Logo1 from "../../src/assets/77034ff2-multor-logo-footer.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-img">

      <center className='footer'>
        <img src={Logo1} alt="Image" />
        <h6>© 2023 Kajal rani. All rights reserved</h6>
      </center>
      </div>
      
    </div>
  )
}

export default Footer