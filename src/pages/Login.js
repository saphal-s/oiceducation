import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form_section">
      <div className="overlay" />
      <div className="container">
        <form>
          <h3>Login !!</h3>
          <div className="form_label">
            <input type="text" placeholder="Enter email" />
          </div>
          <div className="form_label">
            <input type="text" placeholder="Enter password" />
          </div>
          <button>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
