import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const Sign = () => {
     const navigate = useNavigate()
  return (
    <div className="container-fluid bgcc">
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <div className="bdrbgc p-5">
            <div className="signup">
              <h1>Sign Up</h1>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control outli mrr"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control outli mrr"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control outli mrr"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control outli mrr"
                id="phone"
                placeholder="Mobile"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control outli mrr"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control outli mrr"
                id="password"
                placeholder="Confirm Password"
              />
            </div>

            <span className="red">Forget Password</span>
            <div className="ms-5 mt-4">
              <div className="btn btn-danger">Sign In</div>
            </div>

            <div className="dontAccount">
              <p className="account">
                Don't have an account? <span className="signUp" onClick={() => navigate('/signin')}>Sign in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
