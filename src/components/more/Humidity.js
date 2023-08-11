import React from "react";

const Humidity = () => {
  return (
    <div className="container ">
      <div className="row p-1">
        <div className="col-10 fw-bold">Humidity</div>
        <div className="col-2">
          <span
            className="material-icons bg-primary "
            style={{ color: " white", borderRadius: "25%" }}
          >
            opacity
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <span className="fw-bold fs-4">82%</span> bad
        </div>
      </div>
      <div className="row">
        <div className="col-4 py-0 my-0">
          <span className="light-1">good</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="col-4 py-0 my-0">
          <span className="light-1">normal</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="col-4 py-0 my-0">
          <span className="light-1">bad</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "25%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
