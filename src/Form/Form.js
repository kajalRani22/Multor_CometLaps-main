import React, { useState } from "react";

import "./form.css";
import ModalPopup from "./ModalPopup";

const Form = () => {
  const [open, setOpen] = useState(false);
  

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    type: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      type: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-container">
      <div className="form">
        <center>
          <div className="schedule-text">
            <h3>
              Schedule an
              <br /> Appointment
            </h3>
            <p>
              Here, let visitors know what will happen
              <br /> when they complete your form.
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              placeholder="First name*"
              type="text"
              required
            />
            <input
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              placeholder="Last name*"
              type="text"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address*"
              type="email"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone*"
              type="text"
              required
            />
            <br />
            <select
              
            >
              <option value="type">Type of Appointment</option>
              <option value="type1">Type1</option>
              <option value="type2">Type2</option>
              <option value="type3">Type3</option>
            </select>
            <ModalPopup open={open} handleClose={handleClose} />
            {/* <button type="submit"></button> */}
          </form>
        </center>
      </div>
    </div>
  );
};

export default Form;
