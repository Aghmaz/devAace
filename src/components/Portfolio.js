import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "./AnimatedLetters";
import "./portfolio.scss";
import image1 from "../assets/images/project-1.png";
import image2 from "../assets/images/project-2.png";
import image3 from "../assets/images/project-3.png";
import image4 from "../assets/images/project-4.png";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  // Define your local array of portfolio items with image paths
  const localPortfolio = [
    {
      name: "Project 1",
      description: "Description for Project 1",
      image: image1,
      url: "/",
    },
    {
      name: "Project 2",
      description: "Description for Project 2",
      image: image2,
      url: "/",
    },
    {
      name: "Project 3",
      description: "Description for Project 3",
      image: image3,
      url: "/",
    },
    {
      name: "Project 4",
      description: "Description for Project 3",
      image: image4,
      url: "/",
    },
  ];

  useEffect(() => {
    setPortfolio(localPortfolio);
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="text-center">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div className="mt-5">{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};

export default Portfolio;
