import React from "react";
import { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import "./about.scss";

import classyFabricImage from "../assets/images/classy_fabric.png";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const container = ".tagcloud";
  const texts = [
    "HTML5",
    "CSS3",
    "SASS",
    "TAILWIND",
    "JavaScript",
    "React",
    "NodeJS",
    "Babel",
    "Jquery",
    "ES6",
    "Shopify",
    "Wordpress",
    "GIT",
    "GITHUB",
  ];

  const options = {
    radius: 180,
    maxSpeed: "normal",
    initSpeed: "normal",
    keep: true,
  };

  useEffect(() => {
    try {
      TagCloud(container, texts, options);
    } catch (error) {
      console.error("TagCloud initialization error:", error);
    }
  }, []);
  return (
    <div
      style={{
        // background: `url(${classyFabricImage}) repeat`,
        marginTop: "-8rem",
      }}
    >
      <section style={{ background: "#122045" }} id="about">
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className="display-6 mt-2 mb-5 text-white">
                {" "}
                <b>About Us</b>
              </h1>
              <h3 className="display-6 mb-2 text-white">
                Who <b>We</b> Are
              </h3>
              <hr className="w-50 text-white " />
              <p className="lead mb-4 text-white ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                odit dolorum, necessitatibus dignissimos reprehenderit dicta id
                rem. Exercitationem soluta ipsam necessitatibus aliquid totam
                recusandae a alias optio eum quas, corrupti ducimus cupiditate
                aut adipisci eos tempora quam similique nemo quo, vel dicta
                blanditiis. Esse magnam laudantium officiis et sed quis?
              </p>
              {/* <button className="btn btn-outline-dark rounded-pill px-4 py-2">
                Get Started
              </button>
              <button
                navigate="/"
                className="btn btn-outline-dark rounded-pill px-4 py-2 ms-2"
              >
                Contact Us
              </button> */}
            </div>
            <div className="col-md-6">
              <div className="main">
                <div className="text-sphere">
                  <span className="tagcloud"> </span>
                </div>
              </div>
              {/* <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
