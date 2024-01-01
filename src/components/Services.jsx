import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container mb-5 my-2 py-1">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-5">
                Our <b>Awesome</b> Services
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                  <p className="card-text lead">
                    DevAace provides highly customizable solutions tailored to meet your specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Fully Responsive Layout</h5>
                  <p className="card-text lead">
                    Our websites and applications are built with fully responsive layouts for a seamless user experience on all devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
                  <p className="card-text lead">
                    DevAace is committed to delivering exceptional user experiences to your customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Creative Web Design</h5>
                  <p className="card-text lead">
                    Our team specializes in creative web design that captivates and engages your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Unique and Clean</h5>
                  <p className="card-text lead">
                    DevAace delivers unique and clean code to ensure your projects are efficient and maintainable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Creative Ideas</h5>
                  <p className="card-text lead">
                    Our team is always ready to brainstorm and implement creative ideas to make your projects stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
