import React from "react";
import "./Sign.css";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate()
  return (
    <div className="container-fluid bgcc">
      <div className="row">
        <div className="col-md-3 mx-auto mt-5">
          

          <div className="bdrbgc p-5">
          <div className="singin">
          <h1>Sign In</h1>
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
              type="password"
              className="form-control outli mrr"
              id="password"
              placeholder="Password"
            />
          </div>

          <span className="red">Forget Passoword</span>
          <div className="ms-5 mt-4">
          <div className="btn btn-danger">Sign In</div>
          </div>

          <div className="dontAcount">
            <p className="acount">Don't have Acount? <span className="signUp"  onClick={()=> navigate('/signUp')}>Sign Up</span></p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sign;
