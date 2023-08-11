import React from "react";

const Chart = () => {
  return (
    <div className="container ">
      <div className="row align-items-center">
        <div className="col-7">
          <p className="fs-6 fw-bold">Upcoming hours</p>
        </div>
        <div className="col-3">
          <div className="btn-group">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled
            >
              Rain precipitation
            </button>
            <ul className="dropdown-menu">...</ul>
          </div>
        </div>
        <div className="col-2">
          <div className="btn-group dropend">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled
            >
              Next days
            </button>
            <ul className="dropdown-menu">{/* Dropdown menu links */}</ul>
          </div>
        </div>
      </div>
      <div className="row align-items-center d-flex flex-row m-1 light">
        <div className="col-2 ">Now</div>
        <div className="col-2">9:00</div>
        <div className="col-2">11:00</div>
        <div className="col-2">13:00</div>
        <div className="col-2">15:00</div>
        <div className="col-2">17:00</div>
      </div>
      <div className="row align-items-center d-flex flex-row m-1 ">
        <div className="col-2">
          <span className="material-icons light-1 ">wb_sunny</span>
        </div>
        <div className="col-2">
          <span className="material-icons light-1 ">wb_sunny</span>
        </div>
        <div className="col-2">
          <span className="material-icons light-1 ">cloud</span>
        </div>
        <div className="col-2">
          <span className="material-icons light-1 ">cloud</span>
        </div>
        <div className="col-2">
          <span className="material-icons light-1 ">wb_sunny</span>
        </div>
        <div className="col-2">
          <span className="material-icons light-1 ">cloud</span>
        </div>
      </div>
      <div className="row align-items-center d-flex flex-row m-1 light-1">
        <div className="col-2">29°</div>
        <div className="col-2">28°</div>
        <div className="col-2">27°</div>
        <div className="col-2">27°</div>
        <div className="col-2">30°</div>
        <div className="col-2">28°</div>
      </div>
      <div className="row align-items-center d-flex flex-row ps-2  mx-1 my-0 light">
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2 ">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row  ps-2   mx-1 my-0 light">
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row ps-2   mx-1 my-0 light">
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2 bg-primary btl btr">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row  ps-2  mx-1 my-0 light">
        <div className="col-2 ">|</div>
        <div className="col-2 bg-primary btl btr ">|</div>
        <div className="col-2 bg-primary ">|</div>
        <div className="col-2">|</div>
        <div className="col-2">|</div>
        <div className="col-2 bg-primary btl btr">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row ps-2  mx-1 my-0 light">
        <div className="col-2">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary ">|</div>
        <div className="col-2 bg-primary btl btr">|</div>
        <div className="col-2">|</div>
        <div className="col-2 bg-primary">|</div>
      </div>

      <div className="row align-items-center d-flex flex-row ps-2  mx-1 my-0 light">
        <div className="col-2 bg-primary btl btr">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary ">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary btl btr">|</div>
        <div className="col-2 bg-primary">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row ps-2  mx-1 my-0 light">
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary ">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary">|</div>
        <div className="col-2 bg-primary">|</div>
      </div>
      <div className="row align-items-center d-flex flex-row m-1 light">
        <div className="col-2">29%</div>
        <div className="col-2">58%</div>
        <div className="col-2">75%</div>
        <div className="col-2">33%</div>
        <div className="col-2">20%</div>
        <div className="col-2">49%</div>
      </div>
    </div>
  );
};

export default Chart;
