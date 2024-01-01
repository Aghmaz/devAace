import React, { useEffect, useState } from "react";

const Statistics = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [employeesCount, setEmployeesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  useEffect(() => {
    const startCounting = (finalValue, setFunction) => {
      let currentValue = 0;
      const increment = finalValue / 200;

      const interval = setInterval(() => {
        currentValue += increment;
        setFunction(Math.floor(currentValue));

        if (currentValue >= finalValue) {
          clearInterval(interval);
          setFunction(finalValue);
        }
      }, 25);
    };

    // Start counting for each statistic
    startCounting(210, setClientsCount);
    startCounting(103, setCompaniesCount);
    startCounting(604, setEmployeesCount);
    startCounting(15, setCountriesCount);
  }, []);

  return (
    <section className="py-5 mt-3">
      <div className="container mt-5">
        <div className="row text-center mt-5">
          <div className="col-md-3 ">
            <div className=" counter">
              <i className="fa fa-users fa-2x mb-3"></i>
              <h2 className="mb-0">
                <h1
                  style={{
                    color: "rgb(71, 100, 168)",
                    fontSize: "96px",
                  }}
                  className="count"
                >
                  {clientsCount}
                </h1>
              </h2>
              <p>Clients</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <i className="fa fa-building fa-2x mb-3"></i>
              <h2 className="mb-0">
                <h1
                  style={{
                    color: "rgb(71, 100, 168)",
                    fontSize: "96px",
                  }}
                  className="count"
                >
                  {companiesCount}
                </h1>
              </h2>
              <p>Companies</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <i className="fa fa-users fa-2x mb-3"></i>
              <h2 className="mb-0">
                <h1
                  style={{
                    color: "rgb(71, 100, 168)",
                    fontSize: "96px",
                  }}
                  className="count"
                >
                  {employeesCount}
                </h1>
              </h2>
              <p>Employees</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <i className="fa fa-globe fa-2x mb-3"></i>
              <h2 className="mb-0">
                <h1
                  style={{
                    color: "rgb(71, 100, 168)",
                    fontSize: "96px",
                  }}
                  className="count"
                >
                  {countriesCount}
                </h1>
              </h2>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
