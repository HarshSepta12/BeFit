import React, { useState } from "react";
import './Bmi.css';
import { useNavigate } from "react-router-dom";

const Bmi = () => {
  const navigate = useNavigate();

  const [bmi, setBmi] = useState({
    height: '',
    weight: ''
  });
  const [calculatedBmi, setCalculatedBmi] = useState('');

  const onChangeBmi = (e) => {
    const { name, value } = e.target;
    setBmi(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateBMI = () => {
    const heightM = bmi.height / 100;
    const bmiValue = bmi.weight / (heightM * heightM);
    setCalculatedBmi(bmiValue.toFixed(2));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mt-5 text-center">
          <h1 className="heading-1">What is BMI? (Body Mass Index)</h1>
        </div>
        <div className="col-md-12">
          <p className="para w-75 mx-auto">
            Body Mass Index (BMI) is a numerical value derived from an
            individual's weight and height. It's a widely used tool in
            healthcare and fitness circles to assess whether a person's weight
            falls within a healthy range relative to their height. BMI serves as
            an initial screening method to identify potential weight-related
            health risks and guide further evaluation and intervention. While BMI
            provides a useful snapshot of weight status, it's important to note
            that it has limitations. For example, BMI does not distinguish
            between fat mass and lean body mass, so individuals with high muscle
            mass may have a higher BMI without being overweight or obese.
            Additionally, BMI may not accurately reflect health risks for
            certain populations, such as athletes or older adults.
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center flex-wrap">
        <div className="col-md-4">
          <h1 className="text-center heading-1" style={{ color: "red" }}>Calculate your BMI</h1>
          <label className="label-color" htmlFor="height">
            Height <span className="spancolor">*</span>
          </label>
          <input
            className="form-control form-control-lg"
            type="number"
            placeholder="in cm"
            value={bmi.height}
            onChange={onChangeBmi}
            name="height"
          />
          <label className="label-color" htmlFor="weight">
            Weight <span className="spancolor">*</span>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="in kg"
            value={bmi.weight}
            onChange={onChangeBmi}
            name="weight"
          />
          <div className="text-center mt-3">
            <button className="btn btn-danger btn-lg" onClick={calculateBMI}>Calculate</button>
          </div>

          <h1 className="bodyValue">Height: {bmi.height} cm</h1>
          <h1  className="bodyValue">Weight: {bmi.weight} kg</h1>
          {calculatedBmi && (
            <h2  className="bodyValue">Your BMI: {calculatedBmi}</h2>
          )}
        </div>

        <div className="col-md-8">
          <img src="public/Images/BMI Chart.jpeg" alt="chart bmi" className="bmichart" />
        </div>
        
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="heading-1">Benefits of BMI:</h1>
        </div>
        <div className="col-md-12">
          <li className="liStyle">Health Assessment:</li>
          <p className="ms-4 paraPoint">BMI serves as an initial indicator of potential health risks associated with weight. Individuals with BMI values outside the normal range may be at higher risk for conditions such as cardiovascular disease, type 2 diabetes, and hypertension.</p>

          <li className="liStyle">Monitoring Weight Management:</li>
          <p className="ms-4 paraPoint">For individuals striving to achieve or maintain a healthy weight, BMI provides a benchmark for tracking progress over time. By regularly monitoring changes in BMI, individuals can assess the effectiveness of their lifestyle modifications and adjust their approach accordingly.</p>

          <li className="liStyle">Early Intervention:</li>
          <p className="ms-4 paraPoint">Detecting abnormal BMI levels early allows for timely intervention to prevent or manage weight-related health issues. Healthcare professionals can provide personalized guidance on nutrition, exercise, and behavior changes to help individuals achieve a healthier BMI and reduce their risk of chronic diseases.</p>

          <li className="liStyle">Population Health Planning:</li>
          <p className="ms-4 paraPoint">Aggregate BMI data collected from populations enables public health officials to assess the prevalence of obesity and overweight within communities. This information informs the development of targeted interventions and policies aimed at promoting healthy behaviors and reducing the burden of obesity-related diseases.</p>
        </div>
      </div>

      <div className="row ms-3 text-center">
        <div className="col-md-6 mt-5 color">
          <h4>Quick Link</h4>
          <li onClick={() => navigate('/')} className="list-unstyled curs">Home</li>
          <li onClick={() => navigate('/bmi')} className="list-unstyled curs">BMI</li>
          <li onClick={() => navigate('/blog')} className="list-unstyled curs">Blog</li>
        </div>
        <div className="col-md-6 mt-5 color">
          <h4>Important Link</h4>
          <li onClick={() => navigate('/FAQ')} className="list-unstyled curs">FAQ</li>
          <li onClick={() => navigate('/about')} className="list-unstyled curs">About Us</li>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
