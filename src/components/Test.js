import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Team from "./Team";
import Hero from "./Hero";
import Home from "./Animation";
import ClientReviews from "./Client";
import SixD from "./SixD";
import WhyWork from "./WhyWork";
import OurStory from "./OurStory";
import Partner from "./Partner";
import Statistics from "./Statistics";
import Portfolio from "./Portfolio";
import CompanyLogos from "./CompanyLogos";
const Test = () => {
  return (
    <div style={{ backgroundColor: "#f2eeed" }}>
      <Home />
      {/* <Hero /> */}
      <Statistics />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto" />

      <Partner />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto" />
      <Services />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto" />

      <SixD />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto" />
      <About />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto" />
      <WhyWork />

      <Portfolio />
      <hr style={{ marginTop: "5rem" }} className="w-25 mx-auto  " />
      <Team />
      <CompanyLogos />
      <ClientReviews />
      <hr className="w-25 mx-auto" />

      <Contact />
    </div>
  );
};

export default Test;
