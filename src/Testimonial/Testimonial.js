import React from "react";
import "./testimonial.css";
import Star from "../../src/assets/multor-testimonial1-stars.svg"
import Star1 from "../../src/assets/multor-testimonial2-stars.svg"
import NameImg from "../../src/assets/girl1.jpg"
import NameImg1 from "../../src/assets/girl2.jpg"

const Testimonial = () => {
  return (
    <div className="testimonial-Container">
      <div className="testimonial">
          <center className="heading">DON'T JUST TAKE OUR WORD FOR IT</center>
          <div className="test-star">
            <div className="feedback">
              <img src={Star} alt="" />
              <p>Share a real testimonial that<br/> hits some of your benefits (but<br/> isn't too sales-y).</p>
              <div className="name-img">
                <img src={NameImg} alt="" />
                <div className="name">
                  <h6>Mariya</h6>
                  <p>Londan</p>
                </div>
              </div>
            </div>
            <div className="feedback">
              <img src={Star1} alt="" />
              <p>Include someone talking about <br/>how easy it was to sign up <br/>and participate.</p>
              <div className="name-img">
                <img src={NameImg1} alt="" />
                <div className="name">
                  <h6>Suzain</h6>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
