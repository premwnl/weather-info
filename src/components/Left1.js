import React from "react";

const Left1 = () => {
  return (
    <div className="left-side p-4">
      <div className="container ">
        <div className="row align-items-center text-start d-flex justify-content-between">
          <div className="col-4">
            <span
              className="material-icons cursor"
              style={{ color: " white", borderRadius: "50%" }}
            >
              add_box
            </span>
          </div>

          <div className="col-4  d-flex ">
            <div className="form-check form-switch form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckReverse"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckReverse"
              >
                <span className="light-1" style={{ color: "white" }}>
                  C°
                </span>
              </label>
            </div>
            <span
              className="form-check-span p-1 light-1"
              htmlFor="flexSwitchCheckChecked"
              style={{ color: "white" }}
            >
              F°
            </span>
          </div>
        </div>

        <div className="row align-items-start text-start my-4 text-white   ">
          <div className="col-8 d-flex flex-nowrap cursor">
            <span className="material-icons fs-4">near_me</span>
            <p>New York, USA</p>
          </div>
          <div className="col-3 light-1 d-flex flex-nowrap cursor">
            <span className="material-icons fs-6 m-1">watch_later</span>
            <p className="my-1 ">07:19</p>
          </div>
          <div className="col-8 light-1 my-1 cursor">
            <p>Today, 28 Sept</p>
          </div>
          <div className="col-3 light-1 d-flex flex-nowrap cursor">
            <span className="material-icons fs-6 m-1">watch_later</span>
            <p className="my-1">19:32</p>
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-12 cursor ">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1 className="text-white">27°C</h1>
                </div>
                <div className="carousel-item">
                  <h1 className="text-white">80.6°F</h1>
                </div>
                <div className="carousel-item">
                  <h1 className="text-white">300.1K</h1>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className="col-12 text-white d-flex justify-content-center cursor flex-nowrap">
            <span
              className="material-icons bg-primary m-2  "
              style={{ color: " white", borderRadius: "25%" }}
            >
              wb_sunny
            </span>
            <h6 className="m-2 p-1 ">Sunny</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left1;
