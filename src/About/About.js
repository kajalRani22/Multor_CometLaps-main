import React from 'react'
import "./about.css"
import AboutImg from "../../src/assets/image2.jpg"

const About = () => {
  return (
    <div className='about-container'>
      <div className="about">
        <img src={AboutImg} alt="About" className='ab' />
        <div className="about-text">
        <h6>ABOUT</h6>
        <h4>Some more<br/> information about<br/> your business</h4>
        <p>Share a little about yourself as a business owner,<br/> or maybe describe what makes your service <br/>unique. Give visitors one more reason to care<br/> about your offer and want to work with you.</p>

        </div>
      </div>
    </div>
  )
}

export default About