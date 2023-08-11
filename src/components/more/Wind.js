import React from "react";

const Wind = () => {
  return (
    <div className="container ">
      <div className="row p-1">
        <div className="col-10 fw-bold">Wind</div>
        <div className="col-2">
          <span
            className="material-icons bg-primary "
            style={{ color: " white", borderRadius: "25%" }}
          >
            air
          </span>
        </div>
      </div>
      <div className="row ">
        <div className="col-2 py-0 my-0">
          <span className="light">0</span>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">20</span>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">40</span>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">60</span>
        </div>
        <div className="col-2 py-0 my-0">
          <span className="light">80</span>
        </div>
      </div>

      <div className="row">
        <div className="col-4 text-center ">
          <div className="progress-1">
            <div className="barOverflow-1">
              <div className="bar-1" />
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span classname="fw-bold fs-4 ">8</span>
          km/h
        </div>
        {/* <div className="row">
          <div className="col-12 text-center">
            <span className="fw-bold fs-4">30°</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Wind;
