import React from "react";

const WhyWork = () => {
  return (
    <section className="mt-5  ps-lg-5 pr-lg-5">
      <div style={{ marginTop: "-2.8rem" }} className="container text-center ">
        <h1 className=" mb-5">Why Work With Us</h1>
        <div className="row justify-content-center ">
          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "#E5EDFF",
                boxShadow: "0px 0px 28px -7px rgba(0,0,0,0.5)",
              }}
              className="card   p-4"
            >
              <h1
                style={{
                  color: "rgb(71, 100, 168)",
                  fontSize: "96px",
                }}
                className="card-title"
              >
                90%{" "}
              </h1>
              <hr className="w-25 bg-warning mx-auto  " />

              <h6>CLIENT RETENTION</h6>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "#FFF0DC",
                boxShadow: "0px 0px 28px -7px rgba(0,0,0,0.5)",
              }}
              className="card  p-4"
            >
              <h1
                style={{
                  color: "rgb(71, 100, 168)",
                  fontSize: "96px",
                }}
              >
                70
              </h1>
              <hr className="w-25 bg-warning mx-auto  " />

              <h6>DELIVERED PRODUCTS</h6>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "#E5EDFF",
                boxShadow: "0px 0px 28px -7px rgba(0,0,0,0.5)",
              }}
              className="card  p-4"
            >
              <h1
                style={{
                  color: "rgb(71, 100, 168)",
                  fontSize: "96px",
                }}
              >
                350
                <span
                  style={{
                    color: "rgb(71, 100, 168)",
                    fontSize: "16px",
                  }}
                >
                  /Year
                </span>
              </h1>
              <hr className="w-25 bg-warning mx-auto  " />

              <h6>No. of Sprints</h6>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "#FFF0DC",
                boxShadow: "0px 0px 28px -7px rgba(0,0,0,0.5)",
              }}
              className="card  p-4"
            >
              <h1
                style={{
                  color: "rgb(71, 100, 168)",
                  fontSize: "96px",
                }}
              >
                50
              </h1>
              <hr className="w-25 bg-warning mx-auto  " />

              <h6>SATISFIED CLIENTS</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
