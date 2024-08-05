import React from "react";
import "./home.css";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { BiHealth } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import properDiet from '../../../public/Images/Proper Diet.png';
import GymLogo from '/public/Images/gymLogo.png'
import Poster1 from '../../../public/Images/poster1.jpg';
import body from '../../../public/Images/body.jpg'
import body1 from '../../../public/Images/body1.jpg'

const Home = () => {
  return (
    <div className="container-fluid bgc">
      <div className="row">
        <div className="col-sm-12">
        <img className="poster1" src={Poster1} alt="poster1" />
        </div>
      </div>
   
      <div className="row">
        <div className="col-md-12">
        <div className="bigParent">
        <div className="parentDiv">
          <h2 className="heading-2">The Importance of Physical Fitness</h2>
          <div>
            <div className="brain">
              <RiMentalHealthLine className="iconSize" />
              <h3 className="heading-3">Improved Mental Health</h3>
            </div>
            <p className="para">
              Regular physical activity can help reduce symptoms of depression
              and anxiety, and promote a better mood and overall mental
              well-being.
            </p>

            <div className="health">
              <MdHealthAndSafety className="iconSize" />
              <h3 className="heading-3">Enhanced Physical Health</h3>
            </div>
            <p className="para">
              Staying active can help you maintain a healthy weight, reduce your
              risk of chronic diseases, and strengthen your muscles and bones.
              Social Benefits
            </p>

            <div className="socialBeni">
              <BiHealth className="iconSize" />
              <h3 className="heading-3">Social Benifit</h3>
            </div>
            <p className="para">
              Engaging in physical activities often involves social interaction,
              which can help build community and foster relationships.
            </p>
          </div>
        </div>
        <div className="width">
          <img
            src={properDiet}
            alt="ProperDiet"
            className="diet"
          />
        </div>
      </div>
        </div>
      </div>
      
    <div className="row">
      <div className="col-md-12">
      <div className="whyBeFit">
        <h3 className="heading-3-1">Unlock Your Fitness Potential with Befit: Gateway to Fitness</h3>
        <div className="contentt">
          <h5 className="heading-5">Why Choose Befit?</h5>
          <p className="contentPara mt">
            . At Befit, we believe that fitness is not just a routine but a
            lifestyle. Our comprehensive approach focuses on every aspect of
            your well-being, ensuring you achieve a balanced and healthy life.
            Here's what sets Befit apart:
          </p>
          &nbsp;
          <p className="contentPara">
            . Personalized Fitness Plans: Tailored workouts that cater to your
            individual needs, fitness level, and goals.
          </p>
          &nbsp;
          <p className="contentPara">
            . Nutrition Support: Customized meal plans and nutrition tips to
            complement your fitness regime and boost your results.
          </p>
          &nbsp;
          <p className="contentPara">
            . Community Support: Join a community of like-minded individuals who
            share your passion for fitness and well-being.
          </p>
          &nbsp;
          <p className="contentPara">
            . Progress Tracking: Monitor your progress with our advanced
            tracking tools, ensuring you stay on the right path towards your
            goals.
          </p>
        </div>
      </div>
      </div>
    </div>
      

    <div className="row rowAbout">
      <div className="col-md-6">
      <div className="about">
        <img
          src={GymLogo}
          alt="poster"
          className="logo"
          />

      </div>
    </div>
    <div className="col-md-6">
    <div className="aboutContent">
          <h3 style={{color:"red", textAlign: "center" }}>About Befit</h3>
          <p>
            Welcome to Befit, where your fitness journey begins and thrives. At
            Befit, we are dedicated to helping you achieve your health and
            wellness goals through a holistic and personalized approach. Our
            mission is to make fitness accessible, enjoyable, and effective for
            everyone.
          </p>
          <h5>Our Mission:</h5>
          <p>
            At Befit, our mission is to empower individuals to lead healthier,
            happier lives. We believe that fitness is more than just exercise;
            it’s a lifestyle. Our goal is to provide you with the knowledge,
            tools, and support you need to make lasting changes and reach your
            full potential.
          </p>

          <h5>Our Approach:</h5>
          <p>
            Befit combines the latest in fitness science with personalized
            support to help you achieve your goals. Our approach includes:
          </p>
          &nbsp;
          <div className="me">
          <p>
           <b>Customized Workout Plans:</b>  Tailored to meet your specific needs and
            preferences.
          </p>
          &nbsp;
          <p>
          <b>Expert Trainers:</b>  Certified professionals providing guidance and
            motivation.
          </p>
          &nbsp;
          <p>
          <b>Nutritional Guidance:</b>  Balanced diet plans that complement your
            workouts.
          </p>
            &nbsp;
          <p>
          <b>Holistic Wellness:</b> Programs focused on mindfulness, stress
            management, and overall well-being.
          </p>
          </div>
        </div>
    </div>
        
      </div>

      <div className="row">
        <div className="col-md-12">
        <div className="parentOurTeam">
        <h3 style={{textAlign:"center",color:"red"}}>Our Team</h3>
      <div className="ourTeam">
              <div className="member1">
              <img src={body} alt="body" className="body"/>
              <h4 style={{textAlign:"center"}}>Sachin Parmar</h4>
              <a href="https://www.instagram.com/harshsepta/" target="blank"><FaInstagram /></a>
              </div>
           <div className="member2">
           <img src={body1} alt="body" className="body img"/>
           <h4 style={{textAlign:"center"}}>Ravi Kag</h4>
           <a href="https://www.instagram.com/harshsepta/" target="blank"><FaInstagram /></a>
           </div>
           <div className="member3">
           <img src={body1} alt="body" className="body img"/>
           <h4 style={{textAlign:"center"}}>Sunil Mulewa</h4>
           <a href="https://www.instagram.com/harshsepta/" target="blank"><FaInstagram /></a>
           </div>
            
      </div>
        </div>
        </div>
      </div>
       
    </div>
  );
};

export default Home;
