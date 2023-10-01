import React from "react";
import Multor from "../../src/assets/logo.svg";
import Benefit1 from "../../src/assets/multor-benefit1-icon.svg";
import Benefit2 from "../../src/assets/multor-benefit2-icon.svg";
import Benefit3 from "../../src/assets/multor-benefit3-icon.svg";
import Form from "../Form/Form";

import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="image-text-container">
        <div className="text">
          <img src={Multor} alt="Loadiing" />
          <h3>
            Describe the <br />
            value of booking
            <br />
            &nbsp;an&nbsp;appointment
          </h3>
          <p>
            No need to get clever. Tell people exactly what <br /> you're
            offering, then use this space to <br /> communicate your key value
            proposition.
          </p>
        </div>
      </div>
      <div className="benifit-Container">
        <div className="bt-compo">
          <div className="benifi-compo">
            <div className="benefit">
              <img src={Benefit1} alt="Benifit.." />
              <h5>Benefit 1</h5>
            </div>
            <p>
              Highlight the benefits of signing up for an
              <br /> appointment, online class, or video consultation.
            </p>
          </div>
          <div className="benifi-compo">
            <div className="benefit">
              <img src={Benefit2} alt="Benifit.." />
              <h5>Benefit 2</h5>
            </div>
            <p>
              For example, fitness instructors might describe how <br /> their
              routines make people healthier *and* happier.
            </p>
          </div>
          <div className="benifi-compo">
            <div className="benefit">
              <img src={Benefit3} alt="Benifit.." />
              <h5>Benefit 3</h5>
            </div>
            <p>
              Remind visitors how easy it is to claim your offer <br />
              and start enjoying the benefits.
            </p>
          </div>
        </div>
        <div className="div-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
