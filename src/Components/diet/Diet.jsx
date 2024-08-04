import React, { useState } from "react";
import "./Diet.css";

const Diet = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bmi: "",
    gender: "",
    dietPreference: "",
    dietGoal: "",
    exercise: "",
  });

  const dataSet = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HandleForm = (e) => {
    e.preventDefault();
    alert("Your Data Have been Saved Successfully");
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="container-fluid bgcc">
      <div className="row">
        <div className="col-md-8 mx-auto mt-5">
          <form className="row g-3 mb-5 shadow p-3" onSubmit={HandleForm}>
            <div className="text-center">
              <h3>Diet: Importance and Benefits</h3>
              <p>
                A balanced diet is vital for our overall health and well-being.
                It provides the necessary nutrients that our body needs to
                function correctly. A good diet can improve our physical and
                mental health, increase energy levels, and reduce the risk of
                chronic diseases. By understanding our dietary needs and making
                informed choices, we can maintain a healthy lifestyle. Our
                experts will guide you to maintain a diet tailored to your
                needs, whether you aim to lose weight, maintain your current
                weight, or gain weight.
              </p>
            </div>
            <div className="col-md-4">
              <label htmlFor="height" className="form-label">
                Height(cm)
              </label>
              <input
                type="number"
                className="form-control outli"
                id="height"
                name="height"
                onChange={dataSet}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="weight" className="form-label">
                Weight(kg)
              </label>
              <input
                type="number"
                className="form-control outli"
                id="weight"
                name="weight"
                onChange={dataSet}
              />
            </div>
            <div className="col-4">
              <label htmlFor="bmi" className="form-label">
                BMI
              </label>
              <input
                type="number"
                className="form-control outli"
                id="bmi"
                name="bmi"
                onChange={dataSet}
              />
            </div>
            <div className="col-12">
              <label htmlFor="gender" className="form-label-lg">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="form-select form-select-lg mb-3 outli"
                onChange={dataSet}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="dietPreference" className="form-label-lg">
                Diet Preference
              </label>
              <select
                name="dietPreference"
                id="dietPreference"
                className="form-select form-select-lg mb-3 outli"
                onChange={dataSet}
              >
                <option value="">Select Diet</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-vegetarian</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="dietGoal" className="form-label-lg">
                Diet Goal
              </label>
              <select
                name="dietGoal"
                id="dietGoal"
                className="form-select form-select-lg mb-3 outli"
                onChange={dataSet}
              >
                <option value="">Select Goal</option>
                <option value="losing-weight">Losing Weight</option>
                <option value="maintaining-weight">Maintaining Weight</option>
                <option value="gaining-weight">Gaining Weight</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="exercise" className="form-label-lg">
                Exercise Level
              </label>
              <select
                name="exercise"
                id="exercise"
                className="form-select form-select-lg mb-3 outli"
                onChange={dataSet}
              >
                <option value="">Select Exercise Type</option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="extreme">Extreme</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Also send me instructions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-3 mx-auto">
              <button className="btn btn-danger" type="submit">
                Submit
              </button>
            </div>
{/*             
            <ul>
              <li>Height: {formData.height} cm </li>
              <li>Weight: {formData.weight}Kg</li>
              <li>BMI: {formData.bmi}</li>
              <li>Gender: {formData.gender}</li>  
              <li>Diet Preference: {formData.dietPreference}</li> 
              <li>Diet Goal: {formData.dietGoal}</li>  
              <li>Exercise Level: {formData.exercise}</li> 
            </ul> */}
            
          </form>
        </div>
      </div>

      <div className="row ms-3 text-center">
        <div className="col-md-6 mt-5">
          <h4>Quick Link</h4>
          <li onClick={() => navigate("/")} className="list-unstyled curs">
            Home
          </li>
          <li onClick={() => navigate("/bmi")} className="list-unstyled curs">
            BMI
          </li>
          <li onClick={() => navigate("/blog")} className="list-unstyled curs">
            Blog
          </li>
        </div>
        <div className="col-md-6 mt-5">
          <h4>Important Link</h4>
          <li onClick={() => navigate("/FAQ")} className="list-unstyled curs">
            FAQ
          </li>
          <li onClick={() => navigate("/about")} className="list-unstyled curs">
            About Us
          </li>
        </div>
      </div>
    </div>
  );
};

export default Diet;
