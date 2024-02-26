import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form_section">
      <div className="overlay" />
      <div className="container">
        <form>
          <h3>Register !!</h3>
          <div className="form_label">
            <input
              type="text"
              className="full_name"
              placeholder="Enter full name"
            />
            <span className="name_error" />
          </div>
          <div className="form_label">
            <input type="text" className="email" placeholder="Enter email" />
            <span className="email_error" />
          </div>
          <div className="form_label password_label">
            <input
              type="password"
              className="password"
              placeholder="Enter password"
            />
            <i className="fa-solid fa-eye" />
            <i className="fa-solid fa-eye-slash" />
            <span className="password_error" />
          </div>
          <button className="register">Register</button>
        </form>
        <p>
          Have an account? <Link to="/login">Login.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
