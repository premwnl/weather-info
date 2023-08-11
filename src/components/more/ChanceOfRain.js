import React from "react";

const ChanceOfRain = () => {
  return (
    <div className="container ">
      <div className="row p-1">
        <div className="col-10 fw-bold">Chance of rain</div>
        <div className="col-2">
          <span
            className="material-icons bg-primary "
            style={{ color: " white", borderRadius: "25%" }}
          >
            beach_access
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <span className="fw-bold fs-4">42%</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 py-0 my-2">
          <div className="d-flex justify-content-between">
            <span className="light">0°</span>
            <span className="light">25°</span>
            <span className="light">50°</span>
            <span className="light">75°</span>
            <span className="light">100°</span>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={45}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "45%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanceOfRain;
