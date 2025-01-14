import React from "react";
import "./RegForm.css";
import { Link } from "react-router-dom";
const CreateAccount = () => {
  return (
    <div className="create-account">
      <h1 className="hero">Create Account</h1>
      <p className="hero">Share Your Basic Information for Account Creation</p>
      <form>
        <div className="form-group">
          <label>Register as</label>
          <select id="Sel">
            <option>Select</option>
          </select>
        </div>

        <div className="form-row">
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
        </div>

        <div className="form-row">
          <div className="gender-group">
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="Male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="Female" />
            <label htmlFor="female">Female</label>
          </div>
          <input type="date" placeholder="Date of Birth*" required />
        </div>

        <div className="form-row">
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone Number*" required />
        </div>

        <input type="text" placeholder="Office Address" />
        <div className="form-row">
          <input type="text" placeholder="City*" required />
          <select>
            <option>Select State</option>
          </select>
        </div>

        <div className="form-row">
          <select>
            <option>Specialisation*</option>
          </select>
          <input type="text" placeholder="ICAI Membership Number*" required />
        </div>

        <input type="text" placeholder="PAN Card Number*" required />
        <div className="form-row">
          <input type="password" placeholder="Password*" required />
          <input type="password" placeholder="Confirm Password*" required />
        </div>

        <div className="form-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <a href="/">Terms Of Services</a> and{" "}
            <a href="/">Privacy Policy</a>
          </label>
        </div>
        <Link to="/verification" className="submit-btn">Submit</Link>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
