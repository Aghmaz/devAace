import React from "react";

const SixD = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discover",
      description:
        "Understand project strengths, weaknesses, and plan for meaningful development.",
    },
    {
      step: 2,
      title: "Define",
      description:
        "Analyze software performance, document requirements, and define project scope.",
    },
    {
      step: 3,
      title: "Design",
      description:
        "Build project architecture, remove flaws, and create a solid blueprint.",
    },
    {
      step: 4,
      title: "Develop",
      description:
        "Start software development, record data, and conduct pilot testing.",
    },
    {
      step: 5,
      title: "Deliver",
      description:
        "Ensure software passes all stages, undergoes regular maintenance, and adapts to changes.",
    },
    {
      step: 6,
      title: "Deploy",
      description:
        "Thoroughly test software, identify and document any bugs before deployment.",
    },
  ];

  return (
    <div style={{ marginTop: "-2rem" }} className="container-fluid pb-5 ">
      <div className="container ps-5 pr-5">
        <h1 className="display-6 text-center mb-5">Our 6-D Process</h1>
        <div className="row">
          {processSteps.map((step) => (
            <div className="col-md-4 mb-4" key={step.step}>
              <div
                style={{
                  // background: "#E5EDFF",
                  borderRadius: "2rem",
                  boxShadow: "0px 0px 28px -7px rgba(0,0,0,0.5)",
                  background: "#122045",
                }}
                className="card p-3"
              >
                <div
                  style={{
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  className="card-body p-3 "
                >
                  <h2 style={{ color: "#FFB454" }}> {step.step}:</h2>
                  <h3 className="card-title mb-3 fs-4 fw-bold text-white">
                    {step.title}
                  </h3>
                  <p className="card-text lead text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixD;
