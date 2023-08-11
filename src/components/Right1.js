import React from "react";
import Chart from "./more/Chart";

const Right1 = () => {
  return (
    <div className="right-side p-4">
      <div className="container m-2 ">
        <div className="row  align-items-center">
          <div className="col-12 p-0 text-start">
            <div className="container  ">
              <div className="row  align-items-center">
                <div className="col-10 p-0">
                  <h6>Welcome Back IsaBella!</h6>
                  <p>Check out today's weather information</p>
                </div>
                <div className="col-1 d-flex justify-content-end align-items-start p-0  ">
                  <p style={{ fontWeight: "900" }}>...</p>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-start p-0">
                  <span class="material-icons">face</span>
                  <br />
                  <p style={{ visibility: "hidden" }}>.</p>
                </div>
              </div>
            </div>
            <div className="container right-12 p-0 m-auto shadow-sm shadow ">
              <div className="row  align-items-center">
                <div className="col-12 m-2 ">
                  <Chart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right1;
