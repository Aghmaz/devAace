import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-left">
            {/* <p>Left section content goes here</p> */}
          </div>
          <div className="col-md-6">
            {/* <div className="image-container">
              <div className="image-container-app pt-5">
                <img
                  className="img-fluid mt-5"
                  src="/assets/about1.jpg"
                  alt="About"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
