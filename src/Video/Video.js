import React from 'react'
import "./video.css"
import ImgVideo from "../../src/assets/laptopgirl.jpg"

const Video = () => {
  return (
    <div className='Video-Container'>
      <div className="text-video">
        <div className="text-vid">
          <center>
          <h5>Show visitors what <br/>they're signing up for</h5>
          <p>Include a video or photo from one of your sessions to help people <br/> understand your service (or just to hype ‘em up).</p>
          </center>
          
        </div>
        <div className="video">
          <center>
          <iframe style={{width:"80%",height:"500px",position:"relative" ,bottom:"10rem"}} src="https://www.youtube.com/embed/cBlIbJ78SRY"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share" allowfullscreen></iframe>
 
          </center>
        
        </div>
      </div>
    </div>
  )
}

export default Video