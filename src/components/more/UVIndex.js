import React from "react";

const UVIndex = () => {
  return (
    <div className="container  ">
      <div className="row p-1">
        <div className="col-10 fw-bold">UV Index</div>
        <div className="col-2">
          <span
            className="material-icons bg-primary  "
            style={{ color: " white", borderRadius: "25%" }}
          >
            light_mode
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <span className="fw-bold fs-4">4</span> medium
        </div>
      </div>
      <div className="row">
        <div className="col-2 py-0 my-0">
          <span className="light">0-2</span>

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
        <div className="col-2 py-0 my-0">
          <span className="light">3-5</span>
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
        <div className="col-2 py-0 my-0">
          <span className="light">6-7</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">8-9</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "0" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">
            <span className="light">11+</span>
          </span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "0" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UVIndex;
