import React from 'react'
import "./features.css"
import FeatureImg1 from "../../src/assets/groupPeople.jpg"
import FeatureImg2 from "../../src/assets/image1.jpg"
import FeatureImg3 from "../../src/assets/flower.jpg"

const Features = () => {
  return (
    <div className='feature-container'>
      <center className='features'>
      <div className="feature">
        <img src={FeatureImg1} alt="" />
        <h4>FEATURE 1</h4>
        <p>Talk about some of the details of <br/> your offer with a focus on the<br/> value people get back.</p>
      </div>
      <div className="feature">
        <img src={FeatureImg2} alt="" />
        <h4>FEATURE 2</h4>
        <p>Is there a pain point that your <br/>service resolves? Tell visitors<br/> about it here.</p>
      </div>
      <div className="feature">
        <img src={FeatureImg3} alt="" />
        <h4>FEATURE 3</h4>
        <p>Alternatively, you could use this<br/> section to address some frequently<br/> asked questions.</p>
      </div>
      </center>
      
    </div>
  )
}

export default Features