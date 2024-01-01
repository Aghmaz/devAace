import React from "react";
import story from "../assets/images/mainright.png";

const OurStory = () => {
  return (
    <section className="py-5">
      <div className="container mb-5">
        <div className="row align-items-center">
          <h1
            style={{
              fontSize: "66px",
              marginTop: "-4rem",
              // animation: "fadeIn 1s 1s backwards",
            }}
          >
            {" "}
            Our story
          </h1>
          <div className="col-md-6">
            <p>
              DevAace, established in 2019, is dedicated to offering
              comprehensive product development solutions to enterprises and
              startups. Our mission is to build lasting relationships with our
              clients and ensure their satisfaction through timely and
              high-quality services. With the perfect blend of well-established
              enterprise processes and the agility of a startup, we provide a
              unique service experience. Our commitment to exceeding client
              expectations sets us apart, leaving a lasting impression as a
              success story to be cherished.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              style={{
                marginTop: "-5rem",
              }}
              src={story}
              alt="Our Story"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
