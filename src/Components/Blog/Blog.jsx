import React from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
import logo from '../../../public/Images/logo.png'
import blog from '../../../public/Images/Blog.jpg'
import ravi from '../../../public/Images/ravi.png'

const Blog = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                {" "}
                <h1 className="heading-1">
                  Discover Inspiring Stories on BeFit Blogs
                </h1>
              </div>

              <p className="para">
                Welcome to BeFit, where you can explore a world of insightful
                articles, personal stories, and expert advice across various
                topics. Discover inspiring stories and expert advice on health
                and fitness. Our platform features blogs from both users and
                experts, sharing their journeys, experiences, and tips to help
                you on your fitness path.
              </p>
            </div>
            <div className="btn btn-danger w-25">Write A Blog</div>
          </div>
          <div className="col-md-6">
            <img src={blog} className="blogimg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2 className="heading-2 text-center mt-5">Blogs</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-5">
          
            <div className="card" style={{width: "18rem"}}>
              <img src={ravi} className="card-img-top imghover" alt="..." />
              <div className="card-body">
              <h5 className="card-title">Blog by: Ravi Kag</h5>
              <p className="card-text">
                My Fitness Journey: From Gym Beginner to State-Level Weightlifting Champion
                </p>
                <p>My Fitness Journey...</p>
                <a href="#" className="btn btn-danger" onClick={() => navigate('/blogdetails')}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark">
          <div className="col-md-6 ">
            <img src={logo} alt="logo" className="imglogo"/>
          </div>
            <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mt-5">
            <h4>Quick Link</h4>
            <li onClick={() => navigate('/')} className="list-unstyled curs">Home</li>
            <li onClick={() => navigate('/bmi')} className="list-unstyled curs">BMI</li>
            <li onClick={() => navigate('/blog')} className="list-unstyled curs">Blog</li>
          </div>
            <div className="col-md-6 mt-5">
              <h4>Important Link</h4>
              <li onClick={() => navigate('/FAQ')} className="list-unstyled curs">FAQ</li>
              <li onClick={() => navigate('/about')} className="list-unstyled curs">About Us</li>
            </div>
          </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Blog;
