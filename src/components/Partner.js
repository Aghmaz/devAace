import React from "react";
import story from "../assets/images/leftimg.jpg";
import "./partner.scss";
const OurStory = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-lg-5 text-center">
            <div
              style={{
                position: "relative",
                height: "450px",
              }}
              className="card"
            >
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "-2.5rem",
                  width: "2.5rem",
                  height: "80%",
                  background: "#ffd700",
                }}
                className="rounded"
              ></div>
              <img
                style={{ height: "100%", width: "auto" }}
                src={story}
                alt="Our Story"
                className="rounded"
              />
            </div>
          </div>
          <div className="col-lg-6 right-text-margin">
            <span className="mob-text">
              Let Us Be Your Next <br />
              Preferred IT Partner
            </span>
            <h1
              // style={{ fontSize: "60px", animation: "fadeIn 1s 1s backwards" }}
              className="mob mb-4"
            >
              Let Us Be Your Next <br />
              Preferred IT Partner
            </h1>

            <ul className="list-unstyled">
              <li>
                <h2 className="right-Text">
                  <i className="fa fa-check text-success me-2 "></i> We are
                  committed to providing quality IT Services
                </h2>
              </li>
              <li>
                <h2 className="right-Text">
                  <i className="fa fa-check text-success me-2"></i> Our benefits
                  are endless for local IT Companies & Startups{" "}
                </h2>
              </li>
              <li>
                <h2 className="right-Text">
                  <i className="fa fa-check text-success me-2"></i> Really know
                  the true needs and expectations of customers{" "}
                </h2>
              </li>
              <li>
                <h2 className="right-Text">
                  <i className="fa fa-check text-success me-2"></i> Talented &
                  experienced management solutions for IT{" "}
                </h2>
              </li>
              <li>
                <h2 className="right-Text">
                  <i className="fa fa-check text-success me-2"></i> Processes of
                  achieving the excellence and continue{" "}
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
