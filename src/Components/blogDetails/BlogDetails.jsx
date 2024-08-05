import React from "react";
import "./blogDetails.css";
import { useNavigate } from "react-router-dom";
import ravi from '/public/Images/ravi.png'

const BlogDetails = () => {
     const navigate = useNavigate()
  return (
    <div className="container-fluid detailsBg">
      <div className="row ms-3">
        <div className="col-md-8">
          <h1 className="heading-1">
            My Fitness Journey: From Gym Beginner to State-Level Weightlifting
            Champion
          </h1>
          <img src={ravi} alt="" className="raviImgwidth" />
        </div>

        <div className="col-md-4 mt-5 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={ravi}
              className="card-img-top imghover"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Blog by: Ravi Kag</h5>
              <p className="card-text">
                My Fitness Journey: From Gym Beginner to State-Level
                Weightlifting Champion
              </p>
              <p>My Fitness Journey has an incredible ride field with...</p>

            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 ms-3">
        <div className="col-md-8">
          <h2 className="heading-2-1">
            My fitness journey has been an incredible ride filled with
            challenges and triumphs. From starting in the gym in 2019 to winning
            state-level competitions and embracing natural bodybuilding.
          </h2>
        </div>
      </div>

      <div className="row mt-5 ms-3">
        <div className="col-md-8 border color">
          <p>
            Welcome to my fitness blog! I’m excited to share my journey, which
            has been filled with hard work, dedication, and remarkable
            achievements. Here’s a look at how I went from a gym beginner to a
            state-level weightlifting champion and a dedicated natural
            bodybuilder.
          </p>
          <h5>The Beginning: Starting My Gym Journey in 2019</h5>
          <p>
            In 2019, I decided to embark on a fitness journey by joining a gym.
            Initially, my goal was simple: to get fit and build some muscle. I
            started with basic workouts, focusing on learning proper form and
            gradually increasing my strength. Little did I know, this decision
            would change my life in incredible ways.
          </p>
          <p>
            The Competitive Edge: Weightlifting Competitions in 2021 and 2022
            After two years of consistent training, I felt ready to push my
            limits further. In 2021, at the age of 20, I entered my first
            weightlifting competition. Competing at the state level was a
            thrilling experience. The hard work and dedication paid off as I won
            the competition, setting a personal best deadlift of 200 kg in the
            under 80 kg weight category.
          </p>
          <p>
            Encouraged by my success, I continued to train rigorously and
            competed again in 2022. Winning back-to-back state-level
            competitions was a testament to my determination and the effective
            training strategies I had adopted.
          </p>

          <h5>Shifting Focus: Embracing Natural Bodybuilding</h5>
          <p>
            On June 29, 2022, I made a significant lifestyle change by
            transitioning to natural bodybuilding and adopting a vegetarian
            diet. This decision was driven by my desire to maintain peak
            physical health and promote a more sustainable way of living.
          </p>
          <p>
            The Vegetarian Diet: Fueling My Fitness Goals Switching to a
            vegetarian diet required some adjustments, but it has been a
            rewarding experience. My diet now consists of a variety of
            vegetables, fruits, grains, legumes, nuts, and seeds. This change
            has not only supported my bodybuilding goals but has also made me
            feel more energized and healthier overall.
          </p>
          <h5>Highlights of My Journey</h5>
          <p>
            Starting Gym in 2019: The beginning of my fitness journey, learning
            the basics and building a strong foundation. Competing in 2021 and
            2022: Winning state-level weightlifting competitions and achieving a
            personal best deadlift of 200 kg in the under 80 kg weight category.
          </p>
          <p>
            Transitioning to Natural Bodybuilding in 2022: Embracing a
            vegetarian diet and focusing on natural muscle growth and overall
            well-being. What I’ve Learned
          </p>

          <li>
            Consistency is Key: Regular training and sticking to a routine have
            been crucial to my success.
          </li>
          <li>
            Setting Goals: Clear, achievable goals have kept me motivated and
            driven. Adaptability: Being open to change, like switching to a
            vegetarian diet, has helped me grow both physically and mentally.
          </li>
          <li>
            Support System: Having a supportive community, whether it’s fellow
            gym-goers, friends, or family, makes a huge difference.
          </li>
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

export default BlogDetails;
