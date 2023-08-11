import React from "react";

const Precipitation = () => {
  return (
    <div className="container  ">
      <div className="row p-1">
        <div className="col-10 fw-bold">Precipitation</div>
        <div className="col-2">
          <span
            className="material-icons bg-primary  "
            style={{ color: " white", borderRadius: "25%" }}
          >
            thunderstorm
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <span className="fw-bold fs-4">1.4</span> cm
        </div>
      </div>
      <div className="row">
        <div className="col-2 py-0 my-0">
          <span className="light">0</span>

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
          <span className="light">20</span>

          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">40</span>

          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "0" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">60</span>

          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "0" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">80</span>

          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: 7 }}
          >
            <div className="progress-bar" style={{ width: "0" }} />
          </div>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">100</span>

          <div
            className="progress"
            role="progressbar"
            aria-label="Example 10px high"
            aria-valuenow={0}
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

export default Precipitation;
