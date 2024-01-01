import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "./AnimatedLetters";
// import LogoTitle from '../assets/images/logo-s.png'
import Logo from "./Logo";
import "./home.scss";
import { useTypewriter } from "react-simple-typewriter";
import classyFabricImage from "../assets/images/classy_fabric.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["D", "e", "v", "A", "a", "c", "e"];
  const jobArray = [
    "M",
    "e",
    "r",
    "n",
    "",
    "S",
    "t",
    "a",
    "c",
    "k",
    "",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Start-ups",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind",
      "Javascript",
      "React",
      "Next",
      "Angular",
      "Vue",
      "Node",
      "Nest",
      "Express",
      "MongoDb",
      "MySql",
      "Shopify",
      "Wordpress",
      "UI / Ux",
      "Laravel",
      "Django",
      "Flask",
      "Python",
      "codeigniter",
    ],
    loop: 0,
  });

  return (
    <>
      <div
        style={{
          // background: "#122045",
          background:
            "linear-gradient(90deg, #122045 50%, rgba(222, 212, 255, 1) 100%)",
        }}
      >
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span style={{ fontSize: "26px" }} className={letterClass}>
                W
              </span>
              <span
                style={{ fontSize: "26px" }}
                className={`${letterClass} _12`}
              >
                elcome
              </span>
              <span
                style={{ fontSize: "26px" }}
                className={`${letterClass} _12 ms-2`}
              >
                To,
              </span>

              <br />
              {/* <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> */}
              {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              {/* <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              //   idx={22}
              idx={2}
            /> */}
            </h1>

            <h2 style={{ fontSize: "1rem" }}>
              Deliver Inovation IT Solutions For Technology Insights Builidng a
              relationship between IT companies & experts
            </h2>
            {/* Automatic Writing  */}

            <div>
              <span>
                {" "}
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Coolvetica",
                    color: "#ffd700",
                  }}
                >
                  Our Expertises : {text}
                </h2>{" "}
              </span>
            </div>

            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <div className="logo-img">
            <Logo />
          </div>
        </div>

        <Loader type="ball-clip-rotate-multiple" />
      </div>
    </>
  );
};

export default Home;
